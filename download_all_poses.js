const fs = require('fs');
const path = require('path');

const manifest = JSON.parse(fs.readFileSync('poses_manifest.json', 'utf8'));

// The 7 canonical categories from user & site
// STANDING, SEATED/TWISTS, RECLINING, INVERSIONS, FORWARD BENDS, BACK BENDS, ARM BALANCES
const VALID_CATEGORIES = [
  'standing',
  'seated-twists',
  'reclining',
  'inversions',
  'forward-bends',
  'back-bends',
  'arm-balances'
];

function toTitleCase(str) {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map(word => {
      if (['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by'].includes(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    .replace(/^./, c => c.toUpperCase());
}

function sanitizeSlug(title, url) {
  const urlPart = url.replace(/\/$/, '').split('/').pop();
  return (urlPart || title)
    .toLowerCase()
    .replace(/[^\w-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}

async function downloadImage(imgUrl, targetPath) {
  try {
    if (fs.existsSync(targetPath) && fs.statSync(targetPath).size > 1000) {
      return true;
    }
    const res = await fetch(imgUrl);
    if (!res.ok) return false;
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(targetPath, Buffer.from(buffer));
    return true;
  } catch (e) {
    console.error(`Failed to download ${imgUrl}:`, e.message);
    return false;
  }
}

async function processPose(item) {
  try {
    const res = await fetch(item.url);
    if (!res.ok) {
      console.warn(`HTTP ${res.status} for ${item.url}`);
      return null;
    }
    const html = await res.text();

    const headings = [...html.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)]
      .map(m => m[1].replace(/<[^>]+>/g, '').trim())
      .filter(Boolean);

    let englishName = headings[0] || item.title;
    // Clean up englishName if needed
    englishName = englishName.replace(/\s+/g, ' ').trim();

    let sanskritName = headings[1] || '';
    if (/STEPS|QUEUES|COMMENTS|BENEFIT|WATCH|MODIFICATIONS|VARIATIONS|Effortlessly|Join/i.test(sanskritName)) {
      sanskritName = '';
    }
    sanskritName = toTitleCase(sanskritName.trim()) || englishName;

    function getSection(secTitle) {
      const regex = new RegExp(`>${secTitle}<\\/h[1-6]>([\\s\\S]*?)(?:<h[1-6]|<div class="testi|$)`, 'i');
      const m = html.match(regex);
      if (!m) return '';
      return m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    }

    const benefits = getSection('BENEFIT COMMENTS');
    const steps = getSection('STEPS');
    const teacherCues = getSection('TEACHER QUEUES');
    const modifications = getSection('MODIFICATIONS');

    // Determine difficulty based on text keywords
    let difficulty = 'intermediate';
    const combinedText = (steps + ' ' + benefits + ' ' + modifications).toLowerCase();
    if (combinedText.includes('beginner') || combinedText.includes('simple') || combinedText.includes('basic') || combinedText.includes('restorative')) {
      difficulty = 'beginner';
    } else if (combinedText.includes('advanced') || combinedText.includes('difficult') || combinedText.includes('master')) {
      difficulty = 'advanced';
    }

    // Determine concise shortFact
    let shortFact = benefits.split('.')[0];
    if (!shortFact || shortFact.length < 15) {
      shortFact = steps.split('.')[0] || `${englishName} promotes strength, stability, and mindful awareness.`;
    }
    shortFact = shortFact.replace(/\s+/g, ' ').trim();
    if (!shortFact.endsWith('.')) shortFact += '.';

    const slug = sanitizeSlug(englishName, item.url);

    // Image handling
    let localImagePath = `/poses/${slug}.jpg`;
    if (item.imgUrl) {
      const extMatch = item.imgUrl.match(/\.(jpg|jpeg|png|webp)/i);
      const ext = extMatch ? extMatch[1].toLowerCase() : 'jpg';
      const filename = `${slug}.${ext}`;
      const targetFilePath = path.join(__dirname, 'public', 'poses', filename);
      const downloaded = await downloadImage(item.imgUrl, targetFilePath);
      if (downloaded) {
        localImagePath = `/poses/${filename}`;
      }
    }

    // Assign categories
    const categories = item.categories.filter(c => VALID_CATEGORIES.includes(c));
    const category = categories[0] || 'standing';

    return {
      id: slug,
      englishName,
      sanskritName,
      difficulty,
      category,
      categories: categories.length > 0 ? categories : [category],
      image: localImagePath,
      imageAlt: `Practitioner demonstrating ${englishName} (${sanskritName})`,
      shortFact,
      benefits,
      steps,
      teacherCues,
      modifications,
      sourceUrl: item.url,
    };
  } catch (e) {
    console.error(`Error processing pose ${item.url}:`, e.message);
    return null;
  }
}

// Concurrency queue runner
async function runAll() {
  const posesDir = path.join(__dirname, 'public', 'poses');
  if (!fs.existsSync(posesDir)) {
    fs.mkdirSync(posesDir, { recursive: true });
  }

  const results = [];
  const CONCURRENCY = 6;
  console.log(`Processing ${manifest.length} poses with concurrency ${CONCURRENCY}...`);

  for (let i = 0; i < manifest.length; i += CONCURRENCY) {
    const chunk = manifest.slice(i, i + CONCURRENCY);
    const chunkResults = await Promise.all(chunk.map(processPose));
    for (const r of chunkResults) {
      if (r) results.push(r);
    }
    console.log(`Processed ${results.length}/${manifest.length} poses...`);
  }

  // Deduplicate by ID
  const uniqueMap = new Map();
  for (const p of results) {
    if (!uniqueMap.has(p.id)) {
      uniqueMap.set(p.id, p);
    } else {
      // Merge categories
      const existing = uniqueMap.get(p.id);
      for (const cat of p.categories) {
        if (!existing.categories.includes(cat)) {
          existing.categories.push(cat);
        }
      }
    }
  }

  const finalPoses = Array.from(uniqueMap.values());
  console.log(`Done! ${finalPoses.length} unique poses gathered.`);

  // Write poses.json
  fs.writeFileSync('poses_full.json', JSON.stringify(finalPoses, null, 2));

  // Write src/data/poses.ts
  const tsContent = `import { Pose } from "@/types/pose";

export const ALL_POSES: Pose[] = ${JSON.stringify(finalPoses, null, 2)};

// 10 foundational starter poses for fast introductory rounds
export const STARTER_POSES: Pose[] = [
  ALL_POSES.find(p => p.id === "mountain-pose" || p.id === "mountain") || ALL_POSES[0],
  ALL_POSES.find(p => p.id === "child-pose" || p.id === "childs-pose") || ALL_POSES[1],
  ALL_POSES.find(p => p.id === "tree-pose" || p.id === "tree") || ALL_POSES[2],
  ALL_POSES.find(p => p.id === "chair-pose" || p.id === "chair") || ALL_POSES[3],
  ALL_POSES.find(p => p.id === "warrior-i" || p.id === "warrior-1") || ALL_POSES[4],
  ALL_POSES.find(p => p.id === "warrior-ii" || p.id === "warrior-2") || ALL_POSES[5],
  ALL_POSES.find(p => p.id === "warrior-iii" || p.id === "warrior-3") || ALL_POSES[6],
  ALL_POSES.find(p => p.id === "triangle-pose" || p.id === "triangle") || ALL_POSES[7],
  ALL_POSES.find(p => p.id === "corpse-pose" || p.id === "corpse") || ALL_POSES[8],
  ALL_POSES.find(p => p.id === "half-lord-of-the-fishes-pose" || p.id === "half-lord-of-the-fishes") || ALL_POSES[9],
].filter(Boolean) as Pose[];
`;

  fs.writeFileSync('src/data/poses.ts', tsContent);
  console.log('Successfully written src/data/poses.ts!');
}

runAll();
