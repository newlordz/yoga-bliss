import { Pose, SkillTier } from "@/types/pose";

/**
 * 10 foundational starter poses for fast introductory rounds and testing
 * All images and descriptions sourced directly from YogaClassPlan (https://www.yogaclassplan.com/yoga-poses/)
 */
export const STARTER_POSES: Pose[] = [
  {
    "id": "mountain",
    "englishName": "Mountain",
    "sanskritName": "Tadasana",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/mountain-pose.jpg",
    "imageAlt": "Practitioner demonstrating Mountain (Tadasana)",
    "shortFact": "Develops physical & mental balance Strengthens and tones legs and abdominals Strengthens ankle joints Improves posture.",
    "benefits": "Develops physical & mental balance Strengthens and tones legs and abdominals Strengthens ankle joints Improves posture",
    "steps": "Mountain pose is the summit for all-other standing and inverted Yoga Asanas. The principles of Mountain pose lay the foundation for developing yoga skills of alignment, focus and balance. Mountain pose may look simple as if you are just standing there, but this is an active pose which strengthens the legs, back and core, improving posture and mental clarity. Mountain pose is typically positioned at the beginning of the practice or sequence to bring calm to the mind and awareness to the whole body. To start, stand with the feet hip-width apart, the arms by the sides. Fix the eyes at a point on the wall slightly above the head. Distribute the weight evenly between the feet. Draw down into the heels and lift up through the arches of the feet to straighten the legs. Press the outer edges of the shins towards each other, while rotating the inner thighs towards each other. Tuck the tailbone down and lift up through the core. Draw the shoulders blades down towards the back waist, but lengthen the spine and torso. Broaden the collar bone, lengthen the neck. In the final position the ears, shoulders, hips and ankles should be aligned. To exit the pose, transition into the next posture.",
    "teacherCues": "",
    "modifications": "Practice seated in chair Practice Standing against a wall Practice with hands on wall",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/mountain-pose/"
  },
  {
    "id": "childs-pose",
    "englishName": "Child's Pose",
    "sanskritName": "Balasana",
    "difficulty": "beginner",
    "category": "forward-bends",
    "categories": [
      "forward-bends"
    ],
    "image": "/poses/childs-pose-balasana.png",
    "imageAlt": "Practitioner demonstrating Child's Pose (Balasana)",
    "shortFact": "Stretches the ankles, thighs, hips, and back.",
    "benefits": "Stretches the ankles, thighs, hips, and back. Relieves tension and stress, by calming the nervous system. Relaxation. Massages the organs. Improves digestion.",
    "steps": "Begin kneeling on the floor with the tops of the feet flat and the legs together. Release the upper body over the thighs, resting the forehead onto the floor. Place the arms alongside the body with the palms turned up. Allow the shoulders to roll forward releasing the mid back. To come out, place the hands underneath the shoulders and draw the belly back to lift the spine. Child’s pose is a place of rest and can be used during transitions. If a student feels fatigued this is a good posture to pause in. It can be held anywhere from 30 seconds and up to 10+ minutes in a restorative yoga class.",
    "teacherCues": "",
    "modifications": "Neck Strain: Use a cushion to support the head Difficulty sitting on heels: Place a bolster or rolled blanket behind the knees",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/childs-pose-balasana/"
  },
  {
    "id": "cat",
    "englishName": "Cat",
    "sanskritName": "Marjaryasana",
    "difficulty": "beginner",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/cat-pose-marjaryasana.png",
    "imageAlt": "Practitioner demonstrating Cat (Marjaryasana)",
    "shortFact": "Stretches the spine.",
    "benefits": "Stretches the spine. Massages the internal organs.",
    "steps": "On hands and knees, make sure the knees are directly underneath the hips, and the hands are directly underneath the shoulders. Spread the fingers wide and engage the hands by pressing the fingertips, knuckles (in particular the index finger), and heel of the hand, into the floor. The head is in line with the spine and the gaze is down at the ground in front of the hands. With an exhalation begin to round the spine, bringing the mid-back up towards the ceiling and allowing the head to relax down. Draw the navel in and expand into the lower back. Inhale to return to a neutral spine. Often paired with Bitilasana- Cow Pose.",
    "teacherCues": "",
    "modifications": "Can be performed on the forearms.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/cat-pose-marjaryasana/"
  },
  {
    "id": "cow",
    "englishName": "Cow Face",
    "sanskritName": "Gomukhasana",
    "difficulty": "beginner",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/cow-face.jpg",
    "imageAlt": "Practitioner demonstrating Cow Face (Gomukhasana)",
    "shortFact": "Opens the hips- especially beneficial for tight IT band and gluteals.",
    "benefits": "Opens the hips- especially beneficial for tight IT band and gluteals. Opens the shoulders- especially targeting tight rotator cuff muscles. Opens chest and thighs Stretches the triceps",
    "steps": "Begin sitting in a cross-legged position or Easy Sitting Pose (Sukhasana). Bring the front leg on top of the bottom leg crossing the knees one on top of the other (note that the knees may not line up completely if the hips are tight). Ensure that both sitting bones are touching the ground (use a prop is necessary). The feet should be approximately the same distance from the hips on either side of the body. If the right knee is on top, stretch the left arm straight up toward the ceiling with the palm facing back, bend at the elbow to reach down between the shoulder blades. Reach the right arm out to the side of the body and again turn the palm to the back with the thumb facing down. Bend at the elbow and rotate from the shoulder to reach up between the shoulder blades. Clasp the fingers together if it’s available (or use a strap between the hands). Reach the top elbow towards the ceiling and then bottom elbow towards the floor to deepen the stretch. Lengthen up through the spine. Stay in the pose for 1-2 minutes and then repeat with the other leg on top and the opposite arm position.",
    "teacherCues": "",
    "modifications": "Sit on a block, cushion or bolster if the sitting bones don’t make it to the floor Prop under the ankles or knees to decrease any discomfort at these joints Use a strap between the hands if the fingers do not touch *this is very common and it’s a good idea to offer the strap before entering the pose",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/cow-face/"
  },
  {
    "id": "cobra",
    "englishName": "Cobra",
    "sanskritName": "Bhujangasana",
    "difficulty": "beginner",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/cobra-pose-bhujangasana.png",
    "imageAlt": "Practitioner demonstrating Cobra (Bhujangasana)",
    "shortFact": "Stretches the ankles, thighs, hips, and back.",
    "benefits": "Stretches the ankles, thighs, hips, and back. Relieves tension and stress, by calming the nervous system. Relaxation. Massages the organs. Improves digestion.",
    "steps": "Begin lying face-down with the legs extended hip-distance apart and the hands spread wide underneath the shoulders. Draw the elbows in close to the ribcage. On an inhalation, firmly press the pubic bone, tops of the feet, and thighs into the floor, lift the shoulders up and back as you press into the palms to lift the chest off of the floor. Maintain a connection in the front of the body between the lower ribcage and the top of the hips, engaging from the pubic bone to the belly button. Allow the tailbone to slightly drop down, as you try not to over engage the buttocks muscles. Lift from the sternum to the top of the head, maintaining an equal openness through out the spine. Stay for a few breaths. On an exhalation, reach through the crown as you lower the chest back to the floor. Keep the elbows hugging close to the body to engage the tricep muscles and avoid the shoulders rounding forward.",
    "teacherCues": "",
    "modifications": "Lift the hands, only come up to a place where you can support your spine without pushing. Cobra Push Up: Extend the arms in front of the body, slightly wider than the shoulders. As you inhale, slide the palms along the floor to lift the chest. On the exhalation, allow the palms to slide forward releasing back onto the ches",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/cobra-pose-bhujangasana/"
  },
  {
    "id": "downward-facing-dog",
    "englishName": "Downward-Facing Dog",
    "sanskritName": "Adho Mukha Svanasana",
    "difficulty": "beginner",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/downward-facing-dog.png",
    "imageAlt": "Practitioner demonstrating Downward-Facing Dog (Adho Mukha Svanasana)",
    "shortFact": "Stretches hamstrings, calves, shoulders, and chest.",
    "benefits": "Stretches hamstrings, calves, shoulders, and chest. Strengthens upper back, core, arms, legs, hands and feet. Stimulates the body and helps calm the mind. Good for digestion Strengthens bones",
    "steps": "Start on hands and knees, lining the knees up underneath the hips and the hands just slightly forward from the shoulders. The index fingers should face towards the front of the mat. Tuck the toes under and lift the pelvis up and back to make an upside down V with the body. The heels may or may not touch the floor. Turn the pelvis s the sitz bones lift up towards the ceiling and the lower spine becomes neutral. Draw the shoulders away from the ears and keep the head in alignment with the spine. Spiral the arms onto the body by turning the eye of the elbow or inner part of the elbow forward. (See the Technical comments for more details into the pose) This posture can be held for a minute or two and is used throughout Sun Salutations (Surya Namaskar).",
    "teacherCues": "",
    "modifications": "For wrist problems and tightness in the shoulders try rolling the front edge of the mat or use a blanket to elevate the wrists and decrease the angle into the hands. Perform Dolphin Pose, coming onto forearms",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/downward-facing-dog/"
  },
  {
    "id": "tree",
    "englishName": "Tree",
    "sanskritName": "Vrksasana",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/tree-yoga-pose-vrksasana.jpg",
    "imageAlt": "Practitioner demonstrating Tree (Vrksasana)",
    "shortFact": "Improves concentration.",
    "benefits": "Improves concentration. Improves balance. Strengthens thighs, calves, ankles, and spine",
    "steps": "Start by standing in Mountain Pose. Then, shift all of the body-weight onto the left foot and bend the right knee. With a bent knee begin to open the right hip to the right side of the body. Keeping the knee bent and hip open to the right, reach down with the right hand and clasp the right ankle. Bring the right foot up with the right hand and, if possible, place the right foot along the left inner thigh. Toes are pointing down toward the floor. Firmly press the sole of the right foot against the left inner thigh and, at the same time, press the left inner thigh into the sole of the right foot. While you are in Tree Pose, your tailbone drops toward the floor and your pubic bone lifts. Remember to keep your ears, shoulders, hips, left knee and ankle aligned. In order to maintain balance in tree, remember to breathe steadily and try gazing softly at a spot in the floor about 8 feet ahead of you that is not moving. Arms can be inhaled straight up, placing the biceps next to your ears, hands can be on the hips, or hands can press together for Prayer Pose in front of the chest. Try staying in Tree Pose for five complete breath cycles or for as long as your wish. To come out of Tree Pose, remove the foot from the thigh and slowly exhale the leg down until you are back in Mountain Pose. Perform steps one through four on the opposite side.",
    "teacherCues": "",
    "modifications": "If you are not comfortable balancing on your own, try this pose up against a wall for extra support or hold on to the back of a folding chair. If bringing the foot all the way to the upper thigh is not possible, try these modifications: Rest the foot of the bent leg next to the foot or ankle of the standing leg. Place the foot right next to the calf. In this modification, you do not apply pressure from the foot to the calf. You are simply “holding” the foot next to the calf.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/tree-yoga-pose-vrksasana/"
  },
  {
    "id": "chair",
    "englishName": "Chair",
    "sanskritName": "Utkatasana",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/chair-fierce-pose-utkatasana.jpg",
    "imageAlt": "Practitioner demonstrating Chair (Utkatasana)",
    "shortFact": "Strengthens gluteal, thigh, abdominal and back muscles.",
    "benefits": "Strengthens gluteal, thigh, abdominal and back muscles. Strengthens the ankles and feet, while stretching the calve muscles. Warms the body, stimulates the heart.",
    "steps": "In Tadasana or Mountain pose, firmly root into the ground, finding equal weight on all corners of the feet. Inhale to bring the arms up overhead, moving the upper arm-bones up and back. Turn the palms to face each other, or place the palms in prayer. Exhale to bend the knees as though sitting in a chair. Track the knees over the toes and in line with the hips. Maintain a neutral spine by dropping the tailbone down and drawing the pubic bone towards the navel. Avoid both over arching or tucking the lumbar spine. The torso will be perpendicular to the thighs. Stay for 5 deep breaths. To come back to standing, inhale to straighten the legs and exhale to release the arms to the side of the body.",
    "teacherCues": "",
    "modifications": "Don’t bend the knees as deeply… keep the arms in front of the chest… perform at the wall, so the tail is just touching and is gently supported.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/chair-fierce-pose-utkatasana/"
  },
  {
    "id": "warrior-i",
    "englishName": "Warrior I",
    "sanskritName": "Virabhadrasana I",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/warrior-1-virabhadrasana.jpg",
    "imageAlt": "Practitioner demonstrating Warrior I (Virabhadrasana I)",
    "shortFact": "Improves posture, alignment, and balance.",
    "benefits": "Improves posture, alignment, and balance. Strengthens legs, ankles, and groin area. Boosts confidence. Improves joint health. Promotes flexibility of hips.",
    "steps": "Prepare for Warrior I by standing in Mountain Pose. From Mountain Pose, step the left foot back any amount and rotate the foot to a 50 to 70 degree angle. The toes of the right foot point to the front of the room. Align the heel of the right foot and the arch of the back foot. Bend the front knee to a 90 degree angle directly over the front ankle. Both hip bones should be squared to the front of the mat. From here, inhale the arms up, placing the biceps next to the ears, palms facing one another(Palms can touch at the top, if desired).Shoulders stay down and away from the ears as the fingers extend up to the sky. Stay here for several breaths and then repeat these steps on the other side.",
    "teacherCues": "",
    "modifications": "If aligning the front heel to the back arch is hard on the knees, align the heels instead. If knee injuries, low back pain, or balance issues are present, widen and/or shorten the distance between the feet until the pose is more comfortable. Use the back of a folding chair or a wall for extra support.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/warrior-1-virabhadrasana/"
  },
  {
    "id": "warrior-ii",
    "englishName": "Warrior II",
    "sanskritName": "Virabhadrasana II",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/warrior-2-virabhadrasana-2.jpg",
    "imageAlt": "Practitioner demonstrating Warrior II (Virabhadrasana II)",
    "shortFact": "Promotes calmness of spirit.",
    "benefits": "Promotes calmness of spirit. Improves alignment of the legs, hips, and shoulders. Strengthens legs, ankles, and groin area.",
    "steps": "From Mountain Pose, step the left foot back about 4 to 6 feet. (Note: The length you step back depends on your height.) Turn the left foot to a 30 to 50 degree angle. Align the heel of the front foot with the arch of the back foot. Bend the front knee to a 90 degree angle so that the front thigh is parallel to the ground. Planting the feet firmly in the ground, begin to open the torso, shoulders, and both hip bones toward the left side . Next, with palms facing down, lift the arms to shoulder height. Arms should be parallel to the front leg. Let the coccyx travel down as the pubic bone lifts. Lift up through the rib cage. Softly and slowly, take your gaze to the middle finger of the right hand. To come out of Warrior II, exhale the arms down, turn the hip bones back to the front of the mat and step the back leg up to meet the front leg. End in Mountain Pose. Repeat these steps on the other leg.",
    "teacherCues": "",
    "modifications": "If knee injuries, balance issues, or hip pain are present, place the seat of a folding chair underneath the front thigh. You may wish to put a folded blanket on the chair seat for extra comfort and support. If balance is an issue, you may want to shorten the length between the feet until the pose is more comfortable. If aligning the front heel to the back arch causes any pain in the knees, align the heels instead.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/warrior-2-virabhadrasana-2/"
  }
];

/**
 * Full catalogue of 141 yoga poses across 7 canonical categories:
 * - STANDING
 * - SEATED/TWISTS
 * - RECLINING
 * - INVERSIONS
 * - FORWARD BENDS
 * - BACK BENDS
 * - ARM BALANCES
 * Sourced directly from YogaClassPlan (https://www.yogaclassplan.com/yoga-poses/)
 */
export const ALL_POSES: Pose[] = [
  {
    "id": "extended-hand-to-big-toe-pose-variation",
    "englishName": "Extended Hand-to-Big-Toe Pose Variation",
    "sanskritName": "Utthita Hasta Padangustasana",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/extended-hand-to-big-toe-pose-variation.png",
    "imageAlt": "Practitioner demonstrating Extended Hand-to-Big-Toe Pose Variation (Utthita Hasta Padangustasana)",
    "shortFact": "Strengthens feet, legs, arms and abdomen muscles Improves sense of balance.",
    "benefits": "Strengthens feet, legs, arms and abdomen muscles Improves sense of balance. Opens hips Helps relieve tight hamstrings Sharper focus and better concentration",
    "steps": "The Extended Hand-to-Big-Toe Pose variation is similar to the classic Extended Hand-to-Big-Toe pose A . Known as the Utthita Hasta Padangustasana B in the Ashtanga primary series, this pose classifies under intermediate standing postures. Beginners attempting this pose would find it slightly difficult to grip their fingers around their toes, without hunching the back or losing balance. The Extended Hand-to-Big-Toe pose consists of three variations in the Ashtanga Vinyasa series. All three poses are practised one after the other. It starts with the classic extended hand-to-Toe pose, with the leg extended forward, known as Utthita Hasta Padangustasana A, and is followed by the variations B and C . The pose we will be delving deep into is pose B of this standing pose variation. To practice this pose, stand tall and strong in Tadasana , with feet steady and balanced. Fix the gaze with a point ahead, one that corresponds with the eye level. This will help keep the balance, while in the pose. Slowly shift the weight of the body to the left leg and bring the right leg close to the belly. The left hand is on the left hip. Interlock the two fingers of the right hand between the big toe of the right foot. Inhale and extend the leg horizontal to the ground, while stretching right arm. Then, bring the extended right leg to the right side, opening the right hip. Once steady and balanced in the pose, shift gaze and head to the left side, over the left shoulder. To release the pose. Bring head and gaze back to centre. Bring leg back to centre, release the interlocked fingers from the right toe and place the right foot down back to stand in Tadasana . Repeat on left side.",
    "teacherCues": "",
    "modifications": "Use a strap around the foot to lift forward and extend. Tight hamstrings can hinder one from practising this pose Stand against a wall for balance and additional support.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/extended-hand-to-big-toe-pose-variation/"
  },
  {
    "id": "standing-forward-bend-2",
    "englishName": "Standing Forward Bend",
    "sanskritName": "Uttanasana",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/standing-forward-bend-2.jpg",
    "imageAlt": "Practitioner demonstrating Standing Forward Bend (Uttanasana)",
    "shortFact": "Stimulates internal organs such as kidney, liver and intestine Massages the internal organs Relives mild depression Calms the nervous system Reduces stress Improves blood circulation throughout the body.",
    "benefits": "Stimulates internal organs such as kidney, liver and intestine Massages the internal organs Relives mild depression Calms the nervous system Reduces stress Improves blood circulation throughout the body",
    "steps": "The Standing forward bend pose is a favourite pose that features in some of the most traditional Yoga sequences. This is not only an important pose in any style of sun salutation but also finds relevance in the Mysore style Ashtanga Vinyasa and the Sivananda Yoga series. This simple standing forward bend is a powerful pose as it a mild inversion where the head is below the heart, which allows for good blood circulation throughout the body. Although the pose looks easy with the torso folded over the pelvis, this pose is one of the best ‘work in progress’ poses for any practitioner. This means, that as we further into our Yoga practice we go deeper into the forward fold. Most importantly, this pose allows is for you to explore your breath more deeply and connect with the expanding of your lungs during inhalation with the contraction of the exhalation. To practice the standing forward bend pose stand with both feet hip-width apart. It is important here to ensure that the feet are firmly grounded into the mat. Bring your awareness to the toes and feel them anchoring into the ground. Place your hands on your waist and take a deep inhale as you elongate your torso, extend forward and fold from the hip over your pelvis. Allow your spine to naturally curve as and release your hands from the waist to hold your ankle or calf muscle. Exhale as you further extend forward to bring your head closer to your legs while stretching the back and hamstrings. Hold this posture for a few deep long breaths. To release this pose, unlock your hands from your ankle or calves. Bring your hands back to your waist, inhale to press into your feet and lengthen the torso to come out of the forward bend. Exhale as you stand up.",
    "teacherCues": "",
    "modifications": "Bend knees to fold a little deeper into the forward bend Use the wall as support for balance Use Yoga blocks as support for the hands instead of holding ankles or calves.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/standing-forward-bend-2/"
  },
  {
    "id": "bending-tree-pose",
    "englishName": "Bending Tree Pose",
    "sanskritName": "Vrksasana",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/bending-tree-pose.jpg",
    "imageAlt": "Practitioner demonstrating Bending Tree Pose (Vrksasana)",
    "shortFact": "Helps in reliving Sciatica Strengthens the ankles, thighs and calf muscle.",
    "benefits": "Helps in reliving Sciatica Strengthens the ankles, thighs and calf muscle. Strengthens the spine Helps improve balance and coordination Helps those with flat feet Increases alertness and concentration",
    "steps": "The Bending Tree Pose is a variation of the classic Tree Pose or Vrksasana. The classic pose is a standing posture which is an easy pose for beginner Yoga students. The bending tree pose can be attempted by beginner students, with the support of the wall. However, this pose is ideal for the intermediate or advanced practitioners, as they can experience the full range of motion while in this pose. Much like the tree pose, this bending variation helps achieve balance, strength and steadiness. To practice the bending tree pose, begin in Mountain Pose . Ensure both the feet are planted firmly on the ground. Lift the left leg off the ground slightly to balance yourself only on the right foot. Focus specifically on anchoring the big toe, little toe and the ball of the right foot firmly into the mat. Slowly lift the left foot with your right hand and place the foot on the inside of the right thigh. Be careful not to place the foot lower or directly on the knee. Staying balanced on the right foot and with the left foot firmly placed on the inner right thigh, raise the right arm over and above the head to stretch and lengthen the right side of the torso. Rest the left arm on the left thigh. A good guide here to maintain your balance is to find a yogic point of gaze or ‘ dristi ’ in front of you. This will help keep the focus and balance. Once anchored in this position, stretch laterally to the left side, to further lengthen and stretch the right side. Stay in the pose while breathing deeply for 3 – 5 breaths. To come out of the pose, bring the extended right arm back down and release the left foot back to the ground to return to Mountain Pose. Repeat the same steps on the other side by balancing on the left foot.",
    "teacherCues": "",
    "modifications": "Use a strap wrapped around the foot to ensure the foot does not slip Using the wall as support to balance",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/bending-tree-pose/"
  },
  {
    "id": "sugarcane-pose",
    "englishName": "Sugarcane Pose",
    "sanskritName": "Ardha Chandra Chapasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/sugarcane-pose.png",
    "imageAlt": "Practitioner demonstrating Sugarcane Pose (Ardha Chandra Chapasana)",
    "shortFact": "Improves core strength and balance Strengthens ankles, calves and thighs Stretches the hip flexors, groin, quads Opens chest and shoulders Increases focus and concentration.",
    "benefits": "Improves core strength and balance Strengthens ankles, calves and thighs Stretches the hip flexors, groin, quads Opens chest and shoulders Increases focus and concentration",
    "steps": "Sugarcane Pose is a powerful heart –and hip opener that combines a variation of half-moon pose with a backbend. This pose is an intermediate vinyasa posture building core stability and precision of movement. It’s a great pose for playing your edge – that is practicing outside your comfort zone – as you will let go of old habits re-adjusting your sense of balance and perspective. Begin in mountain pose with the feet parallel and hip distance apart. Fold forward from the hips, placing the tips of your right hand 6-8 inches in front of your right foot. Bring the left hand to left hip, turning the chest outward, so the right shoulder over the right wrist. Root down with the four corners of the right foot and raise the left leg parallel to the floor. Open the hips stacking left hip over right. Extend the left arm and gaze upward, stretching out from head crown to left toe. Slowly bend the left leg coming into half-moon pose. Reach back with the left hand and grab the left foot. Pull the left foot towards the hip. At the same time draw the shoulder blades back and down. Continue to revolve the chest upward and breathe deeply into the chest cavity for a count of five. To exit the pose, bring eye gaze to the floor. Release the foot and bring both hands to the floor. Lower the left leg and foot to the ground, returning to a forward bend, the lift up to Mountain Pose. Repeat the other side.",
    "teacherCues": "",
    "modifications": "Place standing hand on block, chair or wall Practice next to wall for support Hold foot with strap",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/sugarcane-pose/"
  },
  {
    "id": "half-bound-lotus-tiptoe-pose",
    "englishName": "Half Bound Lotus Tiptoe pose",
    "sanskritName": "Ardha Baddha Padma Prapadasana",
    "difficulty": "advanced",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/half-bound-lotus-tiptoe-pose.jpg",
    "imageAlt": "Practitioner demonstrating Half Bound Lotus Tiptoe pose (Ardha Baddha Padma Prapadasana)",
    "shortFact": "Strengthens core muscles Develops stronger joints – hips, knees, ankles Improves balance and focus Opens hips Increases focus, concentration and balance.",
    "benefits": "Strengthens core muscles Develops stronger joints – hips, knees, ankles Improves balance and focus Opens hips Increases focus, concentration and balance",
    "steps": "Half Bound Lotus Tiptoe pose is an advanced standing balance. This pose is the twelfth pose in the Bikram or hot yoga sequence. What is essential for this pose is that one requires strength in the toes and ankles as well as flexibility in the hips and knees. To practice the Half Bound Lotus Tiptoe pose, begin in Mountain pose with the feet parallel and hip-width apart. Shift the weight to the right foot. Bend the left knee and lift the foot up onto the right hip crease to half lotus tree pose. Soften the right knee and fold forward from the hips, bring all ten fingertips to the ground. Bend the right standing leg and come onto the ball of the right foot. Lower the hips down into a deep squat balancing the base of the tailbone onto the right heel. You’re your balancing point. Take one hand at a time into prayer. Take 3-5 yoga breaths. To exit the pose, bring the fingertips back to the ground. Lift the hips and straighten the right leg returning to half lotus standing forward bend. Rise up to Mountain pose and release the bound leg. Repeat on the other side.",
    "teacherCues": "",
    "modifications": "Begin in chair pose, cross one leg ankle to knee, lower to squat, then bring hands into prayer Practice tiptoe or chair with half lotus pose against the wall for support or holding onto blocks or chair Practice tiptoe or chair with half lotus pose with block under tailbone Place block or blanket under heel of standing foot",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/half-bound-lotus-tiptoe-pose/"
  },
  {
    "id": "half-standing-forward-bend",
    "englishName": "Half standing forward bend",
    "sanskritName": "Ardha Uttanasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/half-standing-forward-bend.jpg",
    "imageAlt": "Practitioner demonstrating Half standing forward bend (Ardha Uttanasana)",
    "shortFact": "Strengthens back muscles Stimulates spinal nerves Tones abdominal muscles Strengthens thigh, calf and ankles Improves respiratory function Stretches hamstrings and quadriceps.",
    "benefits": "Strengthens back muscles Stimulates spinal nerves Tones abdominal muscles Strengthens thigh, calf and ankles Improves respiratory function Stretches hamstrings and quadriceps",
    "steps": "Half standing forward bend combines a standing pose with a forward bend. This is a foundation pose that prepares the body for deeper yoga postures. As a fundamental element of the Sun Salutation Series, this pose is favoured by Iyengar Yoga teachers for its back strengthening, posture improving properties. The Sanskrit name for Half standing forward bend, however, means, half intense stretch to the back, strengthening the From standing forward bend press palms or finger tips into the floor. At the same time, lift the sternum up and away from the floor. Inhale to stretch the head crown away from the body. The back will arch slightly, but the torso and head should be in one line with the gaze forward. Exhale and release into the full forward bend. To exit the pose, roll or lift back to mountain pose.",
    "teacherCues": "",
    "modifications": "Place hands on thighs or shins Place buttocks against the wall Place hands on wall, back of chair or blocks For pregnancy: Widen hips far apart",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/half-standing-forward-bend/"
  },
  {
    "id": "goddess-pose",
    "englishName": "Goddess pose",
    "sanskritName": "Utkata Konasnana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/goddess-pose.jpg",
    "imageAlt": "Practitioner demonstrating Goddess pose (Utkata Konasnana)",
    "shortFact": "Stretches hips, groin and chest Tones and strengthens core muscles Strengthens quads and inner thighs Tones upper back Creates more room in the pelvis are in preparation for childbirth Improves digestion, elimination and circulation.",
    "benefits": "Stretches hips, groin and chest Tones and strengthens core muscles Strengthens quads and inner thighs Tones upper back Creates more room in the pelvis are in preparation for childbirth Improves digestion, elimination and circulation",
    "steps": "Goddess pose is a wide standing squat that opens the hips and chest while toning the entire body. This pose is a favourite of pregnancy yoga teachers, as this pose stretches the inner thighs, groins and hips. It is also known as fiery angle pose for it powerful energising benefits. Begin from Mountain pose. Step the feet apart to twice the width of the hips pointing the toes out 45°. Bend deeply at the hips bringing the knees out over the toes. Rotate the hips, and inner thighs outward, sinking deeper into the squat. Place the hands on the knees and lift the waist out of the hips, lengthening the spine. Press the hands wide on the knee and draw the tailbone down. Pull the glutes towards each other and exhale to squat deeper. To finish the pose, bring hands into prayer. To exit the pose, release the hands, straighten the legs and step or jump feet together, returning to Mountain pose.",
    "teacherCues": "",
    "modifications": "Use cactus arms Practice sitting astride a chair Practice leaning against a wall",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/goddess-pose/"
  },
  {
    "id": "mountain-pose",
    "englishName": "Mountain Pose",
    "sanskritName": "Tadasana",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/mountain-pose.jpg",
    "imageAlt": "Practitioner demonstrating Mountain Pose (Tadasana)",
    "shortFact": "Develops physical & mental balance Strengthens and tones legs and abdominals Strengthens ankle joints Improves posture.",
    "benefits": "Develops physical & mental balance Strengthens and tones legs and abdominals Strengthens ankle joints Improves posture",
    "steps": "Mountain pose is the summit for all-other standing and inverted Yoga Asanas. The principles of Mountain pose lay the foundation for developing yoga skills of alignment, focus and balance. Mountain pose may look simple as if you are just standing there, but this is an active pose which strengthens the legs, back and core, improving posture and mental clarity. Mountain pose is typically positioned at the beginning of the practice or sequence to bring calm to the mind and awareness to the whole body. To start, stand with the feet hip-width apart, the arms by the sides. Fix the eyes at a point on the wall slightly above the head. Distribute the weight evenly between the feet. Draw down into the heels and lift up through the arches of the feet to straighten the legs. Press the outer edges of the shins towards each other, while rotating the inner thighs towards each other. Tuck the tailbone down and lift up through the core. Draw the shoulders blades down towards the back waist, but lengthen the spine and torso. Broaden the collar bone, lengthen the neck. In the final position the ears, shoulders, hips and ankles should be aligned. To exit the pose, transition into the next posture.",
    "teacherCues": "",
    "modifications": "Practice seated in chair Practice Standing against a wall Practice with hands on wall",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/mountain-pose/"
  },
  {
    "id": "goddess-pose-twisting-variation",
    "englishName": "Goddess pose (twisting variation)",
    "sanskritName": "Parivrtta Utkata Konasnana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/goddess-pose-twisting-variation.jpg",
    "imageAlt": "Practitioner demonstrating Goddess pose (twisting variation) (Parivrtta Utkata Konasnana)",
    "shortFact": "Stretches hips, groin and chest Tones and strengthens core muscles Strengthens quads and inner thighs Tones upper back Massages internal organs Improves digestion, elimination and circulation.",
    "benefits": "Stretches hips, groin and chest Tones and strengthens core muscles Strengthens quads and inner thighs Tones upper back Massages internal organs Improves digestion, elimination and circulation",
    "steps": "Goddess pose is a wide squat pose and this variation combines a wide standing squat with a twist. Goddess pose, twisting variation is famous for its cleansing effects, gently massaging the inner organs and stretching the abdominal rectus. Goddess pose, twisting variation is suitable for pregnancy and power yoga, opening the hips and strengthening the leg and muscles. Begin from Mountain pose. Step the feet apart to twice the width of the hips pointing the toes out 45°. Bend deeply at the hips bringing the knees out over the toes. Rotate the hips, and inner thighs outward, sinking deeper into the squat. Place the hands on the knees and lift the waist out of the hips, lengthening the spine. Press the hands wide on the knee and draw the tailbone down. Pull the glutes towards each other and exhale to twist the torso to the right. Bringing the right shoulder back, the left forward, eye gaze over the shoulder. To exit the pose, bring the eye gaze back to centre, square the shoulders and twist to the left. Repeat 3X each side.",
    "teacherCues": "",
    "modifications": "Place hands in prayer",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/goddess-pose-twisting-variation/"
  },
  {
    "id": "half-lotus-toe-balance",
    "englishName": "Half Lotus Toe Balance",
    "sanskritName": "Padangustha Padma Utkatasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/half-lotus-toe-balance.jpg",
    "imageAlt": "Practitioner demonstrating Half Lotus Toe Balance (Padangustha Padma Utkatasana)",
    "shortFact": "Strengthens core, back and leg muscles Strengthens toes and ankles Tones hips and belly Improves flexibility of hips Opens chest and heart Improves balance and concentration.",
    "benefits": "Strengthens core, back and leg muscles Strengthens toes and ankles Tones hips and belly Improves flexibility of hips Opens chest and heart Improves balance and concentration",
    "steps": "Half Lotus toe Balance is challenging standing pose. Half Lotus Toe Balance also known as Half Lotus Tree pose is popular with Hatha Yoga Teachers as it works to strengthens both mind and body. Half Lotus toe Balance improves concentration while toning the core, back, hips, legs and ankles. Begin in Tall Mountain pose. Transfer the weight to right foot, bend the left leg and lift the left heel on top of the right thigh, turning the sole skyward. Lengthen the tailbone towards the floor, pointing the left knee down the release the hip. Inhale and raise the arms over the head. Exhale to bring the hands to prayer in front of the heart. Keep the spine vertical with the tail tucked under, lift onto the ball of right foot and lower down into a squat. Eye gaze is down the nose towards the fingertips. Hold for 5 or more breaths. To exit the pose, inhale and rise slowly to standing. Release the lotus leg and return to Tall Mountain. Repeat on the other side.",
    "teacherCues": "",
    "modifications": "Remain in standing lotus Practice against a wall for support Bring hands to floor or blocks",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/half-lotus-toe-balance/"
  },
  {
    "id": "revolved-lunge-pose",
    "englishName": "Revolved Lunge Pose",
    "sanskritName": "Parivrtta Anjaneyasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/revolved-lunge-pose.jpg",
    "imageAlt": "Practitioner demonstrating Revolved Lunge Pose (Parivrtta Anjaneyasana)",
    "shortFact": "Strengthens arms, back, legs and glutes Increases flexibility of spine and back Opens chest and improves respiration Massages internal organs and stimulates digestion Detoxifies and improves energy levels.",
    "benefits": "Strengthens arms, back, legs and glutes Increases flexibility of spine and back Opens chest and improves respiration Massages internal organs and stimulates digestion Detoxifies and improves energy levels",
    "steps": "Revolved Lunge Pose is a twisted variation of crescent lunge. Revolved Lunge Pose opens the heart and detoxifies the whole body, by stimulating the spinal nerves and massaging internal organs. This is a pose available to all levels and styles including pregnancy yoga. Begin in Tadasana (tall mountain) pose.The feet should be touching, with the hands by your sides. Step the right foot back as far as is comfortable, with heel off the floor, toes grabbing the floor. At the same time, bend the left knee. Press the foot sole into the mat. On the next inhale, raise the arms level to the floor. Place the palms into namaskara (prayer). Stretch the sternum forward, then turn and bring the right elbow to the outside of the left knee. Turn the eye gaze upward. To exit the pose, release the arms, bring the hands to the ground and step the right foot forward. Return to Tadasana. Repeat the other side.",
    "teacherCues": "",
    "modifications": "Place back knee on floor Keep eye gaze ahead Place one elbow over knee/the other on hip",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/revolved-lunge-pose/"
  },
  {
    "id": "high-lunge",
    "englishName": "High Lunge",
    "sanskritName": "Alanasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/high-lunge.jpg",
    "imageAlt": "Practitioner demonstrating High Lunge (Alanasana)",
    "shortFact": "Strengthens and stretches ankles, legs, back, shoulders and arms Strengthens core muscles and abdominals Stimulates circulation Stretches groin muscles Stretches hip flexors.",
    "benefits": "Strengthens and stretches ankles, legs, back, shoulders and arms Strengthens core muscles and abdominals Stimulates circulation Stretches groin muscles Stretches hip flexors",
    "steps": "High Lunge is a standing pose that is suitable for all levels and styles of asana practice. High lunge is usually practiced at the start of a sequence as part of a salute series or warm-up. High lunge stretches and strengthens the back, shoulders and leg muscles. Begin in Tadasana (tall mountain) pose. The feet should be touching, with the hands by your sides. Step the right foot back as far as is comfortable, with heel off the floor, toes grabbing the floor. At the same time, bend the left knee. Press the foot sole into the mat. Focus the gaze on the left big toe, and stretch the sternum towards the left knee. On the next inhale, raise the arms level to the ears, fingers pointing to the join between wall and ceiling. To exit the pose, step the right foot forward, relax the arms back to Tadasana. Repeat the other side.",
    "teacherCues": "",
    "modifications": "Place wedge under back foot Place hands against wall Place back heel against wall Place front thigh over chair",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/high-lunge/"
  },
  {
    "id": "revolved-half-moon-pose",
    "englishName": "Revolved half-moon pose",
    "sanskritName": "Parivrtta Ardha Chandrasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/revolved-half-moon-pose.jpg",
    "imageAlt": "Practitioner demonstrating Revolved half-moon pose (Parivrtta Ardha Chandrasana)",
    "shortFact": "Strengthens legs and hamstrings Improves core strength Opens shoulders, hips and pelvis Improves balance and focus Stimulates digestive system and massages internal organs.",
    "benefits": "Strengthens legs and hamstrings Improves core strength Opens shoulders, hips and pelvis Improves balance and focus Stimulates digestive system and massages internal organs",
    "steps": "Revolved half-moon pose combines a one-legged standing balance with a deep twist. This is a demanding pose requiring both core strength and a gravity-defying sense of balance, as the upper torso twists counter clockwise, whilst balancing on one foot with opposite arm and leg. When practicing in a sequence, this pose should be preceded by a series of sun salutations and preparatory poses including triangle, revolving triangle, side angle, revolved side angle and tree pose for stability. To enter the pose, begin from Tadasana or Intense Side stretch pose (Parsvottanasana) with feet shoulder width apart, right foot out and left foot 45 °. Raise the arms out to the side and horizontal. Stabilise the right leg, by pressing the foot down into the mat. Helicopter the arms and revolve the torso to the right. Tip the upper body forward and let the left foot and leg lift off the ground. Place your left hand to the outside of your right foot. Flex the left foot, pointing the toes downward. To complete the pose, extend the right arm vertical, stretching left chest across right leg. Turn your head and gaze towards your fingers tips. To exit the pose, turn the head, gaze and torso to the floor. Lower the right arm, bringing both hands to either side of the right foot. Lower the left leg. Complete a forward bend and lift back to the start pose, Tadasana. Repeat other side.",
    "teacherCues": "",
    "modifications": "Place resting hand on block to assist twist Place extending hand on hip to open tight shoulders Place extended foot onto wall to stabilise hips",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/revolved-half-moon-pose/"
  },
  {
    "id": "standing-leg-raise-pose",
    "englishName": "Standing Leg Raise Pose",
    "sanskritName": "C Utthita Hasta Padangushthasana C",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/standing-leg-raise-pose.png",
    "imageAlt": "Practitioner demonstrating Standing Leg Raise Pose (C Utthita Hasta Padangushthasana C)",
    "shortFact": "Stretches and strengthens psoas muscle Stretches and strengthens rectus abdominals Tones and strengthens hip flexors and abductors Strengthens glutes, leg muscles, knee and ankle joints Stretches hamstrings Improves concentration and muscular coordination Balances nervous system.",
    "benefits": "Stretches and strengthens psoas muscle Stretches and strengthens rectus abdominals Tones and strengthens hip flexors and abductors Strengthens glutes, leg muscles, knee and ankle joints Stretches hamstrings Improves concentration and muscular coordination Balances nervous system",
    "steps": "Standing Leg Raise Pose C is the last in a sequence of challenge standing balancing asanas. Standing Leg Raise Pose C is included in both the Ashtanga Primary Series and 26 postures for Hot Yoga. This pose requires strength in the lower lumbar and psoas muscles to support the standing leg as the other is lifting. Begin in Tadasana (tall mountain pose). Relax the shoulders away from the shoulders. Keep the chin level and eye gaze straight ahead. Spread the toes and press the soles of the feet down into the mat. Shift the weight onto the left foot and bend the right knee to the chest. Straighten the right knee and extend the leg. Hold for five breaths. To exit the pose relax the knee and bend the leg to the chest. Release the foot and lower to the ground. Bring the hands to the sides of the body. Repeat other side.",
    "teacherCues": "",
    "modifications": "Practice with knee bent until stability is achieved Practice standing next to a wall or holding on to a chair Use a belt to hold the foot up Press foot of extended leg against wall",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/standing-leg-raise-pose/"
  },
  {
    "id": "side-bending-pose",
    "englishName": "Side bending pose",
    "sanskritName": "Urdhva Hastasana Ardha Chandrasana",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/side-bending-pose.jpg",
    "imageAlt": "Practitioner demonstrating Side bending pose (Urdhva Hastasana Ardha Chandrasana)",
    "shortFact": "Stretches and strengthens side waist and oblique muscles Stretches and strengthens lower back and psoas muscles Improves posture Stimulates spinal nerves Tones upper arms Stretches and tones abdominal muscles Strengthens hips, legs and ankles.",
    "benefits": "Stretches and strengthens side waist and oblique muscles Stretches and strengthens lower back and psoas muscles Improves posture Stimulates spinal nerves Tones upper arms Stretches and tones abdominal muscles Strengthens hips, legs and ankles",
    "steps": "Side bending pose stretches and strengthen the back, flank and oblique muscles, toning the side waist and tummy. Side bends provide are a basic yoga prep pose appropriate for all levels of classes including beginner, pre/post-natal and senior yoga. Side bends prepare the spine and side waist for lateral bends and stretches required for triangle, extended side angle and half-moon poses. To enter the pose, begin in Tadasana. Root the feet down. Inhale and raise the arms overhead. Interlock the fingers, with pointer fingers extended. Exhale and bend to the right from the side waist. Hold, then inhale and lift the torso back to the upright position. Exhale bend to the left side. Hold, then inhale and lift torso back to upright position. To exit the pose, release the arms to the sides. Repeat 5-10 times.",
    "teacherCues": "",
    "modifications": "Stand against a wall, press hands against wall for support when arching sideways. Stand sideways near a wall, with outside of foot pressing against wall. Reach upper arm over and reach for wall. Hold a strap between taut between hands to open shoulders and stretch arms. Keep hands on hips and bend sideways. Sit on chair. Hold chair seat or leg with one hand, bend sideways.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/side-bending-pose/"
  },
  {
    "id": "low-lunge-pose",
    "englishName": "Low Lunge Pose",
    "sanskritName": "Anjaneyasana",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/low-lunge-pose.jpg",
    "imageAlt": "Practitioner demonstrating Low Lunge Pose (Anjaneyasana)",
    "shortFact": "Stretches and strengthens entire body Tones abdominal organs Stretches and strengthens hips, flexors, hamstrings, quadriceps, ankles Stretches psoas and lower back muscles Improves back strength Opens chest and improves respiratory system Calms the mind and balances nervous system.",
    "benefits": "Stretches and strengthens entire body Tones abdominal organs Stretches and strengthens hips, flexors, hamstrings, quadriceps, ankles Stretches psoas and lower back muscles Improves back strength Opens chest and improves respiratory system Calms the mind and balances nervous system",
    "steps": "Low lunge is a basic standing pose that stretches and strengthens the whole body. Low lunge is appropriate for all levels of classes from pre-natal to advanced styles of yoga. Runners will particularly appreciate the strong stretch in hamstrings and hip flexors. To enter the pose, begin in Tadasana. On the inhale, raise the arms overhead, exhale to standing forward bend. Inhale, look up and place the hands on either side of the feet. Exhale, step the right back to high lunge. Exhale, bend the left leg and bring the knee to the mat. Inhale raise arms overs overhead. Exhale, sink the hips, draw the tail bone and lift the pubic bone towards the navel. To deepen the pose, arch the back, sternum and eye gaze upward. To exit the pose, lower the arms. Place hands on either side of right foot. Step the back foot forward. On the exhale, releases to a forward bend. Inhale back to Tadasana. Repeat other side",
    "teacherCues": "",
    "modifications": "Place hands on blocks, knee on folded blanket. Place chair under front thigh for support. Move front foot out to side making more room for hips to move forward. Practice with hands or back foot pressing against wall.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/low-lunge-pose/"
  },
  {
    "id": "reverse-warrior-pose",
    "englishName": "Reverse Warrior Pose",
    "sanskritName": "Viparita Virabhadrasana",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/reverse-warrior-pose.jpg",
    "imageAlt": "Practitioner demonstrating Reverse Warrior Pose (Viparita Virabhadrasana)",
    "shortFact": "Strengthens ankles, legs and thighs Tones hips, waist and upper arms Stretches side chest, waist and abdomen Improves respiration and reduces fatigue Increases flexibility of back and spine Calms and balances the nervous system.",
    "benefits": "Strengthens ankles, legs and thighs Tones hips, waist and upper arms Stretches side chest, waist and abdomen Improves respiration and reduces fatigue Increases flexibility of back and spine Calms and balances the nervous system",
    "steps": "Warrior pose is a favourite with most practitioners, and a simple variation of this is the reverse warrior pose. This gentle posture is also sometimes known as ‘peaceful warrior’ pose stretches the hips and legs while opening up the chest. Begin in tall mountain (tadasana). Jump or step the feet wide apart. Turn the right foot out 90° and the left foot in 45°. Raise the arms to shoulders height as for Warrior II. Bend the right knee. Bring the left hand on the left back thigh. Raise the right arm, near to the left ear with the fingertips pointing to the sky, arch the back, eye gaze towards the fingertips. To exit the pose, inhale and return arms to shoulders height, Warrior II position. Step back to Tadasana, Repeat other side.",
    "teacherCues": "",
    "modifications": "Shorten stance of legs to take pressure off knees Lift chest to take pressure off lower back or bend back only slightly In place of raised arms, rest hands on hips Turn back foot in more or our to accommodate tight hips",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/reverse-warrior-pose/"
  },
  {
    "id": "extended-hand-to-big-toe-pose",
    "englishName": "Extended Hand to Big Toe Pose",
    "sanskritName": "Utthita Hasta Padangusthasan",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/extended-hand-to-big-toe-pose.jpg",
    "imageAlt": "Practitioner demonstrating Extended Hand to Big Toe Pose (Utthita Hasta Padangusthasan)",
    "shortFact": "Strengthens legs and ankles Improves focus, concentration and balance Increases hip flexibility Tones hips and thighs Improves posture and strengthens back and spine.",
    "benefits": "Strengthens legs and ankles Improves focus, concentration and balance Increases hip flexibility Tones hips and thighs Improves posture and strengthens back and spine",
    "steps": "Begin in mountain pose , feet touching with hands on hips. Gaze is straight ahead. Shift weight into left leg and foot. Bend right knee to chest, bring right hand to inside of knee and clasp right two fingers around right toe. Extend the leg straight, horizontal to ground. Stretch left arm horizontal. Open right hip, bring leg out to side. Turn gaze towards left hand. To exit the pose, bring gaze to front, and return leg to centre. Bend the knee into the chest and step the foot down. Repeat other side",
    "teacherCues": "",
    "modifications": "Place a strap around sole of foot (when arms do not reach) Practice with back against a wall Practice standing next to a wall, hand holding for support Practice with chair in front, lift leg onto chair with strap",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/extended-hand-to-big-toe-pose/"
  },
  {
    "id": "standing-split-pose",
    "englishName": "Standing Split",
    "sanskritName": "Urdhva Prasarita Eka Padasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/standing-split-pose.jpg",
    "imageAlt": "Practitioner demonstrating Standing Split (Urdhva Prasarita Eka Padasana)",
    "shortFact": "Strengthens back, hip and leg muscles Improves blood circulation Massages internal organs Improves concentration and focus Improves balance and coordination.",
    "benefits": "Strengthens back, hip and leg muscles Improves blood circulation Massages internal organs Improves concentration and focus Improves balance and coordination",
    "steps": "Begin in mountain pose with feet together . Raise arms over head, fold forward from hips, placing fingertips in front of feet. Shift weight onto right foot, raise left leg behind into a split, toe pointing up. To exit the pose, lower the leg to ground. Look up halfway. Bring the hands to hips and hinge upwards to start position. Repeat other side",
    "teacherCues": "",
    "modifications": "Place hands on blocks or chair Practice with back to wall, slide or rest foot on wall Practice in front of wall and walk hands down wall to floor, then raise leg",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/standing-split-pose/"
  },
  {
    "id": "revolved-chair-pose",
    "englishName": "Revolved Chair Pose",
    "sanskritName": "Parivrtta Utkatasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/revolved-chair-pose.jpg",
    "imageAlt": "Practitioner demonstrating Revolved Chair Pose (Parivrtta Utkatasana)",
    "shortFact": "Strengthens ankles, thighs and glutes and hip flexors Tones and strengthens back Stretches hips and spine Increase flexibility of shoulders Massages internal organs Improves balance and coordination Opens chest and improves respiration.",
    "benefits": "Strengthens ankles, thighs and glutes and hip flexors Tones and strengthens back Stretches hips and spine Increase flexibility of shoulders Massages internal organs Improves balance and coordination Opens chest and improves respiration",
    "steps": "Begin in Mountain pose. Bend the knees, bringing thighs horizontal to ground. Press palms together in prayer hands at the centre of the chest. Now, turn the torso to the right, placing the left elbow onto the outside of the right knee. Turn head and eye gaze to look over right shoulder. To exit the pose, bring the prayer back to heart centre. Straighten the legs and return to Mountain pose. Repeat other side.",
    "teacherCues": "",
    "modifications": "Stand with feet hips width apart Stand with feet hips width apart and squeeze block between knees to strengthen legs Twist at shoulders only Practice sitting in a chair (chair yoga style)",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/revolved-chair-pose/"
  },
  {
    "id": "raised-arms-pose",
    "englishName": "Raised Arms Pose",
    "sanskritName": "Hasta Uttanasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/raised-arms-pose.jpg",
    "imageAlt": "Practitioner demonstrating Raised Arms Pose (Hasta Uttanasana)",
    "shortFact": "Improves respiratory and lung function Improves energy and well-being Improves cardio-vascular systems Brings mental calm and clarity.",
    "benefits": "Improves respiratory and lung function Improves energy and well-being Improves cardio-vascular systems Brings mental calm and clarity",
    "steps": "Begin in Mountain pose . Bring the hands in front of the body and cross the wrists. Inhale and raise arms over head. Exhale and extend arms out to sides. To exit the pose, release the arms and return to mountain pose. Repeat changing cross of arms.",
    "teacherCues": "",
    "modifications": "Combine with temple pose (place feet wide apart and bend knees. Inhale straighten legs, exhale bend knees to high squat Combine with forward bend.  Inhale, stand tall and raise arms. Exhale fold forward (swan dive arms)",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/raised-arms-pose/"
  },
  {
    "id": "half-bound-lotus-standing-forward-fold",
    "englishName": "Half Bound Lotus Standing Forward Fold",
    "sanskritName": "Ardha Baddha Padmottanasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/half-bound-lotus-standing-forward-fold.jpg",
    "imageAlt": "Practitioner demonstrating Half Bound Lotus Standing Forward Fold (Ardha Baddha Padmottanasana)",
    "shortFact": "Stimulates digestion and relieves constipation Improves circulation and blood flow in the legs Improves balance and mental focus.",
    "benefits": "Stimulates digestion and relieves constipation Improves circulation and blood flow in the legs Improves balance and mental focus",
    "steps": "",
    "teacherCues": "",
    "modifications": "Place blocks by the sides of the feet Practice against a wall Place strap around waist and foot (to hold in place)",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/half-bound-lotus-standing-forward-fold/"
  },
  {
    "id": "extended-side-angle",
    "englishName": "Extended Side Angle Pose",
    "sanskritName": "Utthita Parshvakonasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/extended-side-angle.jpg",
    "imageAlt": "Practitioner demonstrating Extended Side Angle Pose (Utthita Parshvakonasana)",
    "shortFact": "Strengthens the legs: ankles, knees, thighs.",
    "benefits": "Strengthens the legs: ankles, knees, thighs. Opens the hips. Opens the chest and shoulders. Improves digestion. Stretches the side body. Strengthens the abdominal muscles.",
    "steps": "From Tadasana take the feet wide and parallel. Turn the right foot 90 degrees, so the toes face the top of the mat. Turn the left toes in slightly, to about 45 degrees, towards the front of the mat. Inhale, lift the arms parallel to the floor, palms facing down. Exhale, release the right knee over the ankle to a 90 degree angle, keeping the back straight and arms extended. Anchor in the left foot, keeping the leg straight and strong. Reaching forward, bring the right hand to the floor on the outside of your knee; take your left hand to your hip. Roll your left shoulder back to open the torso towards the sky. Keeping the torso open, extend the left arm over the left ear, palm down. To exit the pose, press down through both feet; straighten the front leg while reaching back with the left hand to bring the torso vertical. Repeat on the other side.",
    "teacherCues": "",
    "modifications": "Use a block, or a chair, under the bottom hand to give support to reaching the floor. For balance assistance, press the outside of the back foot against a wall, or align the entire back against a wall for support.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/extended-side-angle/"
  },
  {
    "id": "dancer",
    "englishName": "Dancer Pose",
    "sanskritName": "Natarajasana",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/dancer.jpg",
    "imageAlt": "Practitioner demonstrating Dancer Pose (Natarajasana)",
    "shortFact": "Physical Develops balance Opens the shoulders and chest Increases lung capacity Strengthens the leg muscles and arches of the feet Strengthens the spine Stretches the abdominal muscles Increases lung capacity Mental Stimulates and energies the mind Relieves mild depression Reduces stress Develops mental concentration.",
    "benefits": "Physical Develops balance Opens the shoulders and chest Increases lung capacity Strengthens the leg muscles and arches of the feet Strengthens the spine Stretches the abdominal muscles Increases lung capacity Mental Stimulates and energies the mind Relieves mild depression Reduces stress Develops mental concentration",
    "steps": "Natarajasana (nata = actor, dancer) (raja = King) (asana = posture) Also referred to as the lord of the dance takes its name from the Hindu God Shiva also known as nataraj in his form of the cosmic dancer. This posture not only requires balance, concentration, flexibility and strength, but most importantly its execution requires grace and elegance. Starting in Tadasana (Mountain pose) ground down into your left leg as you lift the right heel towards your buttocks, swiftly taking hold of the inside of your right foot with your right hand. Inhale and lift your left arm towards the sky along with lengthening the upper back and chest. Exhale and extend your right leg back gently pressing your right foot into your right hand, simultaneously bending back and down. Reach your left hand out in front of you keeping your gaze forward (Drishti point) with chin parallel to the floor . Hold for 20 seconds to 1min release and repeat on the other side.",
    "teacherCues": "",
    "modifications": "Beginners may find it easier to lift the heel towards their buttock and hold in that position increasing the strength in their supporting leg. It is also a good idea to hold onto a chair or wall for balance. Advanced students may work towards lifting the back leg enough to be able to hold onto the back foot with both hands. Your elbows should point forward keeping the elbows close as possible to the side of your head. If holding onto the foot is a strain then use a strap to hold your foot.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/dancer/"
  },
  {
    "id": "revolved-triangle",
    "englishName": "Revolved Triangle Pose",
    "sanskritName": "Parivrtta Trikonasana",
    "difficulty": "advanced",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/revolved-triangle.jpg",
    "imageAlt": "Practitioner demonstrating Revolved Triangle Pose (Parivrtta Trikonasana)",
    "shortFact": "Improves balance.",
    "benefits": "Improves balance. Builds focus. Massages the internal organs. Improves digestion and circulation. Tones and stretches leg muscles. Strengthens and stretches abdominal muscles. Strengthens hip muscles. Opens chest and shoulders.",
    "steps": "From Tadasana, step the left foot back about 2 or 3 foot distances (shorter than trikonasana), with the toes turned out abut 45 degrees. Place both hands on the hips and rotate the left hip forward to square the hips. Press down on the big toe on each foot to soften the knees. Inhale, raising the left arm, while keeping the right on the right hip. Exhale, hinge forward at the hips, while engaging the core, keeping the left arm extended next to the ear. Bring the left fingertips to the floor inside the right foot. Inhale deeply, and then exhale to twist the torso to the right, keeping the right hand on the hip. Once the stance is steady and the twist is full, roll the right shoulder back and reach up with the right arm, then take the gaze up towards the hand. To exit the pose, bring both hands to the floor, framing the right foot. Bring your hands to your hips and slowly hinge up with a straight back. Repeat on the other side.",
    "teacherCues": "",
    "modifications": "Use a block under the bottom arm to give support to reaching the floor and to maintain a straight spine. Bend the front knee if there are balance difficulties, or tight muscles. Shorten the stance if the back foot lifts from the floor. Place the back heel against a wall for support and balance.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/revolved-triangle/"
  },
  {
    "id": "eagle",
    "englishName": "Eagle Pose",
    "sanskritName": "Garudasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/eagle.jpg",
    "imageAlt": "Practitioner demonstrating Eagle Pose (Garudasana)",
    "shortFact": "Improves concentration Strengthens ankle and leg muscles Increases flexibility of shoulders, arms, legs and hips Improves strength and flexibility of upper back.",
    "benefits": "Improves concentration Strengthens ankle and leg muscles Increases flexibility of shoulders, arms, legs and hips Improves strength and flexibility of upper back",
    "steps": "In Tadasana or Mountain pose, spread the toes and heels, rooting the feet into the ground. The knees should be soft. Inhale and extend the arms straight in front of you and parallel to the ground. Exhale and bend both knees. Shift your weight and grounding into the left leg making the right leg light. Inhale as you lift the right knee and wrap it around the standing leg. Exhale and bend the knees. The right thigh should be in front of the left and the top of the right foot should rest on the left calf. Now, bring the left arm over the right and bend the elbows. Wrap the left forearm around the right and bring the palms together in front of the nose. Balance in this position for five flowing breaths (inhaling and exhaling through the nose). To come back to Tadasana, bend the left knee and bring the right toe down to the floor. Inhale and straighten the legs, exhale and release the arms down. Repeat the other side. Also, check out 5 tips for planning your yoga class around Eagle pose",
    "teacherCues": "",
    "modifications": "Use a wall to support back or bring the toe of the wrapped leg to the floor to support the ankles and knees. If the shoulders are tight – fold the arms bring palms together in prayer – anjali mudra.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/eagle/"
  },
  {
    "id": "triangle-pose",
    "englishName": "Triangle Pose",
    "sanskritName": "Trikonasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/triangle-pose.jpg",
    "imageAlt": "Practitioner demonstrating Triangle Pose (Trikonasana)",
    "shortFact": "Aids the digestion, massages the intestines Opens the chest, lungs and heart to improve breathing Gently stretches sciatic nerve and inner thighs and groins Strengthens legs Improves flexibility of hips, stretches abductors Stretches side waist and core.",
    "benefits": "Aids the digestion, massages the intestines Opens the chest, lungs and heart to improve breathing Gently stretches sciatic nerve and inner thighs and groins Strengthens legs Improves flexibility of hips, stretches abductors Stretches side waist and core",
    "steps": "From Mountain (Tadasana pose) Step the left back into a wide stance. Turn the toes out to a 45 degree angle. Open the arms out to a T shape. Inhale and extend the right arm, reaching out through the finger tips. On the exhalation, bring the right hand to shin or to the outside of the foot. Inhale and roll the left shoulder back slightly as you extend the left hand upwards, palm facing away from you. Turn the head and gaze towards the out stretched fingers. To come out of the pose, inhale and lift back to a wide stance. Turn the torso and toes to centre. Then bring the right foot in to 45 degrees and rotate the torso towards the left leg. Bring the left foot to a 90 degree angle. Repeat on other side.",
    "teacherCues": "",
    "modifications": "To avoid putting pressure on injured knees, use bent knee triangle. Insure the front leg is bent to a 90 degree angle and the thigh is parallel to the floor. In the case where the hips are very tight or painful, bring the hand to the shin, block or chair. If shoulders are tight bring the top hand down to the hip. In case of neck pain, Do not turn head, keep eye gaze to floor or straight ahead.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/triangle-pose/"
  },
  {
    "id": "half-moon-pose",
    "englishName": "Half-Moon Pose",
    "sanskritName": "Ardha Chandrasana",
    "difficulty": "beginner",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/half-moon-pose.png",
    "imageAlt": "Practitioner demonstrating Half-Moon Pose (Ardha Chandrasana)",
    "shortFact": "Strengthens the abdomen, ankles, thighs, buttocks, & spine Stretches the groins, hamstrings & calves, shoulders, chest, & spine Improves coordination & sense of balance Helps relieve stress Improves digestion.",
    "benefits": "Strengthens the abdomen, ankles, thighs, buttocks, & spine Stretches the groins, hamstrings & calves, shoulders, chest, & spine Improves coordination & sense of balance Helps relieve stress Improves digestion",
    "steps": "Begin in Mountain Pose (Tadasana). Step the left leg back (1/2 a legs length). Bend the forward standing leg. Inhale as you bring your right hand 6-10 inches in front of the little toe (in tepee fingers). Take the left hand to the left hip. Exhale and press the fingertips into the floor. Extend the crown of the head pointing away from you. Inhale and lift the back leg parallel or a little above to the floor. Roll the left shoulder back and press the heel of the standing foot into the floor. Gently straighten the standing leg and flex the foot (with toes pointing away from you). When you have balance, extend the left hand upwards with the palm facing away from you. Now turn the head and eye gaze towards the extended fingers. To come out of the pose, exhale and lower the raised leg to the mat. Return to the Mountain and repeat on the other side.",
    "teacherCues": "",
    "modifications": "Rather than extending the hand, most beginners should keep the hand and the head in a neutral position, eye gaze on the ground. Modification using bricks: Place the hands on bricks or use tepee fingers (tops of the fingers pressing into the floor and palms lifted) to create space in the side chest and hips. Modification using the wall: Stand with your back to the wall, one leg’s length away from the wall. Exhale & bend forward into a standing forward bend. Bring both hands underneath the shoulders to the floor or bricks. Inhale & raise your left leg parallel to the floor & press the left sole against the wall. Then complete the pose as above. Repeat other side. Come into a wide stance with your back to the wall. Place a brick about 6-10 inches in front of the right little toe. Bring your right foot to a 12 o’clock position and the left foot to 10 o’clock with the heel pressed against the wall. Bend your right leg and bring your right hand onto the brick. Inhale and lift the left leg parallel to the floor. Extend the left arm and back of the hand long the wall. Gently press left hip, heel, shoulder and back of the hand towards or against the wall to gain correct alignment and balance in this challenging pose.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/half-moon-pose/"
  },
  {
    "id": "cresent-yoga-pose",
    "englishName": "Crescent Pose",
    "sanskritName": "Anjaneyasa",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/cresent-yoga-pose.jpg",
    "imageAlt": "Practitioner demonstrating Crescent Pose (Anjaneyasa)",
    "shortFact": "Stretches the thigh, hip flexor, abdomen, chest and shoulders Strengthens the core stabilizers Opens the front of the body and allows for the natural curve of the lumbar spine Excellent posture to counterbalance hours spent seated and with the arms in front of the body.",
    "benefits": "Stretches the thigh, hip flexor, abdomen, chest and shoulders Strengthens the core stabilizers Opens the front of the body and allows for the natural curve of the lumbar spine Excellent posture to counterbalance hours spent seated and with the arms in front of the body",
    "steps": "This pose can be approached from a number of different positions, for simplicity begin in a downward facing dog. From Down Dog step the right foot up between the hands, stacking the knee joint directly over the ankle joint. Begin to lower the left knee to the floor while simultaneously sliding it back to allow the hips to move forward and down. Relax the top of the left foot onto the floor. As the pelvis moves down the front of the left thigh will begin to stretch. Lift the torso to an upright position and reach the arms up overhead bringing the palms together to touch. Hold the posture for several breaths, and then release the hands back down to the floor on either side of the right foot. Lift the back knee and tuck the toes under to step back to Downward Facing Dog. Repeat on the opposite side.",
    "teacherCues": "",
    "modifications": "Keep the hands on the floor or perform close to a wall for balance Hands on hips Keep the back toes tucked under to take pressure off the knee Place a folded blanket under the back knee for support, or fold the mat for more cushion Use a block under the shin to keep the kneecap completely off the floor Keep the hands shoulder distance apart",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/cresent-yoga-pose/"
  },
  {
    "id": "warrior-3-virabhadrasana-3",
    "englishName": "Warrior III",
    "sanskritName": "Virabhadrasana Iii",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/warrior-3-virabhadrasana-3.jpg",
    "imageAlt": "Practitioner demonstrating Warrior III (Virabhadrasana Iii)",
    "shortFact": "Elongates and strengthens the spine.",
    "benefits": "Elongates and strengthens the spine. Improves balance and concentration. Stretches and strengthens the legs. Strengthens the abdomen.",
    "steps": "Begin in Warrior I Pose, placing the hands on the hips. Shift all of the weight to the front foot and, hinging at the front hip, begin to drop the torso forward. Simultaneously, lift the back leg up. Continue hinging at the front hip, lowering the torso and raising the back leg until both the torso and the back leg are parallel to the floor. The back foot can be pointed or flexed. Square the hip bones to the floor. Do not bend either knee, but do keep them “soft.” Extend the arms straight ahead, placing the biceps next to the ears. Stay in this pose for three or more breath cycles and then switch legs.",
    "teacherCues": "",
    "modifications": "If you are pregnant, you can do this pose. Use the back of a chair, the edge of a counter, or wall for support. For balance issues, place the top of a folding chair along your abdomen. Start to hinge forward to Warrior III as described above. Use the seat of the chair as support for one of your hands as the other hand extends forward. Or, try placing the back foot on the wall as both hands extend forward. If the arms get tired from extending forward, try these modifications: Place the arms along the sides of the body, place the hands on the hips, or bring the hands to Prayer Position. There is no rule that says the leg and torso must be parallel to the floor to benefit from doing Warrior III. If the full expression of the pose is too much, try extending the back leg and both arms at a diagonal instead. Hinge slightly at the front hip and back off from the pose if it becomes uncomfortable",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/warrior-3-virabhadrasana-3/"
  },
  {
    "id": "warrior-2-virabhadrasana-2",
    "englishName": "Warrior II",
    "sanskritName": "Virabhadrasana Ii",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/warrior-2-virabhadrasana-2.jpg",
    "imageAlt": "Practitioner demonstrating Warrior II (Virabhadrasana Ii)",
    "shortFact": "Promotes calmness of spirit.",
    "benefits": "Promotes calmness of spirit. Improves alignment of the legs, hips, and shoulders. Strengthens legs, ankles, and groin area.",
    "steps": "From Mountain Pose, step the left foot back about 4 to 6 feet. (Note: The length you step back depends on your height.) Turn the left foot to a 30 to 50 degree angle. Align the heel of the front foot with the arch of the back foot. Bend the front knee to a 90 degree angle so that the front thigh is parallel to the ground. Planting the feet firmly in the ground, begin to open the torso, shoulders, and both hip bones toward the left side . Next, with palms facing down, lift the arms to shoulder height. Arms should be parallel to the front leg. Let the coccyx travel down as the pubic bone lifts. Lift up through the rib cage. Softly and slowly, take your gaze to the middle finger of the right hand. To come out of Warrior II, exhale the arms down, turn the hip bones back to the front of the mat and step the back leg up to meet the front leg. End in Mountain Pose. Repeat these steps on the other leg.",
    "teacherCues": "",
    "modifications": "If knee injuries, balance issues, or hip pain are present, place the seat of a folding chair underneath the front thigh. You may wish to put a folded blanket on the chair seat for extra comfort and support. If balance is an issue, you may want to shorten the length between the feet until the pose is more comfortable. If aligning the front heel to the back arch causes any pain in the knees, align the heels instead.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/warrior-2-virabhadrasana-2/"
  },
  {
    "id": "warrior-1-virabhadrasana",
    "englishName": "Warrior I",
    "sanskritName": "Virabhadrasana I",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/warrior-1-virabhadrasana.jpg",
    "imageAlt": "Practitioner demonstrating Warrior I (Virabhadrasana I)",
    "shortFact": "Improves posture, alignment, and balance.",
    "benefits": "Improves posture, alignment, and balance. Strengthens legs, ankles, and groin area. Boosts confidence. Improves joint health. Promotes flexibility of hips.",
    "steps": "Prepare for Warrior I by standing in Mountain Pose. From Mountain Pose, step the left foot back any amount and rotate the foot to a 50 to 70 degree angle. The toes of the right foot point to the front of the room. Align the heel of the right foot and the arch of the back foot. Bend the front knee to a 90 degree angle directly over the front ankle. Both hip bones should be squared to the front of the mat. From here, inhale the arms up, placing the biceps next to the ears, palms facing one another(Palms can touch at the top, if desired).Shoulders stay down and away from the ears as the fingers extend up to the sky. Stay here for several breaths and then repeat these steps on the other side.",
    "teacherCues": "",
    "modifications": "If aligning the front heel to the back arch is hard on the knees, align the heels instead. If knee injuries, low back pain, or balance issues are present, widen and/or shorten the distance between the feet until the pose is more comfortable. Use the back of a folding chair or a wall for extra support.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/warrior-1-virabhadrasana/"
  },
  {
    "id": "upward-salute-urdvha-hastasana",
    "englishName": "Upward Salute Pose",
    "sanskritName": "Urdhva Hastasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/upward-salute-urdvha-hastasana.jpg",
    "imageAlt": "Practitioner demonstrating Upward Salute Pose (Urdhva Hastasana)",
    "shortFact": "Sharpens concentration and endurance.",
    "benefits": "Sharpens concentration and endurance. Brings awareness to entire body. Improves posture and alignment. Promotes calmness and peacefulness.",
    "steps": "Begin with the feet together and the hands along the sides in Mountain Pose. Inhale the arms up, placing the biceps next to the ears. Let the palms face each other overhead. Feel the shoulder blades travel down the spine as the heart lifts toward the sky. Take the gaze up to the thumbs",
    "teacherCues": "",
    "modifications": "If the arms become fatigued while they are overhead, try bending the elbows and dropping the biceps down and away from the ears. (This is sometimes referred to as “goalpost” arms or “goddess” arms.) If standing is not an option, this pose can be performed while seated. If neck pain is present, keep the gaze straight ahead rather than taking it up to the thumbs.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/upward-salute-urdvha-hastasana/"
  },
  {
    "id": "tree-yoga-pose-vrksasana",
    "englishName": "Tree Pose",
    "sanskritName": "Vrksasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/tree-yoga-pose-vrksasana.jpg",
    "imageAlt": "Practitioner demonstrating Tree Pose (Vrksasana)",
    "shortFact": "Improves concentration.",
    "benefits": "Improves concentration. Improves balance. Strengthens thighs, calves, ankles, and spine",
    "steps": "Start by standing in Mountain Pose. Then, shift all of the body-weight onto the left foot and bend the right knee. With a bent knee begin to open the right hip to the right side of the body. Keeping the knee bent and hip open to the right, reach down with the right hand and clasp the right ankle. Bring the right foot up with the right hand and, if possible, place the right foot along the left inner thigh. Toes are pointing down toward the floor. Firmly press the sole of the right foot against the left inner thigh and, at the same time, press the left inner thigh into the sole of the right foot. While you are in Tree Pose, your tailbone drops toward the floor and your pubic bone lifts. Remember to keep your ears, shoulders, hips, left knee and ankle aligned. In order to maintain balance in tree, remember to breathe steadily and try gazing softly at a spot in the floor about 8 feet ahead of you that is not moving. Arms can be inhaled straight up, placing the biceps next to your ears, hands can be on the hips, or hands can press together for Prayer Pose in front of the chest. Try staying in Tree Pose for five complete breath cycles or for as long as your wish. To come out of Tree Pose, remove the foot from the thigh and slowly exhale the leg down until you are back in Mountain Pose. Perform steps one through four on the opposite side.",
    "teacherCues": "",
    "modifications": "If you are not comfortable balancing on your own, try this pose up against a wall for extra support or hold on to the back of a folding chair. If bringing the foot all the way to the upper thigh is not possible, try these modifications: Rest the foot of the bent leg next to the foot or ankle of the standing leg. Place the foot right next to the calf. In this modification, you do not apply pressure from the foot to the calf. You are simply “holding” the foot next to the calf.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/tree-yoga-pose-vrksasana/"
  },
  {
    "id": "chair-fierce-pose-utkatasana",
    "englishName": "Chair Pose",
    "sanskritName": "Utkatasana",
    "difficulty": "intermediate",
    "category": "standing",
    "categories": [
      "standing"
    ],
    "image": "/poses/chair-fierce-pose-utkatasana.jpg",
    "imageAlt": "Practitioner demonstrating Chair Pose (Utkatasana)",
    "shortFact": "Strengthens gluteal, thigh, abdominal and back muscles.",
    "benefits": "Strengthens gluteal, thigh, abdominal and back muscles. Strengthens the ankles and feet, while stretching the calve muscles. Warms the body, stimulates the heart.",
    "steps": "In Tadasana or Mountain pose, firmly root into the ground, finding equal weight on all corners of the feet. Inhale to bring the arms up overhead, moving the upper arm-bones up and back. Turn the palms to face each other, or place the palms in prayer. Exhale to bend the knees as though sitting in a chair. Track the knees over the toes and in line with the hips. Maintain a neutral spine by dropping the tailbone down and drawing the pubic bone towards the navel. Avoid both over arching or tucking the lumbar spine. The torso will be perpendicular to the thighs. Stay for 5 deep breaths. To come back to standing, inhale to straighten the legs and exhale to release the arms to the side of the body.",
    "teacherCues": "",
    "modifications": "Don’t bend the knees as deeply… keep the arms in front of the chest… perform at the wall, so the tail is just touching and is gently supported.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/chair-fierce-pose-utkatasana/"
  },
  {
    "id": "compass-pose",
    "englishName": "COMPASS POSE",
    "sanskritName": "Parivrtta Surya Yantrasana",
    "difficulty": "advanced",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/compass-pose.jpg",
    "imageAlt": "Practitioner demonstrating COMPASS POSE (Parivrtta Surya Yantrasana)",
    "shortFact": "Opens the hips, obliques, hamstrings and chest.",
    "benefits": "Opens the hips, obliques, hamstrings and chest. Allows the spine to become more flexible. Stimulates the internal organs, especially the digestive system. Allows the practitioner to become more patient with more patience. Relieves stress and constipation Strengthens lower back and hips.",
    "steps": "The compass Pose is also known as Revolved Sundial Pose, which is the literal Sanskrit translation of the name of the pose. This is a deep pose which opens the hamstrings, hips, shoulders and chest. Because of the level of flexibility required for this pose, it falls into the intermediate category of yoga poses. The Compass Pose is one that can be performed gracefully to open up the sides while elongating the spine. Most Yoga teachers add this pose as a peak pose in their class plans. The Compass Pose requires equal parts strength and equal parts flexibility to master the pose. Begin seated in Staff pose with legs stretched out and back long and shoulders open. Bring the left leg closer to the chest by hugging the left knee with both hands. Stay here for a few breaths and rotate the leg to open the hips as a preparation for the pose. Next step is to cradle the left leg, by bringing the left knee into the left elbow and holding the left ankle with the right hand. Breathe here for a few seconds and while cradling the leg and rocking to and fro. Next bring the left leg back to hook over the left shoulder. Fold the right leg in half seated cross-legged pose. Holding the left foot with the right hand, extend the left hand sideward by slightly bending your back. The final step is to hold firm the left foot with right hand and extend to straighten the left leg. Press into the left fingers as you add length to the extended right side of the body. Further straighten the left leg, while gazing upwards towards the right side. To come out of the pose, release the straightened leg back over the knee. Bring the left hand to hug the left leg. Release the left leg back to Staff Pose.",
    "teacherCues": "",
    "modifications": "Use a strap to hook the ankle to stretch hamstring before opening into the pose. A blanket if the seated knee is lifting off the ground.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/compass-pose/"
  },
  {
    "id": "revolved-head-to-knee-pose",
    "englishName": "Revolved Head To Knee Pose",
    "sanskritName": "Parvritta Janu Sirshasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/revolved-head-to-knee-pose.jpg",
    "imageAlt": "Practitioner demonstrating Revolved Head To Knee Pose (Parvritta Janu Sirshasana)",
    "shortFact": "Stretches the spine, shoulders and side body muscles.",
    "benefits": "Stretches the spine, shoulders and side body muscles. Stimulates the liver and kidneys Aides back pain Alleviates headaches",
    "steps": "Revolved Head To Knee Pose is a twisting side bend posture that aims to not only twist the abdominal muscles but to create openness across the side body. Not only does this posture involve elements of twisting and side bending, it is also considered a forward fold. Begin in a seated position with the legs extended to the sides. Bring the sole of your right foot to the left inner thigh, pressing the right heel into the groin. With an exhale, slowly lean to the left, letting your left shoulder rest at the inside edge of the left knee. Extend your left arm forward grabbing the inside edge of the left foot. Inhale as you raise your right arm towards the ceiling. With an exhale extend the right arm overhead reaching for the outside edge of the left foot. If you cannot grasp the foot simply reach forward as you elongate the right side body. Keeping both hips anchored to the ground, hold as you breathe for 5 breaths. Gently release by first folding forward over the extended leg and then return to seated position. Switch sides when you are ready.",
    "teacherCues": "",
    "modifications": "To lessen hamstring tightness in the extended leg, place a blanket or towel under the knee to add support Place a block or towel beneath the bent knee to add support If you cannot grasp the foot with the hands use a strap around the foot",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/revolved-head-to-knee-pose/"
  },
  {
    "id": "heron-pose",
    "englishName": "Heron Pose",
    "sanskritName": "Krounchasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/heron-pose.jpg",
    "imageAlt": "Practitioner demonstrating Heron Pose (Krounchasana)",
    "shortFact": "Stimulates the abdominal organs and heart Stretches the feet Stretches the hamstrings Stretches the knees Strengthens the arches of the feet.",
    "benefits": "Stimulates the abdominal organs and heart Stretches the feet Stretches the hamstrings Stretches the knees Strengthens the arches of the feet",
    "steps": "Heron Pose is a seated posture that requires a single leg to be extended into the air with the support of both arms. This posture lends to an incredible stretch to the hamstrings, as well as the other muscle groups across the legs. While mentioned in the Yoga Sutras of Patanjali, no directions for the posture are given. However, the name lends itself to the appearance of a Heron with the extended leg representing the outstretched neck of the Heron. Additionally, Heron pose benefits the abdominal organs. From Dandasana (staff pose), begin by drawing your left leg into Ardha Virasana (half hero’s pose). Bending the right knee, allow your foot to rest on the ground. Exhale as you reach down with both hands to grasp the right foot. Inhale, lean back slightly into the seat keeping the torso long and avoid rounding the shoulders forward. With your next inhale, gently raise the right leg to at least a 45-degree angle from the floor. The leg can be lifted higher depending on hamstring flexibility. Hold Heron pose for 30 seconds to a full minute while breathing slowly. Gently release the right foot down to the ground. Allow the left leg to release back to Dandasana. Switch sides when ready.",
    "teacherCues": "",
    "modifications": "If knee issues arise in the Ardha Virasana posture, sit instead in Janu Srisasana ( Head To Knee Pose) A strap can be used around the foot if reaching for the foot is unavailable The extended leg can be bent slightly if hamstring flexibility is poor",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/heron-pose/"
  },
  {
    "id": "half-squat-pose",
    "englishName": "Half Squat Pose",
    "sanskritName": "Ardha Malasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/half-squat-pose.png",
    "imageAlt": "Practitioner demonstrating Half Squat Pose (Ardha Malasana)",
    "shortFact": "Opens hips and groin Stretches hip flexors and hamstring Lengthens psoas and leg muscles Improves flexibility in hips and lower back Strengthens ankles and core.",
    "benefits": "Opens hips and groin Stretches hip flexors and hamstring Lengthens psoas and leg muscles Improves flexibility in hips and lower back Strengthens ankles and core",
    "steps": "Half Squat Pose is an intermediate hip opener with benefits. This pose aims to stretch the lower back, hamstrings and lower leg. What is great about the half squat pose is that it’s a great preparatory pose for wide straddle forward bends and standing leg extensions. Begin in a seated position. Bring the legs apart to a straddle. Bend the right knee up, drawing the heel of the foot towards the sit bones. Stretch the left heel out to the corner of the mat and point the toes skyward. To realise the full pose, lean forward from the hips, reaching the arms forward. Placing the right elbow in front of the right knee, bend elbows and bring the palms together in prayer. Hold for 5 deep yoga breaths. To exit the pose, release the hands and stretch the right leg stretch. Repeat the other side. The benefits of this pose include a deep stretch to open hips and groin. In addition, Half Squat pose works to lengthen psoas, hamstring and lower leg muscles increasing flexibility and ease of movement.",
    "teacherCues": "",
    "modifications": "Place blanket or block under hips Place bent leg foot and/or extended leg on blanket",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/half-squat-pose/"
  },
  {
    "id": "monkey-pose",
    "englishName": "Monkey pose",
    "sanskritName": "Hanumanasana",
    "difficulty": "advanced",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/monkey-pose.jpg",
    "imageAlt": "Practitioner demonstrating Monkey pose (Hanumanasana)",
    "shortFact": "Improves flexibility in legs, groin and hips Strengthens, tones and stretches hip flexors and quads Massages abdominal organs Tones the pelvic area.",
    "benefits": "Improves flexibility in legs, groin and hips Strengthens, tones and stretches hip flexors and quads Massages abdominal organs Tones the pelvic area",
    "steps": "Monkey pose, also known as the “splits” is an advanced leg stretch and hip opener. Monkey pose simultaneously stretches the front and backs of the legs. These are the muscles that get the most use in walking, running and cycling. Therefore the many benefits of Monkey pose, include prevention of injury from these sports. However, this also means that extra care should be taken when entering the full posture. This is particularly true, for those with limited flexibility in the hips, pelvis and groin. Half-Splits, a modified version of the pose, provides nearly all the same benefits, stretching the leg muscles and opening hip flexors. Both the modified and full pose requires a full warm-up sequence including standing and seated forward bends to prepare the body for the intense stretch of monkey pose. To start, begin in a hands and knees position. Place the right foot forward, foot sole flat on the ground. Place the hands on the right thigh, and draw the belly in to straighten the spine. Place the hands on the ground or blocks next to the hips. Slide the left knee back an inch of two. Gently extend the right leg straight, heel on the floor, toes pointing up. This is the modified half-splits version. To continue into the full Monkey Pose, keep sliding the right heel forward, simultaneously sliding left knee back, lowering the pelvis and both legs to the floor in one straight line. Close the eyes and bring the hands into prayer at heart centre. Hold for as long as is comfortable. To exit the pose, bring hands to the floor, draw the right foot back towards the body. Return the start position. Repeat other side.",
    "teacherCues": "",
    "modifications": "Tuck back toe under for stability Place bolster or blanket under pelvis to avoid groin strain Practice half-split Place hands on blocks and pelvis on bolster, waiting for muscles to relax, rather than sliding into pose",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/monkey-pose/"
  },
  {
    "id": "side-lunge-pose",
    "englishName": "Side Lunge Pose",
    "sanskritName": "Skandasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/side-lunge-pose.jpg",
    "imageAlt": "Practitioner demonstrating Side Lunge Pose (Skandasana)",
    "shortFact": "Open hips and heart Stretches hamstrings, inner thighs, calves and ankles Strengthens core muscles Improves balance Improves flexibility and strength of knees.",
    "benefits": "Open hips and heart Stretches hamstrings, inner thighs, calves and ankles Strengthens core muscles Improves balance Improves flexibility and strength of knees",
    "steps": "Side lunge pose is a hip opening, heart- warming beauty of a pose. Sometimes known as young goddess warrior, the pose is named for the Hindu war god Skanda. There are many versions of Skandasana that include seated and standing leg behind the head postures. The side lunge version described here is a standing pose that combines a deep half squat with a modified split. In its full expression, side lunge pose includes an arm bind and twist that open chest, hips and hamstrings. The real value of side lunge pose for yoga teachers and choreographers is its versatility. Side lunge pose provides endless possibilities for effortless transitions, from mountain, goddess pose, wide straddle forward bends, warrior series and moving from standing to seated poses. Side lunge pose was made popular by Shiva Rhea, who used it many of her trance-flow sequences. Begin in a wide leg forward bend with both hands on the floor. Bend your right knee and lengthen your left leg. Ground the right foot to the floor. Flex the left foot so the toes point up towards the ceiling. Open the chest and lift the gaze. Deepen the lunge by bringing hips over the ankles. Slowly, lower tailbone towards the floor. Bring the right shoulder and arm in front the right leg, wrap the arm back and around. Reach the left arm behind the body and bind. Keep revolving the chest towards the extended leg, eye gaze lifting skyward. To exit the pose, release the bind. Bring both hands to the floor, return to start pose. Repeat other side.",
    "teacherCues": "",
    "modifications": "Place hands on blocks Place a block under buttocks Practice straddling a chair",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/side-lunge-pose/"
  },
  {
    "id": "straight-angle-pose",
    "englishName": "Straight Angle Pose",
    "sanskritName": "Samakonasana",
    "difficulty": "advanced",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/straight-angle-pose.jpg",
    "imageAlt": "Practitioner demonstrating Straight Angle Pose (Samakonasana)",
    "shortFact": "Stretches and strengthens hips, groin, inner thighs, hamstrings and calves Improves flexibility of abductors and lateral hip muscles Stimulates spinal nerves and relieves lower back pain Reduces hip pain Improves circulation and blood blow to abdominal area Tones abdominals, hips and glutes.",
    "benefits": "Stretches and strengthens hips, groin, inner thighs, hamstrings and calves Improves flexibility of abductors and lateral hip muscles Stimulates spinal nerves and relieves lower back pain Reduces hip pain Improves circulation and blood blow to abdominal area Tones abdominals, hips and glutes",
    "steps": "Straight angle pose is a wide legged seated straddle, sometimes practiced as double splits. Straight angle pose is an advanced asana, typical of Ashtanga, Yin yoga or Vinyasa inspired Ashtanga. This pose requires time and patience, but its rewards are many. Straight angle Pose is the ultimate hip opener, improving flexibility of hip rotators and stretching the entire leg from hip to toe. Begin in a seated position with your legs extended along the floor (staff pose). Spread the legs as wide as is comfortable. Flex the feet with toes pointing upward. Lift the torso up and out of the hips. Relax the shoulders and straighten back and spine. Bring hands to prayer and gaze to fingertips. To exit the pose, release the hands to the ground and draw legs together, returning to staff pose. Repeat daily to improve flexibility.",
    "teacherCues": "",
    "modifications": "Open the legs only as far as is comfortable Sit on a blanket or block to lift pelvis Sit against a wall for back support Sit facing a wall, sliding feet along for an extra stretch",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/straight-angle-pose/"
  },
  {
    "id": "womb-embryo-pose",
    "englishName": "Womb Embryo Pose",
    "sanskritName": "Garbha Pindasana",
    "difficulty": "advanced",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/womb-embryo-pose.png",
    "imageAlt": "Practitioner demonstrating Womb Embryo Pose (Garbha Pindasana)",
    "shortFact": "Improves flexibility of hips, knees, ankles Strengthens uterus/aids childbirth Balances the adrenal glands Massages lymphatic tissues, kidneys and ureter channels Stimulates digestion Improves balance Strengthens spine and back muscles.",
    "benefits": "Improves flexibility of hips, knees, ankles Strengthens uterus/aids childbirth Balances the adrenal glands Massages lymphatic tissues, kidneys and ureter channels Stimulates digestion Improves balance Strengthens spine and back muscles",
    "steps": "Womb Embryo Pose is an advanced pose that requires flexibility in the hips, knees and ankles. Womb Embryo Pose is called so, because the shape resembles that of the fetus in the womb. In fact, this pose is said to be beneficial for pregnancy, preparing the fetus for the correct birthing position. The pose is sometimes accompanied by nine rock-n-rolls representing the nine months of gestation. From staff pose, bend right leg, then left into lotus (placing sole of the foot on opposite thigh). Thread an arm between each the thigh and calf of each leg. Bend the elbows and raise the arms and hands upwards. Bring the hands to the chin or face and pull the legs towards the upper body. Balance on the sit bones here for five breaths. Optional; Inhale, bend your head and hold with the hands, roll forward and swivel onto the right hip. Exhale rock backwards nine times. To exit the pose return to balance. Release one arm at a time. Lower the legs and uncross. Repeat crossing the left leg first.",
    "teacherCues": "",
    "modifications": "Complete while lying on the back Cross legs and wrap arms around legs, holding feet Place bolster behind hips Place strap around thighs",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/womb-embryo-pose/"
  },
  {
    "id": "noose-pose",
    "englishName": "Noose Pose",
    "sanskritName": "Pasasana",
    "difficulty": "beginner",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/noose-pose.jpg",
    "imageAlt": "Practitioner demonstrating Noose Pose (Pasasana)",
    "shortFact": "Stretches vertebrate column Stretches and strengthens ankles, hamstrings and glutes Tones hips and side-waist Massages abdominals Improves digestion and elimination Improves posture.",
    "benefits": "Stretches vertebrate column Stretches and strengthens ankles, hamstrings and glutes Tones hips and side-waist Massages abdominals Improves digestion and elimination Improves posture",
    "steps": "Noose pose is an advanced pose combining a squat, twist and bind. Noose pose is so called because its shape resembles a noose, when the arms are wrapped around the squatting legs. Binding and twists present challenges to beginners, but modified versions of noose pose are accessible to all levels, providing many of the same benefits. Begin in Tadasana (mountain pose). Bend the knees and lower into a super low squat. Inhale and walk the hands around to the right side, bringing the left elbow to the outside of right knee. Press the knee and arm against each other. Exhale and lengthen the left side of the body. Inhale and twist deeper, rotating chest towards the sky. Exhale reach the right hand around the back of the waist. Inhale, wrap left arm back around the chins and clasp hands. To exit the pose, release the clasp and unwind the upper body. Roll-up slowly to Tadasana (mountain pose). Repeat other side.",
    "teacherCues": "",
    "modifications": "Place heels on folded blanket Practice twisting with hands on wall for support Practice twisting in a chair Practice lying on back Use strap between hands to enable full bind ½ Bind around one leg Squat low, walk hands to one side, then other",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/noose-pose/"
  },
  {
    "id": "garland-pose",
    "englishName": "Garland Pose",
    "sanskritName": "Malasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/garland-pose.jpg",
    "imageAlt": "Practitioner demonstrating Garland Pose (Malasana)",
    "shortFact": "Increases flexibility of hips Stretches groins Strengthens and tones pelvic floor Strengthens thighs, knees, shoulders, arm and neck Strengthens digestive system Improves circulation and energy Massages internal organs Lengthens spine and tones spinal nerves.",
    "benefits": "Increases flexibility of hips Stretches groins Strengthens and tones pelvic floor Strengthens thighs, knees, shoulders, arm and neck Strengthens digestive system Improves circulation and energy Massages internal organs Lengthens spine and tones spinal nerves",
    "steps": "Garland Pose is a deep hip opening pose that keeps on giving. In addition to stretching the hip and groin areas, garland pose lengthens the spine and opens the tail bone area relieving compression. As importantly, garland pose is specifically concerned with strengthening the digestive system, relieving indigestion, constipation and wind. This posture is suitable for all levels, including pregnancy yoga. From mountain pose, step the feet hip width apart. Bend the knees and squat close to the floor, with the knees apart. Bring the hands together in prayer at the center of the chest. The elbows press against the inside of the knees. At the same time, squeeze the thighs against the upper arms. To lengthen the spine, tuck the tail down and lift the chest. To exit the pose, place the hands on the floor in front of the feet. List the tail upward and release the head to a standing forward bend. Leading with the arms and chest, swan the arms and rise up to tall mountain.",
    "teacherCues": "",
    "modifications": "Place blanket or wedge under heels Place block under hips Sit higher in the squat Squat holding onto back of chair",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/garland-pose/"
  },
  {
    "id": "revolved-seated-side-angle",
    "englishName": "Revolved seated side angle",
    "sanskritName": "Parivrtta Upavistha Konasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/revolved-seated-side-angle.jpg",
    "imageAlt": "Practitioner demonstrating Revolved seated side angle (Parivrtta Upavistha Konasana)",
    "shortFact": "Stretches hamstrings, inner thighs and hip joints Opens chest, shoulder and upper back Tones and massages abdomen and internal organs Strengthens and stretched upper back, oblique and flank muscles.",
    "benefits": "Stretches hamstrings, inner thighs and hip joints Opens chest, shoulder and upper back Tones and massages abdomen and internal organs Strengthens and stretched upper back, oblique and flank muscles",
    "steps": "Revolved seated side angle pose is a seated forward bend with a twist. Revolved seated side angle pose provides an all over body stretch, including those hard to reach places such as the inner thighs and between the shoulder blades. The combined effect of the straddle and twist make this pose an effective hip opener and toner, suitable for all levels. From a seated posture, open the legs wide apart. Stretch sideways towards the right leg. Bring the right elbow to the mat, to inside of the right leg and grab the toe with index and thumb. Lift the left arm up and over the head to clasp top of foot. Rotate chest upwards, eye gaze upwards. To exit the pose, release both toe holds and lower the left arm. Lift/press back to upright seated position. Repeat the other side.",
    "teacherCues": "",
    "modifications": "Blankets and bolsters under knees Place forearm on floor to inside of leg/raise top arm up and over",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/revolved-seated-side-angle/"
  },
  {
    "id": "pigeon-pose",
    "englishName": "One legged Pigeon pose",
    "sanskritName": "Eka Pada Ragakapotasana",
    "difficulty": "beginner",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/pigeon-pose.jpg",
    "imageAlt": "Practitioner demonstrating One legged Pigeon pose (Eka Pada Ragakapotasana)",
    "shortFact": "Improves flexibility of hips and pelvis Stretches groin and inner thighs Strengthens back Massages and stimulates internal organs.",
    "benefits": "Improves flexibility of hips and pelvis Stretches groin and inner thighs Strengthens back Massages and stimulates internal organs",
    "steps": "Pigeon pose is a great hip opener posture which also strengthens the legs. This intense hip opener is a good pose for beginners and has plenty of benefits. Begin in a seated cross leg pose (sukanasana) with fingertips pressing into the ground. Lift the top leg and stretch it behind the body with the toes pointing back. Walk the hands forward and fold over the bent leg, bringing the forehead towards the ground. Hold the posture and breathe for a few minutes. Then, walk the hands back towards the hips to straighten the torso. Bend the back knee and grab your toes with both hands, while drawing the foot towards the top of your head. To exit the pose, release your hands, swing the back leg forward to cross legs. Repeat the other side.",
    "teacherCues": "",
    "modifications": "Ankle and knee pain or injuries Lower back pain or injuries Painfully tight hips and pelvis",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/pigeon-pose/"
  },
  {
    "id": "spinal-column-pose",
    "englishName": "Spinal Column Pose",
    "sanskritName": "Merudandasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/spinal-column-pose.jpg",
    "imageAlt": "Practitioner demonstrating Spinal Column Pose (Merudandasana)",
    "shortFact": "Stretches spinal column Strengthens abdominal muscles Strengthens legs Stretches hamstrings.",
    "benefits": "Stretches spinal column Strengthens abdominal muscles Strengthens legs Stretches hamstrings",
    "steps": "Begin in staff pose (Dandasana). Bend both knees. Reach the hands forward to clasp two fingers around the big toe of each foot. Lean the upper torso slowly backwards and lift both feet off the ground, balancing on the tailbone. Extend both legs straight, keeping the feet together and point the toes upward. To exit the pose, bend knees and bring feet to ground. Release grip. Return to staff pose.",
    "teacherCues": "",
    "modifications": "Place a block, blanket or bolster behind the hips to avoid roll back Hold the feet with a strap to avoid rounding the shoulders or bending the knees",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/spinal-column-pose/"
  },
  {
    "id": "bharadvajas-twist",
    "englishName": "Bharadvaja’s twist",
    "sanskritName": "Bharadvajasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/bharadvajas-twist.jpg",
    "imageAlt": "Practitioner demonstrating Bharadvaja’s twist (Bharadvajasana)",
    "shortFact": "Stretches spine, shoulder, hips Massages abdominal organs Improves digestion Relieves lower backache and sciatica Relieves carpal tunnel syndrome Relieves stress.",
    "benefits": "Stretches spine, shoulder, hips Massages abdominal organs Improves digestion Relieves lower backache and sciatica Relieves carpal tunnel syndrome Relieves stress",
    "steps": "Begin in staff pose , with legs extending straight. Bend the left leg back to virasana. Slide the left knee away from the body. Bend the right leg inward. Lift the right leg on top of left to ½ lotus. Turn the upper body and head to the right, reaching the right arm around the back waist to hold the toe. Extend the left arm up and over to hold the right knee. To exit the pose, release the bind and return to centre. Repeat other side.",
    "teacherCues": "",
    "modifications": "Place blanket or block underneath hip to even sit bones Place folded knee on blanket Use strap to hold toe Hold elbow instead of toe Place hand on block behind hips instead of toe Place legs astride hips (animal resting pose instead of ½ lotus Seated on a chair, cross right leg over other, bring right hand to back of chair, left to knee",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/bharadvajas-twist/"
  },
  {
    "id": "upward-facing-plank-pose",
    "englishName": "Upward Facing Plank Pose",
    "sanskritName": "Purvottanasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/upward-facing-plank-pose.jpg",
    "imageAlt": "Practitioner demonstrating Upward Facing Plank Pose (Purvottanasana)",
    "shortFact": "Strengthens shoulders, arms, chest and legs Stretches spine, back, chest and legs Benefits nervous system, alleviating symptoms of mild depression and fatigue Improves respiratory system, relaxing throat and opening chest.",
    "benefits": "Strengthens shoulders, arms, chest and legs Stretches spine, back, chest and legs Benefits nervous system, alleviating symptoms of mild depression and fatigue Improves respiratory system, relaxing throat and opening chest",
    "steps": "Begin in staff pose (Dandasana) with legs together and in front of the body. Bring the hands in back of the hips, fingertips pointing towards the body. Press the feet towards the ground and lift the hips upward. To exit the pose, lower the hips to the ground.",
    "teacherCues": "",
    "modifications": "Reverse table top (Ardha Purvottanasana) with bent knees and bring feet flat on ground From staff pose (hands on blocks or blanket behind hips) Sitting on a block (hands flat on ground or block) Sitting on a chair stretch legs straight out in front. Hands grip edges of chair to lift hips. Press toes down.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/upward-facing-plank-pose/"
  },
  {
    "id": "hero-pose",
    "englishName": "Hero Pose",
    "sanskritName": "Virasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/hero-pose.jpg",
    "imageAlt": "Practitioner demonstrating Hero Pose (Virasana)",
    "shortFact": "Improves digestion (relieves symptoms for ailments such as peptic ulcers, hyperacidity, hemorrhoids) Strengthens pelvic muscles Prevents hernia and sciatica Improves circulation and flow of blood to genitals, improving reproductive and sexual functions Relieves menstrual disorders Stretches and strengthens muscles and tendons around ankles and knees.",
    "benefits": "Improves digestion (relieves symptoms for ailments such as peptic ulcers, hyperacidity, hemorrhoids) Strengthens pelvic muscles Prevents hernia and sciatica Improves circulation and flow of blood to genitals, improving reproductive and sexual functions Relieves menstrual disorders Stretches and strengthens muscles and tendons around ankles and knees",
    "steps": "Begin in a kneeling pose. Sit back, lowering the buttocks to the ground and between the legs. Place the hands on the knees, palms down. Bring the spine and back upright, chin level with the floor. Close the eyes and relax the arms. Breathe normally using the nose, focusing attention of the inhale and exhale of air for 5minutes or longer. To exit the pose, open the eyes and bring the hands to the floor. Push up into a hands and knees pose. Stretch the legs back one at a time before returning to the start position.",
    "teacherCues": "",
    "modifications": "For stiff knees, tight hips and pregnancy, place blocks under buttocks For knee injury and pregnancy practice meditation in seated crossed legs",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/hero-pose/"
  },
  {
    "id": "gate-pose",
    "englishName": "Gate Pose",
    "sanskritName": "Parighasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/gate-pose.jpg",
    "imageAlt": "Practitioner demonstrating Gate Pose (Parighasana)",
    "shortFact": "Lateral stretch to pelvic region and torso Massages abdominal muscles and internal organs Stimulates digestion Tones abdominals and strengthens legs Stretches side ling and improves respiratory lung function Relieves symptoms of asthma, allergies, colds, Improves spinal flexibility.",
    "benefits": "Lateral stretch to pelvic region and torso Massages abdominal muscles and internal organs Stimulates digestion Tones abdominals and strengthens legs Stretches side ling and improves respiratory lung function Relieves symptoms of asthma, allergies, colds, Improves spinal flexibility",
    "steps": "Begin in a kneeling pose with the feet touching and front of the foot flat on the ground. Stretch the right leg to the side and extend the right arm along the leg. Raise the left arm over the head and side bend the torso to the right. Place the left palm over the right and spiral the chest upward, eye gaze under the arm pit. To exit the pose, lower the left arm, bring torso upright and return right knee to ground. Repeat the other side.",
    "teacherCues": "",
    "modifications": "Left (or right) hand stretches overhead, but is not placed on top of right(or left) Blanket is placed under knees Practice by a wall, overhead hand can be pressed against a wall",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/gate-pose/"
  },
  {
    "id": "half-lord-of-the-fishes",
    "englishName": "Half Lord of the Fishes pose",
    "sanskritName": "Ardha Matsyendrasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/half-lord-of-the-fishes.jpg",
    "imageAlt": "Practitioner demonstrating Half Lord of the Fishes pose (Ardha Matsyendrasana)",
    "shortFact": "Stretches and tones back and shoulder muscles Lengthens and energises spine Massages and tones abdominals Relieves digestive problems Aids function of liver, kidney and adrenal glands.",
    "benefits": "Stretches and tones back and shoulder muscles Lengthens and energises spine Massages and tones abdominals Relieves digestive problems Aids function of liver, kidney and adrenal glands",
    "steps": "Begin in a seated position with the legs stretched out in front. Bend the right leg and bring the foot across and to the outside of the left knee. Now bend the left leg, drawing that foot towards the outside of the right hip. Inhale to lift and turn the torso, bringing the left elbow to the outside of the knee and the right hand behind the back. At the same time turn head and eye gaze to look over the right shoulder. On the exhale press the left elbow against the right knee. To complete the pose, bend the left arm and open the palm. Breathe deeply and slowly for the duration of the pose. To come out the pose, release the left arm, inhale back to centre and on the exhale stretch the legs back to the start position. Repeat the other side. Check out this other article also… 3 tips for teaching the Half Lord of the Fishes (Ardha Matsyendrasana)",
    "teacherCues": "",
    "modifications": "Place blanket, folded mat or block under seat to help lift torso for twist Place block behind seat at base of spine to support back in twist and provide lift for stiff shoulders or arms Place blanket or folded mat to protect sore ankle or knee in the air In case of neck issues, keep head and neck in line with torso – look to side For knee injury, underneath leg remains straight, instead of bring elbow to outside of bent leg knee, hold shin just below knee cap of top leg to turn",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/half-lord-of-the-fishes/"
  },
  {
    "id": "churning-the-mill",
    "englishName": "Churning the Mill Pose",
    "sanskritName": "Chakki Chalanasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/churning-the-mill.png",
    "imageAlt": "Practitioner demonstrating Churning the Mill Pose (Chakki Chalanasana)",
    "shortFact": "Tones abdominal, back and arm muscles Helps relieve lower back pain Helps regulate menstrual cycle Elevates mood.",
    "benefits": "Tones abdominal, back and arm muscles Helps relieve lower back pain Helps regulate menstrual cycle Elevates mood",
    "steps": "Start in Staff pose and inhale. While exhaling move the feet away from each other while keeping the legs straight and the feet flexed. Inhale and clasp the hands out in front of the body with straight arms. Tighten abdominal muscles and maintain a straight back. Moving from the waist, angle the clasped hands over the right foot starting a circular rotation from the waist. Exhale and move the clasped hands forward and between the feet, leaning forward. Continue the movement to the left over the left foot. Inhale and continue circling the clasped hands back, while leaning back and toward the right foot. Exhale as the hands approach the right foot. Rotate 5-10 times, and then repeat in the other direction.",
    "teacherCues": "",
    "modifications": "If pregnant, keep rotations small and lead with the shoulders instead of the waist. Place a folded blanket under the knees for balance problems. Hold a block instead of clasping hands.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/churning-the-mill/"
  },
  {
    "id": "head-to-knee-forward-bend",
    "englishName": "Head to Knee Forward Bend Pose",
    "sanskritName": "Janu Sirsasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/head-to-knee-forward-bend.jpg",
    "imageAlt": "Practitioner demonstrating Head to Knee Forward Bend Pose (Janu Sirsasana)",
    "shortFact": "Stretches back and hamstrings Increases flexibility of hips Tones abdomen Massages internal organs of liver, pancreas, spleen, uro-genital system, kidneys Improves circulation to nerves and muscles of spine, back and pelvis.",
    "benefits": "Stretches back and hamstrings Increases flexibility of hips Tones abdomen Massages internal organs of liver, pancreas, spleen, uro-genital system, kidneys Improves circulation to nerves and muscles of spine, back and pelvis",
    "steps": "Begin in a seated pose with the legs extended. Bend the left leg, drawing the sole of the foot to the upper inside of the right thigh. The left knee should rest comfortably on the floor. Bring both hands to either side of the right leg. Inhale and turn towards the extended leg. Exhale and fold forward. Breathe slowly and deeply for five breaths. To come out of the pose, inhale back to the start position. Repeat the other side.",
    "teacherCues": "",
    "modifications": "Place blanket or folded mat under the seat to support lower back and even out the hips Place blanket or folded mat under the bent leg to support hips and knees which are off the ground or uncomfortable in this position Bring a strap around the foot of the extended leg to support forward fold and back extension Pregnancy yoga – use all of the above and if need place bolsters on top or either side of extended leg",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/head-to-knee-forward-bend/"
  },
  {
    "id": "squat",
    "englishName": "Prayer Squat Pose",
    "sanskritName": "Malasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/squat.jpg",
    "imageAlt": "Practitioner demonstrating Prayer Squat Pose (Malasana)",
    "shortFact": "Strengthens and tones thighs and hamstrings Improves strength and flexibility of shoulders, arms and knees Increases flexibility of hips Improves digestive complaints such as constipation and wind (gas).",
    "benefits": "Strengthens and tones thighs and hamstrings Improves strength and flexibility of shoulders, arms and knees Increases flexibility of hips Improves digestive complaints such as constipation and wind (gas)",
    "steps": "Beginning in Tall Mountain pose (Tadasana) The Pose – Step the feet out to shoulder width with the feet at a 45° angle (toes pointing out towards the edges of the mat). Slowly bend the knees coming down to a low squat with the knees wide. Bring the palms together in prayer pose (Anjali mudra). Inhale and press the elbows against the inside of the knees. Exhale and extend the arms between the legs releasing the neck and head towards the floor. On the inhale return the arms to prayer and repeat 3-5 times. To exit the pose, bring the hands in front of the feet. On the inhale bring your weight into the hands and arms. On the exhale slowly extend the legs to a forward bend. On the inhale roll all the way up – one vertebra at a time back to Tall Mountain.",
    "teacherCues": "",
    "modifications": "Students with tight hips or Achilles tendons may find their heel come off the ground in a squat. Placing blocks or a folded mat under heels helps to support this part of the foot and encouraging the tendons to release without strain. Opening the feet wider than hip width will also help to release tight hips and/or heels. Placement of blocks under the bottom as well as the feet can provide extra support to those new to this pose or in later stages of pregnancy.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/squat/"
  },
  {
    "id": "full-boat",
    "englishName": "Full Boat Pose",
    "sanskritName": "Navasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/full-boat.jpg",
    "imageAlt": "Practitioner demonstrating Full Boat Pose (Navasana)",
    "shortFact": "Deep strengthening of hip flexors Strengthens abdominals, back and legs Good for digestion as it stimulates the intestines.",
    "benefits": "Deep strengthening of hip flexors Strengthens abdominals, back and legs Good for digestion as it stimulates the intestines",
    "steps": "Sit with the knees bent, feet flat on the floor and legs together. Allow the upper body to straighten, engaging the muscles of the upper back and abdominals. Gently hinge the upper body back to balance on the back edge of the sitz bones. Use the abdominals to lift the feet up off the floor. Lift the shinbones until they are level with the floor and then extend the legs out to a 45-degree angle from the ground. Hold the position for a few breaths, up to a minute then gently bend the knees to return the feet to the floor.",
    "teacherCues": "",
    "modifications": "Keep the knees bent Touch toes lightly to the floor Use the palms on the ground in a low V behind the body to gently support the pose Rest the back of the head onto a wall Use a strap around the bottom of the feet and hold it with the hands to help straighten the legs",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/full-boat/"
  },
  {
    "id": "seated-forward-bend-yoga-pose",
    "englishName": "Seated Forward Bend Pose",
    "sanskritName": "Paschimottanasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/seated-forward-bend-yoga-pose.jpg",
    "imageAlt": "Practitioner demonstrating Seated Forward Bend Pose (Paschimottanasana)",
    "shortFact": "Stretches the entire back of the body- calves, hamstrings, back, neck Calms the nervous system Aids in Menstrual discomfort Beneficial for digestive organs Stimulates the kidneys.",
    "benefits": "Stretches the entire back of the body- calves, hamstrings, back, neck Calms the nervous system Aids in Menstrual discomfort Beneficial for digestive organs Stimulates the kidneys",
    "steps": "Begin Seated with both legs extended out in front of the body. Adjust the pelvis to bring equal weight into both sitting bones. Engage the muscles of the legs, actively pressing the back of the legs into the floor and pressing out through the heels. Inhale to sit up tall through the spine and lift the chest (it may be necessary to sit up on a folded blanket or block). Press the hands down into the ground on either side of the legs to find more length in the spine. Exhale and fold forward from the hips to stretch over the tops of the legs. Press the sitting bones and the top of the leg bones back. The arms can reach forward to hold the outside edges of the feet (or ankles, or shins, if the feet are not possible). Hold the posture for 1 minute to several minutes. To come out of the pose, inhale to lengthen and lift the spine, sliding the hands back.",
    "teacherCues": "",
    "modifications": "Sit on a block, cushion, bolster or folded blanket Roll a small blanket behind the back of the knees Perform with the back up against the wall Use a strap around the feet",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/seated-forward-bend-yoga-pose/"
  },
  {
    "id": "easy-sitting",
    "englishName": "Easy Sitting Pose",
    "sanskritName": "Sukhasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/easy-sitting.jpg",
    "imageAlt": "Practitioner demonstrating Easy Sitting Pose (Sukhasana)",
    "shortFact": "Strengthens the back Opens the hips and ankles A calming position to energetically centre.",
    "benefits": "Strengthens the back Opens the hips and ankles A calming position to energetically centre",
    "steps": "Start with a folded blanket or foam block to sit on. Sit at the front edge of the block and fold the legs into a comfortable cross-legged position. Allow the knees to open wide and let one foot rest in front of the other. Allow the upper legs and shins to form a small triangle of space in front of the body. Allow the weight to rest evenly in the sitz bones keeping the pelvis in a neutral position. Lengthen the spine up from the pelvis. Allow the ribcage to float on top of the pelvis and the head to align over the torso. There are several different options for the hands. The palms can be placed in the lap with one hand resting in the other- a mudra can be created by bringing the thumbs together to touch. Alternatively the hands can be placed on top of the knees wither with the palms down (a more grounding approach) or with the palms up- perhaps taking one of several mudras. This posture can be held for any length of time and is a comfortable position to work on meditation.",
    "teacherCues": "",
    "modifications": "Sit on a block, cushion or bolster Extend one leg (as mentioned in Contraindications)",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/easy-sitting/"
  },
  {
    "id": "cow-face",
    "englishName": "Cow Face Pose",
    "sanskritName": "Gomukhasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/cow-face.jpg",
    "imageAlt": "Practitioner demonstrating Cow Face Pose (Gomukhasana)",
    "shortFact": "Opens the hips- especially beneficial for tight IT band and gluteals.",
    "benefits": "Opens the hips- especially beneficial for tight IT band and gluteals. Opens the shoulders- especially targeting tight rotator cuff muscles. Opens chest and thighs Stretches the triceps",
    "steps": "Begin sitting in a cross-legged position or Easy Sitting Pose (Sukhasana). Bring the front leg on top of the bottom leg crossing the knees one on top of the other (note that the knees may not line up completely if the hips are tight). Ensure that both sitting bones are touching the ground (use a prop is necessary). The feet should be approximately the same distance from the hips on either side of the body. If the right knee is on top, stretch the left arm straight up toward the ceiling with the palm facing back, bend at the elbow to reach down between the shoulder blades. Reach the right arm out to the side of the body and again turn the palm to the back with the thumb facing down. Bend at the elbow and rotate from the shoulder to reach up between the shoulder blades. Clasp the fingers together if it’s available (or use a strap between the hands). Reach the top elbow towards the ceiling and then bottom elbow towards the floor to deepen the stretch. Lengthen up through the spine. Stay in the pose for 1-2 minutes and then repeat with the other leg on top and the opposite arm position.",
    "teacherCues": "",
    "modifications": "Sit on a block, cushion or bolster if the sitting bones don’t make it to the floor Prop under the ankles or knees to decrease any discomfort at these joints Use a strap between the hands if the fingers do not touch *this is very common and it’s a good idea to offer the strap before entering the pose",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/cow-face/"
  },
  {
    "id": "staff-pose",
    "englishName": "Staff Pose",
    "sanskritName": "Dandasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/staff-pose.jpg",
    "imageAlt": "Practitioner demonstrating Staff Pose (Dandasana)",
    "shortFact": "Lengthens the spine, and hamstrings Strengthens the back muscles, abdominals and quadriceps Very grounding and meditative pose A great place to practice engaging through the bandhas Safe for most students to practice.",
    "benefits": "Lengthens the spine, and hamstrings Strengthens the back muscles, abdominals and quadriceps Very grounding and meditative pose A great place to practice engaging through the bandhas Safe for most students to practice",
    "steps": "Start from a seated position with the legs extended out from the body. Flex the feet and energize the legs drawing up the quadriceps muscles and lifting the knee caps. The feet and knees should point up to the ceiling. Lengthen the spine by lifting up from the sitz bones and creating a neutral pelvis. Draw the entire spine into alignment, paying special attention to keeping the back of the neck lengthened and gently engaging the throat lock- jalandhara bandha. The arms reach down beside the body and the palms press down into the ground to create more lift through the spine.",
    "teacherCues": "",
    "modifications": "Sit on a block, cushion or bolster Roll a small blanket behind the back of the knees Perform with the back up against the wall or with a partner Place blocks underneath the hands if the palms do not reach the ground",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/staff-pose/"
  },
  {
    "id": "bound-angle-butterfly-baddha-konasana",
    "englishName": "Bound Angle Pose",
    "sanskritName": "Baddha Konasana",
    "difficulty": "intermediate",
    "category": "seated-twists",
    "categories": [
      "seated-twists"
    ],
    "image": "/poses/bound-angle-butterfly-baddha-konasana.jpg",
    "imageAlt": "Practitioner demonstrating Bound Angle Pose (Baddha Konasana)",
    "shortFact": "Targets the hips and adductors.",
    "benefits": "Targets the hips and adductors. While folding forward, targets the spine. Helpful for menstrual cramps, infertility, anxiety and stress, menopause, heart disease. Stimulates the internal organs, including: spleen, liver, kidneys and gall bladder. Prepares the body for seated meditation",
    "steps": "Seated, with the knees bent and the feet flat on the floor, slide the heels towards the pelvis. Bring the soles of the feet together allowing the knees to relax towards the ground. Hold the big toes with the middle and index finger, or conversely, place the palms on the ankles or shins. Keep the outside edge of the feet on the floor. To maintain alignment from the knee to the foot, avoid sickling the ankle joint. Lengthen the spine by drawing the hips, ribcage and shoulders into alignment. To deepen the posture, inhale to reach taller, and then exhale to fold forward from the hips.",
    "teacherCues": "",
    "modifications": "For stiff bodies, prop the hips with a cushion or block, allowing the pelvis to be neutral rather than in a posterior tilt. For pain in the knees, place a bolster underneath the knees or support each leg with cushions.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/bound-angle-butterfly-baddha-konasana/"
  },
  {
    "id": "legs-up-the-wall-pose",
    "englishName": "Legs Up The Wall Pose",
    "sanskritName": "Viparita Karani",
    "difficulty": "intermediate",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/legs-up-the-wall-pose.png",
    "imageAlt": "Practitioner demonstrating Legs Up The Wall Pose (Viparita Karani)",
    "shortFact": "Relieve back pain Gently stretches the backs of the legs and neck Calms the mind Relieves leg and foot cramps.",
    "benefits": "Relieve back pain Gently stretches the backs of the legs and neck Calms the mind Relieves leg and foot cramps",
    "steps": "Legs Up The Wall pose is a passive and supported version of Shoulderstand, utilizing bolsters or several folded blankets to create a support for the back. This passive pose allows for full relaxation and is an excellent aide in relieving back pains and insomnia. Begin seated with your support 6 inches away from the wall. Allow your right hip to rest close to the wall and with an exhale slowly swing the legs up the wall. Gently wedge your support beneath the back, moving it until you find the best positioning for your body. The low back should have a small arc that is not over pronounced. Soften the throat and surrounding muscles of the neck while allowing your gaze to be parallel to the ceiling. The legs should be extended up the wall with a softness to the muscles. Hold for anywhere from 5 to 15 minutes before slowly removing the support and coming to one side. Remain on one side for 2 minutes before getting up.",
    "teacherCues": "",
    "modifications": "Place a strap around the thighs just above the knees to act as a support and guide for the legs If pregnant, modify by placing your props in a T shap for support beneath your upper back allowing your hips to rest evenly on the ground. Being sure to keep your head and heart elevated above your hips.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/legs-up-the-wall-pose/"
  },
  {
    "id": "reclining-staff-pose",
    "englishName": "Reclining Staff Pose",
    "sanskritName": "Supta Dandasana",
    "difficulty": "intermediate",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/reclining-staff-pose.jpg",
    "imageAlt": "Practitioner demonstrating Reclining Staff Pose (Supta Dandasana)",
    "shortFact": "Strengthens core muscles Improves digestion Stretches and strengthens lower back Improves posture.",
    "benefits": "Strengthens core muscles Improves digestion Stretches and strengthens lower back Improves posture",
    "steps": "To enter Reclining Staff pose, lie on the floor with arms at the side and legs extended. Inhale, and while exhaling, press the lower back into the floor and slowly raise the feet while engaging the core muscles. Continue raising the feet until the legs are perpendicular to the floor. Lower the shoulders away from the ears and toward the floor as the palms are also pressed into the floor. Flex the feet and hold while breathing. To exit the pose, inhale and engage the core muscles. While exhaling, slowly lower the feet to the ground while keeping the legs straight. When the feet reach the floor, release the flexed position and core muscles.",
    "teacherCues": "",
    "modifications": "Perform this pose near a wall and use the wall as support while building core muscles. Rest the calves on a chair with bent knees and start in this position. Support the neck and lower back with blankets.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/reclining-staff-pose/"
  },
  {
    "id": "reverse-corpse-pose",
    "englishName": "Reverse Corpse Pose",
    "sanskritName": "Advasana",
    "difficulty": "intermediate",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/reverse-corpse-pose.jpg",
    "imageAlt": "Practitioner demonstrating Reverse Corpse Pose (Advasana)",
    "shortFact": "Relaxation of back Improves posture, alleviates pain for those with scoliosis and kyphosis Alleviates pain from slipped disc, stiff back or neck.",
    "benefits": "Relaxation of back Improves posture, alleviates pain for those with scoliosis and kyphosis Alleviates pain from slipped disc, stiff back or neck",
    "steps": "From child pose, stretch the legs back and lower to lying on the belly. Place the fore head on the ground. Extend both arms over the head. Rest the palms on the ground. Stretch the legs back, one at a time. Relax the whole body, breathing into the back chest. To exit the pose, push back to child.",
    "teacherCues": "",
    "modifications": "Place block under forehead Place blanket under chest",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/reverse-corpse-pose/"
  },
  {
    "id": "eye-of-the-needle",
    "englishName": "Eye of the Needle",
    "sanskritName": "Sucirandhrasana",
    "difficulty": "beginner",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/eye-of-the-needle.png",
    "imageAlt": "Practitioner demonstrating Eye of the Needle (Sucirandhrasana)",
    "shortFact": "Stretches and opens hips Stretches lower back Reduces back pain Stretches the iliotibial (IT) band.",
    "benefits": "Stretches and opens hips Stretches lower back Reduces back pain Stretches the iliotibial (IT) band",
    "steps": "To enter Eye of the Needle pose, lie on the back with the soles of the feet on the mat and the knees pointing to the sky. Press the lower back into the mat and lower the shoulders so they are relaxed and away from the ears. The arms are on the mat alongside the body. Lift the right leg and place the right ankle on the left thigh. Inhale and exhale here. Inhale again and when exhaling, lift the right leg, and bring the left knee toward the chest. Reach the right arm in between the legs and the left arm on the outside of the left leg and clasp the hands behind the thigh. Flex the feet and hold. To exit the pose, release the hands and slowly bring the left foot to the floor. Bring the right foot to the floor and return to the starting position. Repeat on the left side.",
    "teacherCues": "",
    "modifications": "For beginners with tight hips, keep one foot on the ground. Slightly press the knee of the leg that is crossed over, but stop if there is discomfort. Place a blanket under the head and neck if discomfort occurs. Use a strap around the thigh of the bottom leg.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/eye-of-the-needle/"
  },
  {
    "id": "reclining-spinal-twist",
    "englishName": "Reclining Spinal Twist",
    "sanskritName": "Supta Matsyendrasana",
    "difficulty": "intermediate",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/reclining-spinal-twist.jpg",
    "imageAlt": "Practitioner demonstrating Reclining Spinal Twist (Supta Matsyendrasana)",
    "shortFact": "Relaxes and lengthens the spine.",
    "benefits": "Relaxes and lengthens the spine. Stimulates and massages internal organs to stimulate proper functioning. Stretches the gluteal muscles.",
    "steps": "To enter Reclining Spinal Twist pose, lie on the floor in Corpse pose. Raise your knees so the soles of the feet are on the mat. Bring the knees into the chest and hold them with the hands. Inhale and extend the left leg so it is lying on the mat. Exhaling and guiding the right knee with the left hand, slowly bring the right knee toward the mat on the left side of the body. Extend the right arm out to the right side of the body and gently turn the head to gaze over the right fingertips. Strive to rest the right shoulder on the mat. After holding for the desired length of time, bring the right knee into the chest while centering on the spine. Raise the left knee so both knees are held by the hands. Extend the right leg and repeat the pose with the left knee. To exit the pose, center on the spine, bring both knees to the chest and then lower the feet to the mat.",
    "teacherCues": "",
    "modifications": "Place blankets under the shoulder of the extended arm and/or bent knee. Prop your bent knee and ankle with a block. Practice gently pulling the knee into the chest and then toward the opposite shoulder before twisting the torso.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/reclining-spinal-twist/"
  },
  {
    "id": "side-reclining-leg-lift",
    "englishName": "Side-Reclining Leg Lift",
    "sanskritName": "Anantasana",
    "difficulty": "advanced",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/side-reclining-leg-lift.jpg",
    "imageAlt": "Practitioner demonstrating Side-Reclining Leg Lift (Anantasana)",
    "shortFact": "Tones abdominals Stretches the side of the body Improves balance Promotes circulation in lower body.",
    "benefits": "Tones abdominals Stretches the side of the body Improves balance Promotes circulation in lower body",
    "steps": "To enter this pose, lie on the left side of the body and rest the head in the palm of the left hand. Flex the left foot and press the outside of it into the floor. Bring the right knee into the chest. Keeping the index and middle fingers of the right hand together, take hold of the big toe with the fingers and wrap the thumb around the same. Once balance is achieved in this position, straighten the right leg while holding on to the big toe. Keep the leg straight while maintaining a soft knee. Flex the right foot and gently pull on the big toe when exhaling. Bring awareness to the left side of the body to increase the grounding of the body. Hold for desired time and repeat on the right side. To exit Anantasana, bend the knee of the leg that is raised. Release the big toe and return the foot to rest on top of the other foot.",
    "teacherCues": "",
    "modifications": "Use a strap around the ball of the foot if it is difficult to reach the big toe while maintaining a straight leg. If it is difficult to balance, place a blanket or wedge alongside the back to support the body. Hold the leg under the knee and stretch toward the head while allowing the raised leg to bend. Press the sole of the bottom foot into a wall for added support.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/side-reclining-leg-lift/"
  },
  {
    "id": "happy-baby",
    "englishName": "Happy Baby Pose",
    "sanskritName": "Ananda Balasana",
    "difficulty": "advanced",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/happy-baby.jpg",
    "imageAlt": "Practitioner demonstrating Happy Baby Pose (Ananda Balasana)",
    "shortFact": "Stretches groin Releases tension from lower back Opens hips Helps lesson depression and emotional stress.",
    "benefits": "Stretches groin Releases tension from lower back Opens hips Helps lesson depression and emotional stress",
    "steps": "To begin Happy Baby, lie on the back and inhale. While exhaling, bring both knees in and hug them into the chest. Inhale here, and as you exhale, separate the knees and raise the feet so the soles of the feet are facing the ceiling. The ankles are directly above the knees and the shins are straight and perpendicular to the floor. Release the hands and reach them up through the middle of the legs while inhaling. Hold the outsides of the feet with the hands and exhale as the shoulders and tailbone are gently lowered toward the floor. Allow the weight of the arms to pull the thighs down and in toward the upper body. To exit Happy Baby pose, release the feet and bring the knees in, hugging them to the chest. Bring the feet to the floor.",
    "teacherCues": "",
    "modifications": "Use a strap for each foot if it is difficult to reach the feet. Place a blanket under the neck and shoulders to reduce strain on neck. Hold the legs under the knees.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/happy-baby/"
  },
  {
    "id": "reclining-hero",
    "englishName": "Reclining Hero Pose",
    "sanskritName": "Supta Virasana",
    "difficulty": "advanced",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/reclining-hero.jpg",
    "imageAlt": "Practitioner demonstrating Reclining Hero Pose (Supta Virasana)",
    "shortFact": "Stretches the spine, quadriceps, abdomen, hip flexors and knees.",
    "benefits": "Stretches the spine, quadriceps, abdomen, hip flexors and knees. Relief from menstruation discomfort Helps digestion function properly",
    "steps": "To enter this pose, start in Hero pose. Make sure the buttocks can touch the ground in Hero pose. If not, this pose is too advanced for the practitioner and her goal should first be to sit in Hero with the buttocks on the ground. While in Hero pose, inhale and on the exhale, reach the arms behind the buttocks and place them on the floor. Walk the arms out, bringing the upper torso down toward the floor. As the torso lowers toward the floor, accommodate stability by using the elbows and forearms. Once the back is lying on the floor, relax the head and neck and place them on the floor. Place the arms alongside the body with the palms facing upward. To exit this pose, turn the palms toward the floor and bend the elbows. Slowly lift your torso off of the floor using your hands and keeping your neck muscles engaged. End in Hero pose.",
    "teacherCues": "",
    "modifications": "If there is discomfort in the knees, lie back on several stacked blankets. Place a weighted object on the quadriceps to help open and release hips and groin. Use a strap to secure thighs if knees want to splay outward.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/reclining-hero/"
  },
  {
    "id": "knee-to-chest",
    "englishName": "Knee to Chest Pose",
    "sanskritName": "Brenda Hamlet Ryt 200",
    "difficulty": "intermediate",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/knee-to-chest.png",
    "imageAlt": "Practitioner demonstrating Knee to Chest Pose (Brenda Hamlet Ryt 200)",
    "shortFact": "Strengthens lower back muscles Improves flexibility of upper back and spine Massages abdomen and pelvic muscles Improves function of colon Remedy for painful wind and constipation Massages reproductive organs.",
    "benefits": "Strengthens lower back muscles Improves flexibility of upper back and spine Massages abdomen and pelvic muscles Improves function of colon Remedy for painful wind and constipation Massages reproductive organs",
    "steps": "Begin from corpse pose (savasana). On the inhale, bend the right knee and interlock the fingers below the knee. The left leg remains extended and on the mat/ground. On the exhale, roll the head and shoulders off the ground, bringing the nose towards the right knee. Hold for 1-3 breaths. On the inhale, roll the head and shoulders back to the start position and release the right leg. Repeat 3 times with the right leg and then three times with the left leg.",
    "teacherCues": "",
    "modifications": "Place blanket or folded mat under thighs or backs of knee to help legs extend Place blanket or folded mat under head and shoulders to help forward roll of back Keep head, shoulders and back in reclining start position to avoid any pressure on neck and upper back Press thighs to outside of belly and chest to avoid pressure on abdomen during first trimester pregnancy Place blanket under lower back during second trimester of pregnancy Lie on side during third trimester",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/knee-to-chest/"
  },
  {
    "id": "reclining-bound-angle",
    "englishName": "Reclining Bound Angle Pose",
    "sanskritName": "Supta Baddha Konasana",
    "difficulty": "intermediate",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/reclining-bound-angle.jpg",
    "imageAlt": "Practitioner demonstrating Reclining Bound Angle Pose (Supta Baddha Konasana)",
    "shortFact": "Stretches the inner thighs and groin area Relief from menstruation discomfort Helps improve mood.",
    "benefits": "Stretches the inner thighs and groin area Relief from menstruation discomfort Helps improve mood",
    "steps": "To enter Reclining Bound Angle, lie in the back with the soles of the feet on the mat and the knees pointing toward the sky. Place the heels as close to the groin as comfortably possible. Press the tailbone into the ground. While exhaling, open the knees and let them gently fall toward the floor using the hands on the outside of the thighs to support the motion. Bring the soles of the feet together and place the hands on the mat alongside the body with the palms facing upward. Relax the shoulders and keep them down and away from the ears. To exit this pose, use the hands on the outside of the thighs to gently lift the legs into their starting position. Place the feet hip width apart.",
    "teacherCues": "",
    "modifications": "If there is discomfort in the knees, place blocks under them. Place a folded blanket under the feet to ease discomfort. Use a strap around the balls of the feet to maintain form and closeness to groin.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/reclining-bound-angle/"
  },
  {
    "id": "reclining-big-toe",
    "englishName": "Reclining Big Toe",
    "sanskritName": "Supta Padangusthasana",
    "difficulty": "intermediate",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/reclining-big-toe.jpg",
    "imageAlt": "Practitioner demonstrating Reclining Big Toe (Supta Padangusthasana)",
    "shortFact": "Strengthen thighs and core muscles Opens the chest Improves sciatica and paralysis in the legs Improves blood circulation in the hip joints Relieve back pain Prevents hernia.",
    "benefits": "Strengthen thighs and core muscles Opens the chest Improves sciatica and paralysis in the legs Improves blood circulation in the hip joints Relieve back pain Prevents hernia",
    "steps": "This yoga posture is great for relieving low back pain, hamstring tension, and circulation in the legs and hips. Although the posture looks easy, students should take care not to use extreme force in moving the leg towards the chest, but expect to engage the hamstring and other muscles and joints.",
    "teacherCues": "",
    "modifications": "Use a strap around the raised foot to pull the leg closer Use a block to support the straight leg and rest the heel of the foot on Bend the opposite knee while pulling the straight leg closer Place a pillow or blanket under the student’s head Use two hands to hold the foot and gently pull the leg closer to the chest",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/reclining-big-toe/"
  },
  {
    "id": "legs-up-the-wall-pose-viparita-karani",
    "englishName": "Legs Up The Wall",
    "sanskritName": "Viparita Karani",
    "difficulty": "intermediate",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/legs-up-the-wall-pose-viparita-karani.png",
    "imageAlt": "Practitioner demonstrating Legs Up The Wall (Viparita Karani)",
    "shortFact": "Increases circulation by “reversing” gravity.",
    "benefits": "Increases circulation by “reversing” gravity. Relieves feet and legs. Can help improve or eliminate varicose veins. Stretches the backs of the legs. Relaxes the mind and body.",
    "steps": "Place the right hip next to the wall. Bend the knees toward the chest. On an exhale, using the elbows for support, begin to bring the lower back down to the floor and swing the legs up the wall. (Please note: Students can get into this pose by starting on the left hip as well.) Once the legs are up the wall, begin to slowly release the entire back down to the floor by straightening the elbows. Stay in this for as long as it is comfortable. Generally, 5 to 20 minutes works well. When ready to come out of this pose, bend the knees toward the chest and roll over to one side.",
    "teacherCues": "",
    "modifications": "If there is a significant amount of space between the straight legs and the wall, the teacher should stack 3-4 bolsters behind the straight legs to “remove” the space. This way, the student can fully relax in this pose without fear of hyper-extending the knees.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/legs-up-the-wall-pose-viparita-karani/"
  },
  {
    "id": "corpse-pose-savasana",
    "englishName": "Corpse Pose",
    "sanskritName": "Savasana",
    "difficulty": "intermediate",
    "category": "reclining",
    "categories": [
      "reclining"
    ],
    "image": "/poses/corpse-pose-savasana.jpg",
    "imageAlt": "Practitioner demonstrating Corpse Pose (Savasana)",
    "shortFact": "Stress release and deep relaxation.",
    "benefits": "Stress release and deep relaxation. Calms the nervous system. Beneficial for insomnia, headaches, pain relief. Helps to lower high blood pressure.",
    "steps": "Come to lie on the back with the legs open and the arms releasing at the sides. Carefully lift the pelvis slightly to tuck the tailbone down. For those with tight hip flexors or hyper-lordosis, placing a bolster under the knees will help to make this adjustment. Next, rock the upper body slightly to allow the shoulders blades to tuck in and down, releasing the front of the chest. In doing this the arms should relax to the appropriate distance at the sides of the body. Turn the palms up. Lengthen through the back of the neck, relaxing the back of the head into the ground beneath you. Some students may need a pillow behind the head to allow the neck to release. Begin to scan the body for gripping and tension. Allow tension to melt from the body, releasing the jaw, the inner ears, the nose. Relax the eyes and forehead, allowing the eyes to sink to the back of the head. Release control of the breath. Allow the breath to breathe you. It is recommended that for every half hour of Asana practice, 5 minutes of Savasana is allotted. This may also vary depending on the intensity of the class and the attention span of the students. It is very important not to skip this posture. To come out, first, softly waken up the body. Deepen the breath and begin to bring life to the limbs. Roll over to the right side of the body (to avoid putting pressure on the heart). Take a few breaths here. When you are ready, use the top arm to press yourself up.",
    "teacherCues": "",
    "modifications": "Lift the hands, only come up to a place where you can support your spine without pushing. Cobra Push Up: Extend the arms in front of the body, slightly wider than the shoulders. As you inhale, slide the palms along the floor to lift the chest. On the exhalation, allow the palms to slide forward releasing back onto the chest.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/corpse-pose-savasana/"
  },
  {
    "id": "revolved-downward-dog-pose",
    "englishName": "Revolved Downward Dog Pose",
    "sanskritName": "Parivrtta Adho Mukha Svanasana",
    "difficulty": "advanced",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/revolved-downward-dog-pose.png",
    "imageAlt": "Practitioner demonstrating Revolved Downward Dog Pose (Parivrtta Adho Mukha Svanasana)",
    "shortFact": "Full Body Stretch Deepened Hamstring stretch Digestion aide Strengthens arms Relieves back pain.",
    "benefits": "Full Body Stretch Deepened Hamstring stretch Digestion aide Strengthens arms Relieves back pain",
    "steps": "Revolved Downward Dog is a twisting variation of the commonly practised Downward Facing Dog Pose. Allowing for a deeper stretch to the hamstrings and the added bonus of building full-body coordination. This pose is equal parts challenging and invigorating. Begin in Downward Dog. Inhale to lift your right hand away from the mat. Reach underneath the torso towards your left thigh. If you can place your right hand on the outside of your left foot. If that is not an accessible reach, allow the hand to rest on the outside of the shin or thigh. Slowly turn to look at your left arm keeping a gentle gaze. Hold for 30 seconds before slowly returning to Downward Dog and switching sides.",
    "teacherCues": "",
    "modifications": "Practice with a lifted leg to add a degree of difficulty to the twist by lifting the leg that is opposite your twisting hand. Example: if your right hand is resting outside of your left foot, lift the left leg.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/revolved-downward-dog-pose/"
  },
  {
    "id": "unsupported-shoulderstand",
    "englishName": "Unsupported Shoulderstand",
    "sanskritName": "Niralamba Sarvangasana",
    "difficulty": "intermediate",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/unsupported-shoulderstand.png",
    "imageAlt": "Practitioner demonstrating Unsupported Shoulderstand (Niralamba Sarvangasana)",
    "shortFact": "Stretches the back and neck Strengthens and tones legs and back Relieves mild depression and insomnia Stimulates thyroid, prostrate and abdominal organs Improves digestion.",
    "benefits": "Stretches the back and neck Strengthens and tones legs and back Relieves mild depression and insomnia Stimulates thyroid, prostrate and abdominal organs Improves digestion",
    "steps": "Unsupported Shoulderstand is an inverted balance pose, in which the body is suspended in air. While supported shoulder stand poses use the hands and/or blocks to scaffold the body, unsupported shoulder stand relies on a triangular base made by the back of the head and two shoulder points. But, that is only one of the reasons why unsupported shoulder pose is sometimes called the ‘mother’ of all poses. Unsupported shoulder stand is known for its many therapeutic benefits including stimulating the thyroid, metabolism and digestive, balancing the nervous system and relieving stress, insomnia and asthma. Unsupported Shoulderstand dates back to the 15 th century Yoga Handbook, the Hatha Pradipika and is one of the 12 foundation poses of Hatha yoga. From savasana (reclining pose). Inhale, contract the abdominal muscles and raise the legs perpendicular to the floor. Exhale; lift hips off the floor, bringing the feet above the head. Press the back of arms and palms into the floor and stretch up through the core muscles, straightening the spine and bringing shoulders, hips and feet into one line. Raise one arm and then the other vertical, along the sides of the body. Breathe normally and gaze upwards to toes. To exit the pose, lower the arms to the floor. Inhale and bend at the waist, lowering the legs over the head. On the exhale, slowly lower hips, lower, middle, then upper back to floor, vertebrae by vertebra until the body is fully reclining and back to start position.",
    "teacherCues": "",
    "modifications": "Legs-up-the-wall (Viparita Karani) Supported shoulder stand (with blanket under shoulders and hand supporting back) Half shoulder stand (rest feet on chair or pike) Bend knees and rest feet on wall Plow pose (feet over head to block or floor)",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/unsupported-shoulderstand/"
  },
  {
    "id": "tripod-headstand",
    "englishName": "Tripod Headstand",
    "sanskritName": "Sirshasana Ii",
    "difficulty": "advanced",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/tripod-headstand.png",
    "imageAlt": "Practitioner demonstrating Tripod Headstand (Sirshasana Ii)",
    "shortFact": "Strengthens arms and shoulders Builds core strength Stretches and stretches leg muscles Improves balance Relieves mild anxiety and depression Improves blood flow to brain enhancing mental acuity Stimulates pineal and pituitary glands.",
    "benefits": "Strengthens arms and shoulders Builds core strength Stretches and stretches leg muscles Improves balance Relieves mild anxiety and depression Improves blood flow to brain enhancing mental acuity Stimulates pineal and pituitary glands",
    "steps": "Tripod Headstand is a triple play pose, combining an inversion, balance and arm balance all in one. That makes it a tricky pose for some, but Tripod Handstand is worth the effort as it is a building block pose to advanced inversions and Ashtanga 3 rd Series. To prepare for Tripod Headstand begin with shoulder strengthening poses such as chataranga, plank and dolphin. Once you have mastered these poses, you are ready to try Tripod headstand. Begin from hands and knees pose, with both hands, shoulder width apart. Bend the elbows 90°, elbow over wrist and upper arms are parallel to the ground. Place the crown of the head onto the mat, making a triangle with the head and hands. Curl the toes, lift the knees to straighten the legs and raise the hips as for dolphin. Slowly walk the feet towards the head. . When the hips are over the shoulders, slowly raise one foot vertical and then the other. Ground the palms, lift up through the shoulders and core, straighten the spine and stretch up through the inner heels of the feet with toes touching. To exit the pose, lower one foot and then the other to the ground. Bend the knees and return to start position or child pose.",
    "teacherCues": "",
    "modifications": "Dolphin (keep toes on floor) Place blocks, chairs or headstand stool under shoulders Place knees on upper arms",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/tripod-headstand/"
  },
  {
    "id": "one-legged-downward-facing-dog",
    "englishName": "One legged downward facing dog",
    "sanskritName": "Eka Pada Adho Mukha Svanasana",
    "difficulty": "intermediate",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/one-legged-downward-facing-dog.png",
    "imageAlt": "Practitioner demonstrating One legged downward facing dog (Eka Pada Adho Mukha Svanasana)",
    "shortFact": "Strengthens the legs, arms and shoulders Improves balance and coordination Strengthens and tones the back and hips Stimulates circulations Opens the upper back (between shoulder blades).",
    "benefits": "Strengthens the legs, arms and shoulders Improves balance and coordination Strengthens and tones the back and hips Stimulates circulations Opens the upper back (between shoulder blades)",
    "steps": "One legged downward facing dog pose is a fun-tastic preparatory posture for handstand, headstand and standing splits as it strengthens the hamstrings and hip flexors. One legged downward facing dog, sometimes known as Balanced Dog or Three Legged Dog extends the benefits of the original standard pose as the challenge is to find alignment and stability in an asymmetrical position. Begin from active child. Tuck the toes, press the chest towards the thighs and lift the hips, coming into downward facing dog pose. Press the ground away with the hands. Lift the right foot off the ground stretching out through the heel.",
    "teacherCues": "",
    "modifications": "Place extend foot against a wall Place wedge or blanket under heel Place strap around arms",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/one-legged-downward-facing-dog/"
  },
  {
    "id": "knee-ear-pose",
    "englishName": "Knee ear pose",
    "sanskritName": "Karnapidasana",
    "difficulty": "intermediate",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/knee-ear-pose.png",
    "imageAlt": "Practitioner demonstrating Knee ear pose (Karnapidasana)",
    "shortFact": "Full extension and stretch of spine Improves flexibility of shoulders and neck Strengthens back and abdominal muscles Massages internal organs, improving circulatory, liver and kidney function.",
    "benefits": "Full extension and stretch of spine Improves flexibility of shoulders and neck Strengthens back and abdominal muscles Massages internal organs, improving circulatory, liver and kidney function",
    "steps": "Knee to ear pose is an advancement of halasana (plough) pose. It is an intermediate inversion and practiced with the knees bent to fully extend the spine as well as stretching the neck and hips. Knee ear pose is also known as ear pressure pose for its benefits to blocked sinuses and ears. This pose is known as Karnapidasana in Sanskrit. From savasana with the hands, palms down by the sides. Press the palms into the floor and using the abdominal muscles raise the legs slowly over the head. Bring the toes to the floor behind the head. Turn the palms upward and place the hands behind the ribcage to support the back. Bend the knees and hold for as long as comfortable. Return to the start position by straightening one leg, then the other. Bring the palms back to sides, palms pressing down. Using the abdominals, slowly roll down one vertebra at a time, buttocks, then legs, returning to savasana.",
    "teacherCues": "",
    "modifications": "Place feet on chair or wall Place blocks or blankets under thighs, knees, upper body and neck",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/knee-ear-pose/"
  },
  {
    "id": "chin-stand",
    "englishName": "Chin Stand",
    "sanskritName": "Ganda Bherudasana",
    "difficulty": "advanced",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/chin-stand.png",
    "imageAlt": "Practitioner demonstrating Chin Stand (Ganda Bherudasana)",
    "shortFact": "Strengthens back, hips, pelvis and legs Stretches and tones spinal nerves Improves flexibility of back Improves balance.",
    "benefits": "Strengthens back, hips, pelvis and legs Stretches and tones spinal nerves Improves flexibility of back Improves balance",
    "steps": "Chin Stand is the rock star of yoga poses. Similar to elbow stand, chin stand combines an inversion with a backbend. This is an advanced pose, that requires a strong and flexible back. Suggested preparatory poses include chin-chest-knees, camel and bow. To enter the pose, begin in Downward facing Dog. Roll forward to plank. Bend the elbows and roll forward to chin-chest-knees. The chin, shoulders and chest should be in contact with the mat. Curl the toes of the left and grip the mat. Lift the right leg upwards. Bend the left leg up and support the right leg with left foot, pushing it higher. When ready, lift the left leg to meet the right. Stretch legs upward, rotating the inner thighs towards each other and squeeze. To exit the pose, reverse the steps. Release left knee to floor and rest the leg on top, before lowering right knee to floor. Push back to Downward Facing Dog or child pose.",
    "teacherCues": "",
    "modifications": "Place block under chest. Place blocks under shoulders. Practice near to a wall, walk feet up the wall to raise legs.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/chin-stand/"
  },
  {
    "id": "shoulderstand",
    "englishName": "Shoulderstand",
    "sanskritName": "Sarvangasana",
    "difficulty": "intermediate",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/shoulderstand.png",
    "imageAlt": "Practitioner demonstrating Shoulderstand (Sarvangasana)",
    "shortFact": "Stimulates the thyroid gland Improves circulatory, respiratory, reproductive, nervous and endocrine systems Calms the nervous system Boosts the immune system Stimulates parathyroid, stimulating bone growth Strengthens and tones abdominals, legs and back muscles Relieves pressure from hemorrhoids Improves flexibility of neck and upper spine.",
    "benefits": "Stimulates the thyroid gland Improves circulatory, respiratory, reproductive, nervous and endocrine systems Calms the nervous system Boosts the immune system Stimulates parathyroid, stimulating bone growth Strengthens and tones abdominals, legs and back muscles Relieves pressure from hemorrhoids Improves flexibility of neck and upper spine",
    "steps": "Begin in savasana, reclining on the back. Engage the abdominal muscles and raise the legs vertical, peeling the back away from the floor to bring the hips over the shoulders. Place the hands on either side of the waist below the rib cage and lift up through the torso, pointing the toes.To exit the pose, bring the toes to the ground behind the head (plough pose) and roll slowly down to start pose.",
    "teacherCues": "",
    "modifications": "Prep pose (back flat on ground, legs raised vertical) ½ Shoulder stand (Legs raised 45°) Legs up the wall Chair style (lay with lower legs across chair, hand holding chair legs. Hold there or lift hips up to seat and lean legs on chair back)",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/shoulderstand/"
  },
  {
    "id": "revolved-downward-facing-dog",
    "englishName": "Revolved Downward Facing Dog",
    "sanskritName": "Parivrtta Adho Mukha Svanasana",
    "difficulty": "intermediate",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/revolved-downward-facing-dog.png",
    "imageAlt": "Practitioner demonstrating Revolved Downward Facing Dog (Parivrtta Adho Mukha Svanasana)",
    "shortFact": "Energises and relieves fatigue in the legs Strengthens and improves flexibility of ankles Stretches Achilles tendon, calves and leg muscles Stimulates circulation and strengthens back, arms and shoulders Improves respiratory ailments such as asthma Massages internal organs and improves digestion.",
    "benefits": "Energises and relieves fatigue in the legs Strengthens and improves flexibility of ankles Stretches Achilles tendon, calves and leg muscles Stimulates circulation and strengthens back, arms and shoulders Improves respiratory ailments such as asthma Massages internal organs and improves digestion",
    "steps": "Begin in downward facing dog. Reach the right hand under and across the body to hold left ankle. Turn the chest and eye gaze upwards. Hold five breathes. To exit the pose, return to downward facing dog. Repeat the other side.",
    "teacherCues": "",
    "modifications": "Use straps to hold thigh or ankle Practice on knees and or forearms",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/revolved-downward-facing-dog/"
  },
  {
    "id": "plough-pose",
    "englishName": "Plough pose",
    "sanskritName": "Halasana",
    "difficulty": "intermediate",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/plough-pose.png",
    "imageAlt": "Practitioner demonstrating Plough pose (Halasana)",
    "shortFact": "Strong stretch to the back Massages abdominal muscles and internal organs Stimulates digestion, spleen, suprarenal glands Improves function of pancreas, liver and kidney Tones abdominals, legs and spinal nerves Relieves back tension and/or spasms Improves spinal flexibility Stimulate metabolism Regulates thyroid.",
    "benefits": "Strong stretch to the back Massages abdominal muscles and internal organs Stimulates digestion, spleen, suprarenal glands Improves function of pancreas, liver and kidney Tones abdominals, legs and spinal nerves Relieves back tension and/or spasms Improves spinal flexibility Stimulate metabolism Regulates thyroid",
    "steps": "Begin in Savasana with legs together and arms beside the body. The hands will lay flat with the palms pressing down. Raise the legs vertical and peel the back away from the ground, bringing the hips over the shoulders and the toes behind the head. Place the hands on either side waist just under the rib cage. To exit the pose, bring the hands flat to the ground and slowly lower the back vertebrae by vertebrae back to start pose – Savasana.",
    "teacherCues": "",
    "modifications": "For tight back or shoulders bring the toes onto wall, blocks or chair For weak backs place blanket, bolster or block under hips For tight hamstrings bend knees and place near to ears",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/plough-pose/"
  },
  {
    "id": "hand-stand",
    "englishName": "Handstand",
    "sanskritName": "Adho Mukha Vrksasana",
    "difficulty": "beginner",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/hand-stand.png",
    "imageAlt": "Practitioner demonstrating Handstand (Adho Mukha Vrksasana)",
    "shortFact": "Strengthens wrists, arms, shoulders.",
    "benefits": "Strengthens wrists, arms, shoulders. Stretches the belly. Improves balance. Balances the nervous system. Relieves mild depression and anxiety",
    "steps": "Begin in downward facing dog (Adho Mukha Svanasana). Walk the feet towards the hands. Bend the left knee and use the left foot as a springboard to swing the right leg up over the hips and shoulders. Then extend the left leg straight up. Lift up through the arms, shoulders, torso and legs. To come out of the pose, lower one leg and then the other to the ground. Return to downward facing dog. Repeat on the other side using the right leg as a spring.",
    "teacherCues": "",
    "modifications": "For beginners it is advisable to practice against a wall. For intermediates, students might practice with a partner to stand behind and hold (but never hauls up) the swing leg and then the other.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/hand-stand/"
  },
  {
    "id": "headstand",
    "englishName": "Headstand",
    "sanskritName": "Sirsasana",
    "difficulty": "beginner",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/headstand.png",
    "imageAlt": "Practitioner demonstrating Headstand (Sirsasana)",
    "shortFact": "Strengthens arms , shoulders and neck Improves breathing Relieves leg and back pain Strengthens core muscles Relieves fatigue, insomnia, stress and mild depression Improves nervous system Improves balance.",
    "benefits": "Strengthens arms , shoulders and neck Improves breathing Relieves leg and back pain Strengthens core muscles Relieves fatigue, insomnia, stress and mild depression Improves nervous system Improves balance",
    "steps": "Begin in vajrasana (seat to heels). Bring the fore arms down to the ground. Interlock the fingers and cup the hands together in a V shape to support the head. Place the crown of the head between the thumb mounds. Straighten the legs and walk the feet towards the head until the hips are over the shoulders. Now extend one leg straight up and then the other. Lift up through the torso and legs. To come down, lower one leg and then the other to the ground. Bend the knees and sit back into child pose.",
    "teacherCues": "",
    "modifications": "Dolphin or Puppy are both beginner poses which provide entry into head stand once the shoulders and core are strong enough to support the weight of the body. Students might begin in down dog or on all fours and then proceed as above but keeping the feet on the ground. This is a good alternative for pregnancy yoga. Practicing headstand against a wall will help students to ease into this pose and fine tune their balance and alignment. Place the interlocked fingers against the wall to support the wrists. Walk the feet towards the head until the hips touch the wall. Then try to extend one leg and then the other against the wall. Head stand with knees bent – Begin with the placement of head and arms as detailed above. Slowly walk both feet towards the head until the hips are over the shoulders. Contract the back muscles and engage the abdominals. Slowly lift both feet off the ground, bringing the knees to a vertical position. Slowly straighten over the shoulders. Bring the knees over the shoulders with lower legs behind and parallel to the floor. The feet may be brought to rest against a wall. Place a blanket under the head to ease any discomfort on the skull Place a strap securely around the upper arms to hold them in alignment under the shoulders",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/headstand/"
  },
  {
    "id": "downward-facing-dog",
    "englishName": "Downward Facing Dog",
    "sanskritName": "Adho Mukha Svanasana",
    "difficulty": "intermediate",
    "category": "inversions",
    "categories": [
      "inversions"
    ],
    "image": "/poses/downward-facing-dog.png",
    "imageAlt": "Practitioner demonstrating Downward Facing Dog (Adho Mukha Svanasana)",
    "shortFact": "Stretches hamstrings, calves, shoulders, and chest.",
    "benefits": "Stretches hamstrings, calves, shoulders, and chest. Strengthens upper back, core, arms, legs, hands and feet. Stimulates the body and helps calm the mind. Good for digestion Strengthens bones",
    "steps": "Start on hands and knees, lining the knees up underneath the hips and the hands just slightly forward from the shoulders. The index fingers should face towards the front of the mat. Tuck the toes under and lift the pelvis up and back to make an upside down V with the body. The heels may or may not touch the floor. Turn the pelvis s the sitz bones lift up towards the ceiling and the lower spine becomes neutral. Draw the shoulders away from the ears and keep the head in alignment with the spine. Spiral the arms onto the body by turning the eye of the elbow or inner part of the elbow forward. (See the Technical comments for more details into the pose) This posture can be held for a minute or two and is used throughout Sun Salutations (Surya Namaskar).",
    "teacherCues": "",
    "modifications": "For wrist problems and tightness in the shoulders try rolling the front edge of the mat or use a blanket to elevate the wrists and decrease the angle into the hands. Perform Dolphin Pose, coming onto forearms",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/downward-facing-dog/"
  },
  {
    "id": "four-limbed-staff",
    "englishName": "Four Limbed Staff Pose",
    "sanskritName": "Chaturanga Dandasana",
    "difficulty": "intermediate",
    "category": "inversions",
    "categories": [
      "inversions",
      "arm-balances"
    ],
    "image": "/poses/four-limbed-staff.png",
    "imageAlt": "Practitioner demonstrating Four Limbed Staff Pose (Chaturanga Dandasana)",
    "shortFact": "strengthens core develops upper body strength, including triceps, upper back, chest, wrist and hands generates heat in the body powerful and invigorating.",
    "benefits": "strengthens core develops upper body strength, including triceps, upper back, chest, wrist and hands generates heat in the body powerful and invigorating",
    "steps": "From plank position, ensure that the hands are lined up with the shoulders and just slightly wider than the chest. The heels and toes will line up with each other. Rock forward on the toes and begin to been the elbows. The elbows and wrists will stack and the upper arm bone becomes parallel with the ground, the elbows tucked in towards the body. Keep the whole body firm. This posture can held on its own or used flowing through sun salutations. To come out, slowly lower to the ground, or press up strongly back to plank pose, or slide the chest forward to press into Upward Facing Dog. This poster is very challenging and for most students a modification will be required",
    "teacherCues": "",
    "modifications": "perform with knees on the floor don’t go down as far",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/four-limbed-staff/"
  },
  {
    "id": "half-moon-pose-variation",
    "englishName": "Half Moon Pose Variation",
    "sanskritName": "Ardha Chandrasana Chapasana",
    "difficulty": "intermediate",
    "category": "forward-bends",
    "categories": [
      "forward-bends"
    ],
    "image": "/poses/half-moon-pose-variation.png",
    "imageAlt": "Practitioner demonstrating Half Moon Pose Variation (Ardha Chandrasana Chapasana)",
    "shortFact": "Strengths feet and legs, especially quadriceps Open the hips Lengthens the spine Massages internal organs with the twist Improves balance and coordination.",
    "benefits": "Strengths feet and legs, especially quadriceps Open the hips Lengthens the spine Massages internal organs with the twist Improves balance and coordination",
    "steps": "Half Moon Pose Variation is known by many different names because it has some much going on in one pose. Half Moon Pose Variation in essence is a one-legged standing balance with a back bend and leg hold similar to dancer. For that reason, it is sometimes called Half Moon Bow or Sugar Cane because of its shape. Half Moon Pose Variation by any name, still gives the sweetest of stretches to both psoas and hips, while opening the heart. Begin in Tall Mountain with toes touching. Forward fold, placing your right fingers to the right of the right foot. Open your hips and torso to the left and extend your left leg. Raise the left arm upward. Bend the left leg, foot towards the hip. Reach back with the left arm to hold the front of the left foot. Keep rotating the chest and heart out and up, keeping the gaze to the right toes. When you have balance, look upwards. To exit the pose, return the gaze to right foot, release the foot hold, bring both hands to front of mat and lower left foot down. Rise up to Tall Mountain. Repeat other side.",
    "teacherCues": "",
    "modifications": "Practice with hand on block Hold foot with strap Practice holding onto back of chair",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/half-moon-pose-variation/"
  },
  {
    "id": "firefly-pose-variation-c",
    "englishName": "Firefly Pose Variation C",
    "sanskritName": "Titibhasana C",
    "difficulty": "advanced",
    "category": "forward-bends",
    "categories": [
      "forward-bends"
    ],
    "image": "/poses/firefly-pose-variation-c.png",
    "imageAlt": "Practitioner demonstrating Firefly Pose Variation C (Titibhasana C)",
    "shortFact": "Energises and revitalises mind and body Improves focus, coordination and balance Strengthens legs and shoulders Stimulation of the pancreas Opens hip joints Stretches hips, hamstrings and back muscles Massages spinal nerves.",
    "benefits": "Energises and revitalises mind and body Improves focus, coordination and balance Strengthens legs and shoulders Stimulation of the pancreas Opens hip joints Stretches hips, hamstrings and back muscles Massages spinal nerves",
    "steps": "Firefly Pose Variation C is practiced as part of a fun and flowing sequence practiced the Ashtanga Yoga 2nd series and advanced Vinyasa- Inspired Ashtanga or Power Flow Yoga. Firefly Pose Variation C is the middle part of a flowing transition from firefly pose A to B to C to D. Firefly C is an inverted pose that combines a forward bend with a bind. A more fundamental Hatha pose Utthita Janu Sirasana (standing head between knees pose) may be used as a prep pose or substitution for Firefly C . From Firefly A lower your feet to the ground. This movement will bring your tail up and head down, as in a standing forward bend. Slowly straighten legs, keeping knees soft, and shoulders behind the thighs. Move to Firefly B, by wrapping one arm and then the other around the back of thighs. The fingertips should be touching in the center of the back, finger tips touching. Walk the feet to the edge of the mat. Fold deeper and clasp hands. To enter Firefly C, keep the knees soft in a micro bend and fold deeper. Clasp the hands together and walk the feet mat-width apart. Eye gaze is behind you, towards back of the room. To take the pose further into Firefly D, fold deeper. Slowly bring the upper body through the legs, eye gaze upward. To exit the pose, reverse all the movements. Lower the gaze, head, and upper body back to standing forward bend. Release the arm bind, bringing the hands to floor behind the thighs. Return to Firefly A and jump back to Chaturanga or release into squat and transition to next pose.",
    "teacherCues": "",
    "modifications": "Standing head between knees pose Place head on block in final position to support neck Use strap to help bind Sit on chair and fold forward, holding chair legs",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/firefly-pose-variation-c/"
  },
  {
    "id": "half-bound-lotus-seated-forward-extension",
    "englishName": "Half Bound Lotus Seated Forward Extension",
    "sanskritName": "Ardha Baddha Padma Paschimottanasana",
    "difficulty": "intermediate",
    "category": "forward-bends",
    "categories": [
      "forward-bends"
    ],
    "image": "/poses/half-bound-lotus-seated-forward-extension.png",
    "imageAlt": "Practitioner demonstrating Half Bound Lotus Seated Forward Extension (Ardha Baddha Padma Paschimottanasana)",
    "shortFact": "Improves flexibility and reduces stiffness in knees Improves flexibility in shoulders, hips and ankles Stretches and strengthens back and spine Strengthens quadriceps Stretches hamstrings Massages internal organs Relaxes the nervous system Calms the mind Prepares the body for meditation.",
    "benefits": "Improves flexibility and reduces stiffness in knees Improves flexibility in shoulders, hips and ankles Stretches and strengthens back and spine Strengthens quadriceps Stretches hamstrings Massages internal organs Relaxes the nervous system Calms the mind Prepares the body for meditation",
    "steps": "Half Bound Lotus Seated Forward Extension is one in a series of poses called pre-meditation asanas. These poses prepare the body to sit upright in stillness for long periods of time. Sitting with legs crossed or in lotus position is the preferred pose for meditation. Half Bound Lotus Seated Forward Extension is particularly useful for improving flexibility of the hip, knee and ankle joints and strengthening the back and spine muscles, all necessary for seated meditations. From staff pose, bend the right leg. Hold knee with right hand and cradle foot with left hand. Lay the right foot onto the upper left thigh, drawing the heel near to the hip crease. Extend and stretch the right arm towards the toes, then wrap it back around the waist. Clasp two fingers around the big toe. To fold forward, maintain a straight spine, stretching head crown and sternum towards left foot. Extend the left arm, to hold left foot with two fingers. Hinge at the hips and fold over the left leg. Relax the entire body. Gently release nose to knee. To exit the pose, release hand hold and bind. Place the hands, palms down by sides. Gently hinge upwards to staff pose. Repeat other side.",
    "teacherCues": "",
    "modifications": "Cross leg over thigh (just above knee) Place blanket under hips and/or block under bent leg knee Use strap to hold foot and bind Use strap to hold extended foot Remain in seated half lotus",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/half-bound-lotus-seated-forward-extension/"
  },
  {
    "id": "pose-dedicated-to-the-sage-marichi-i",
    "englishName": "Pose Dedicated to the Sage Marichi I",
    "sanskritName": "Marichyasana a",
    "difficulty": "advanced",
    "category": "forward-bends",
    "categories": [
      "forward-bends"
    ],
    "image": "/poses/pose-dedicated-to-the-sage-marichi-i.png",
    "imageAlt": "Practitioner demonstrating Pose Dedicated to the Sage Marichi I (Marichyasana a)",
    "shortFact": "Stretches and strengthens spine Stimulates spinal nerves and improves circulation to back muscles Tones and massages internal organs, stimulates liver and kidney function Stretches hamstrings Improves flexibility of shoulders, hips and wrists Calms the mind.",
    "benefits": "Stretches and strengthens spine Stimulates spinal nerves and improves circulation to back muscles Tones and massages internal organs, stimulates liver and kidney function Stretches hamstrings Improves flexibility of shoulders, hips and wrists Calms the mind",
    "steps": "Pose Dedicated to the Sage Marichi I is a seated forward bend with a bind. The pose is named after Sage Marichi was one of the 10 original ‘wise men’ of yoga. Marichi means ray of light (sun or moon). There are four variations of Marichi (A B C D) included in the Ashtanga Primary series and twice as many as that in the advanced series. Begin from staff pose with the legs extended (dandasana). Bend the left leg and place the foot sole flat on the ground. Place the right hand, palm down next to the right hip. Raise the left arm, fingers to sky. Stretch the crown and sternum forward as you fold down, bringing the left arm to the inside of the knee. Keep stretching the left arm forward, until the arm pit makes contact with the shin. Wrap the arm back around the leg. Bring the right arm around the back waist and clasp hand to wrist. Extend the head crown and sternum forward, and then fold over the right leg, nose to knee. To exit the pose, release the arm bind. Place both palms on either side of the hips. Unfold and return to staff pose. Repeat other side",
    "teacherCues": "",
    "modifications": "Sit on block Place blanket or wedge under rolling hip Use strap to bind arms",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/pose-dedicated-to-the-sage-marichi-i/"
  },
  {
    "id": "standing-forward-bend",
    "englishName": "Standing Forward Bend",
    "sanskritName": "Uttanasana",
    "difficulty": "intermediate",
    "category": "forward-bends",
    "categories": [
      "forward-bends"
    ],
    "image": "/poses/standing-forward-bend.png",
    "imageAlt": "Practitioner demonstrating Standing Forward Bend (Uttanasana)",
    "shortFact": "Stretches hamstrings Aids digestion Relieves stress Reduces headaches.",
    "benefits": "Stretches hamstrings Aids digestion Relieves stress Reduces headaches",
    "steps": "Starting in Mountain pose, place the hands on the hips. Inhale and lift the torso. While exhaling, fold forward from the hips, keeping the back straight and the knees soft. As the torso folds toward the ground, shift the hips up and back so the sitz bones point upward. Bring the hands to the mat and release the head and neck so they hang loosely. To exit the pose, soften the knees, place the hands on the hips and raise the torso in the same extended manner in which it was lowered.",
    "teacherCues": "",
    "modifications": "Rest hands upon a block. Fold arms and hold on to opposite elbows while in forward bend. Hold the back of the ankles for a deeper stretch. Lift heels on a folded blanket to increase hamstring stretch.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/standing-forward-bend/"
  },
  {
    "id": "standing-forward-bend-ii",
    "englishName": "Standing Forward Bend II",
    "sanskritName": "Uttanasana",
    "difficulty": "intermediate",
    "category": "forward-bends",
    "categories": [
      "forward-bends"
    ],
    "image": "/poses/standing-forward-bend-ii.png",
    "imageAlt": "Practitioner demonstrating Standing Forward Bend II (Uttanasana)",
    "shortFact": "Strengthens the legs and feet.",
    "benefits": "Strengthens the legs and feet. Stretches the hamstrings. Improves digestion. Opens the hips. Relieves stress and anxiety.",
    "steps": "Stand in Tadasana with the feet parallel, shoulders back and tailbone slightly tucked, knees soft. Inhale, and reach the arms overhead to lengthen the spine. Exhale, hinging at the hip joints, keeping the back straight and arms extended, folding forward, pulling the naval towards the spine to bring the chest towards the thighs and the hands to the mat. Let your head relax towards the floor, keeping the shoulder engaged and away from the ears. Continue to focus on the breath letting the exhales bring the naval closer to the spine to allow the forward fold to deepen. To come out of the pose, bring the hands to the hip crease, roll the shoulders back and slowly come up with a straight back.",
    "teacherCues": "",
    "modifications": "Use a block under each hand to give support to reaching the floor and to maintain a straight spine. Bend the knees if the hamstrings are tight. For pregnancy, tight hamstrings or calves, place the hands on a wall or a chair with a wide stance and bent knees to fold to about 90 degrees. If there is any weakness, stay seated in a chair with the feet hip distance apart. For balance assistance, press the hips against a wall, with heels about six inches forward.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/standing-forward-bend-ii/"
  },
  {
    "id": "extended-puppy",
    "englishName": "Extended Puppy Pose",
    "sanskritName": "Uttana Shishosana",
    "difficulty": "intermediate",
    "category": "forward-bends",
    "categories": [
      "forward-bends"
    ],
    "image": "/poses/extended-puppy.png",
    "imageAlt": "Practitioner demonstrating Extended Puppy Pose (Uttana Shishosana)",
    "shortFact": "Offers the benefits of a slight backbend and an inversion Stretches the shoulders and spine Relieves stress Helps treat insomnia.",
    "benefits": "Offers the benefits of a slight backbend and an inversion Stretches the shoulders and spine Relieves stress Helps treat insomnia",
    "steps": "Start in Table Top with wrists directly under the shoulders and knees directly under the hips. Lower the arms so that the elbows rest on the mat. Extend the arms, walking the hands forward and lowering the chest toward the floor. Keep the knees directly under the hips and the hands shoulder width apart as the back slightly curves and the hips pivot as if reaching the sitz bones toward the ceiling. Rest the forehead on the floor. To exit the pose, gently lift the head and chest as the hands are walked back into Table Top.",
    "teacherCues": "",
    "modifications": "Use a blanket or block under the forehead to lessen the backbend and ease shoulder stress. Place a blanket under the knees to lessen knee discomfort. Place a block between the knees to encourage lengthening of the spine.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/extended-puppy/"
  },
  {
    "id": "wide-legged-forward-bend",
    "englishName": "Wide-Legged Forward Bend",
    "sanskritName": "Prasarita Padottanasana",
    "difficulty": "intermediate",
    "category": "forward-bends",
    "categories": [
      "forward-bends"
    ],
    "image": "/poses/wide-legged-forward-bend.png",
    "imageAlt": "Practitioner demonstrating Wide-Legged Forward Bend (Prasarita Padottanasana)",
    "shortFact": "stretches and strengthens inner thighs and back of legs stretches the back energizing releases neck tension stimulates digestive organs.",
    "benefits": "stretches and strengthens inner thighs and back of legs stretches the back energizing releases neck tension stimulates digestive organs",
    "steps": "Begin from Tadasana (Mountain Pose). Take a big step back, approximately 3 1/2 -4 feet, with the right foot. Pivot on the mat so that both feet are facing the long edge of the mat, in a parallel position. The outside edges of the feet are parallel with the short edge of the mat. Firm the legs muscles and lift through the arches of the feet. Place the hands on the hips. Inhale to lengthen the spine towards the ceiling and exhale to hinge from the hips, folding forward towards the thighs. Reach the hands to the floor and inhale to lengthen the spine again, finding a long neutral back, not rounding the spine (see modifications), exhale, to hinge deeper into the posture. Keep the legs engaged as the upper body releases forward. Keep the palms pressing into the floor and bring the crown of the head towards the ground. Hold the posture for 5 to 10 breaths. to come up, place the hands onto the hips again, engage the inner thighs and inhale to lengthen the spine back up to standing.",
    "teacherCues": "",
    "modifications": "Use a block to place the palms on place the palms on a wall Bend the knees",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/wide-legged-forward-bend/"
  },
  {
    "id": "wide-angle-seated-forward-bend-upavistha-konasana",
    "englishName": "Wide-Angle Seated Forward Bend",
    "sanskritName": "Upavistha Konasana",
    "difficulty": "intermediate",
    "category": "forward-bends",
    "categories": [
      "forward-bends"
    ],
    "image": "/poses/wide-angle-seated-forward-bend-upavistha-konasana.png",
    "imageAlt": "Practitioner demonstrating Wide-Angle Seated Forward Bend (Upavistha Konasana)",
    "shortFact": "Opens the hips and hamstrings.",
    "benefits": "Opens the hips and hamstrings. Elongates the spine. Promotes calmness. Stimulates circulation to the liver, spleen, and adrenals.",
    "steps": "Begin in Seated Mountain Pose on the floor with both legs stretched out in front of you. Press out through the heels. Then, spread your legs away from one another, opening them to a 90 degree angle. Engage the inner thigh muscles. Continue to press out through the heels of both feet. Elongate the spine and reach toward the ceiling with the crown of the head. Leaving the legs in the same position, begin to hinge forward at the hips. Use the hands to “walk” the torso down, bringing it closer and closer to the mat. Remember to work at your own pace. Exhale and relax into the pose",
    "teacherCues": "",
    "modifications": "If lower back pain is present, place a folded blanket underneath the “sit” bones. Keeping the spine long and the chest open, lean gently forward into the stretch. Find a spot that is comfortable for your back and one that engages your hamstrings. If you are not comfortable opening the legs to a 90 degree angle, bring the legs closer together. Listen to your body and know that any angle will be fine.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/wide-angle-seated-forward-bend-upavistha-konasana/"
  },
  {
    "id": "childs-pose-balasana",
    "englishName": "Child Pose",
    "sanskritName": "Balasana",
    "difficulty": "beginner",
    "category": "forward-bends",
    "categories": [
      "forward-bends"
    ],
    "image": "/poses/childs-pose-balasana.png",
    "imageAlt": "Practitioner demonstrating Child Pose (Balasana)",
    "shortFact": "Stretches the ankles, thighs, hips, and back.",
    "benefits": "Stretches the ankles, thighs, hips, and back. Relieves tension and stress, by calming the nervous system. Relaxation. Massages the organs. Improves digestion.",
    "steps": "Begin kneeling on the floor with the tops of the feet flat and the legs together. Release the upper body over the thighs, resting the forehead onto the floor. Place the arms alongside the body with the palms turned up. Allow the shoulders to roll forward releasing the mid back. To come out, place the hands underneath the shoulders and draw the belly back to lift the spine. Child’s pose is a place of rest and can be used during transitions. If a student feels fatigued this is a good posture to pause in. It can be held anywhere from 30 seconds and up to 10+ minutes in a restorative yoga class.",
    "teacherCues": "",
    "modifications": "Neck Strain: Use a cushion to support the head Difficulty sitting on heels: Place a bolster or rolled blanket behind the knees",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/childs-pose-balasana/"
  },
  {
    "id": "half-camel-raised-toe-pose",
    "englishName": "Half Camel Raised Toe Pose",
    "sanskritName": "Ardha Ustrasana",
    "difficulty": "beginner",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/half-camel-raised-toe-pose.png",
    "imageAlt": "Practitioner demonstrating Half Camel Raised Toe Pose (Ardha Ustrasana)",
    "shortFact": "Opens chest Increases flexibility of the spine Relieves tight shoulders Strengthens ankles and core muscles Invigorates the abdominal muscles.",
    "benefits": "Opens chest Increases flexibility of the spine Relieves tight shoulders Strengthens ankles and core muscles Invigorates the abdominal muscles",
    "steps": "The Half Camel Raised Toe Pose puts forth a challenging spin on the classic Half Camel posture, by raising the toe closer to the upper arm. If the classic Camel Pose was a deep intense backbend, the Half Camel Raised Toe Pose nudges you to control your balance on one knee, while stretching the hamstrings. All Camel Pose Variations are great poses to get your students to be more courageous about attempting backbends, as practising this pose helps them overcome their ‘fear of falling’ backwards. Most new Yoga practitioners will find this pose to be a challenge, as it requires a certain amount of flexibility in the back, hamstrings and ankles. To practice the pose, begin in Hero’s pose as it warms up the ankles as prep for the pose. After staying in the pose for a few seconds, move to a high kneeling position. In this position, be sure to tuck your tailbone in while lengthening the spine and strengthening your core and back. Your legs are hip-width apart. Bring hands to the small of the back for support and open chest and heart, by pointing chest to ceiling. Open shoulders and roll them downwards towards each other. Pay caution that there is no tension in the neck and jaw area. Once the chest is open and the shoulders relaxed, reach right arm a little further away from the right foot to place the palm flat on the mat. This creates a subtle backbend. Use the left hand to guide right toe towards the right upper arm. Ensure the right foot is comfortable and ‘tucked’ into the right upper arm. Once that position with the right foot is secured, lift left arm up by rotating the shoulders outwards to extend behind. Breathe deeply for a few seconds, while relaxing the body. To release the pose, push hips forward to come out of the backbend. Release the foot grasp on the upper right arm, and resume hero’s pose again. Repeat the same steps on the left side.",
    "teacherCues": "",
    "modifications": "Practised with the hips facing the wall If the student is a beginner, extend and arch back by placing both hands on lower back only Use a chair as a prop behind the legs and use the seat of the chair to support hands while opening chest.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/half-camel-raised-toe-pose/"
  },
  {
    "id": "pigeon-pose-2",
    "englishName": "Pigeon Pose",
    "sanskritName": "Kapotasana",
    "difficulty": "advanced",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/pigeon-pose-2.png",
    "imageAlt": "Practitioner demonstrating Pigeon Pose (Kapotasana)",
    "shortFact": "Increases flexibility in the hip region Stretches and stimulates internal organs in the upper body.",
    "benefits": "Increases flexibility in the hip region Stretches and stimulates internal organs in the upper body. Opens the chest and enables deep breathing. Stretches and stimulates the spine to allow for good blood circulation Helps in reducing sciatica. Strengthens the groins and lower back.",
    "steps": "Pigeon pose is a deep back bending pose that is suitable for advanced practitioners. This pose stretches the back, throat and specifically the hip flexors. Although this pose looks similar to the wheel pose or bridge pose, this pose works on establishing a deeper connection with the upper and lower body while using the gravitational pull. Sometimes there is some confusion among Yoga teachers between One legged pigeon pose and classic pigeon pose. The former has is an intermediate pose which has one leg stretched out while the latter is an advanced pose which is practised kneeling. To practice this pose, first be sure to have warmed up by practising a few preparatory poses such as downward dog, Wheel pose, Bow pose, Cobra pose . Begin in Camel pose, by kneeling with your legs hip-width apart. Take a deep inhale lift your lower belly by extending your arms outwards and externally rotating your shoulders. Grab your ankles with your hands, ensure that your lower back is stable. Stay in the pose for a few minutes and breathe deeply. Come out of the pose by pushing forward with your knees while stabilising your core and exhale. Remain kneeling and lift your hands over and above your head to bring your palms together. Try and focus again to lift and lengthen the spine from the pelvis. Try and open your chest wider by dropping your shoulders down your back. Exhale and stretch back slowly to allow your hands to reach the ground. At this point, the top of the head is not yet meeting the ground. Walk the hands outside the leg and hold your heel. Bring your elbows together and rest them on the mat gently. Your head now rests between your feet. Stay in this posture for five breaths or as long as you are comfortable and breathing. To release this pose, place your hands near your feet on the mat while extending the elbows. Try not to overextend your hand while exiting the pose. Press into your knees and feet and lift up on an inhale to exit this pose.",
    "teacherCues": "",
    "modifications": "Practice the backbend with the help of the wall. Use a strap around elbows to maintain alignment.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/pigeon-pose-2/"
  },
  {
    "id": "frog-pose",
    "englishName": "Frog pose",
    "sanskritName": "Bhekasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/frog-pose.png",
    "imageAlt": "Practitioner demonstrating Frog pose (Bhekasana)",
    "shortFact": "Opens hips and shoulders Strengthens inner thighs (adductors) Stretches quadriceps, tibialis anterior (front shin muscles), keens, ankles and Achilles tendon Massages inner organs and improves digestion Strengthens back muscles.",
    "benefits": "Opens hips and shoulders Strengthens inner thighs (adductors) Stretches quadriceps, tibialis anterior (front shin muscles), keens, ankles and Achilles tendon Massages inner organs and improves digestion Strengthens back muscles",
    "steps": "Frog pose is a front lying backbend that requires a moderate to high degree of strength and flexibility. Preparatory poses include common front lying backbends such cobra and sphinx. Like Frog pose, these building block postures simultaneously open the chest and strengthen the back. But Frog pose, however, provides additional benefits, stretching the fronts of the legs and feet. Begin on the belly, with the legs stretched out behind. Bring the forearms onto the mat as in sphinx pose. Bend the legs back, heels reaching towards the buttocks. Turn and look over your right shoulder and reach back with the right hand. Press the palm of the hand on the top of the right foot and cup your fingers around the toe. Once you have a good grab on the foot, turn head and gaze back to centre. Balance on your hips bones, the turn over the left shoulder, reach back and place the left palm on the front of the left foot. Bring the gaze back to centre and hold for 5-10 breaths. To exit the pose, release the feet one at a time, bringing arms back to sphinx pose.",
    "teacherCues": "",
    "modifications": "Half frog: Complete one leg at a time Place bolster under ribcage Grab feet with strap",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/frog-pose/"
  },
  {
    "id": "fish-pose",
    "englishName": "Fish pose",
    "sanskritName": "Matsyasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/fish-pose.png",
    "imageAlt": "Practitioner demonstrating Fish pose (Matsyasana)",
    "shortFact": "Opens chest Stretches and stimulates muscles and organs for belly and throat Stretches hip flexors (psoas) and intercostals (muscles between ribs) Strengthens upper back and neck Improves posture.",
    "benefits": "Opens chest Stretches and stimulates muscles and organs for belly and throat Stretches hip flexors (psoas) and intercostals (muscles between ribs) Strengthens upper back and neck Improves posture",
    "steps": "Fish pose is a deep backbend and chest opener with many therapeutic benefits. This pose stimulates the lymphatic system, boosting immunity to disease and infections. This pose is also used to improve ailments from chronic fatigue to a backache and constipation. It is also a pose that is most commonly included near the end of a yoga sequence as a counter pose for shoulder stand or headstand. To begin lay flat on the floor with the knees bent and feet firmly rooted to the floor. Slide the hands (palm-side down) underneath the buttocks. Tuck the forearms and elbows close to the torso and press down. Lift the upper chest and arch the back. Let the head tilt back. If possible rest the head crown on the floor. Next stretch the legs out one at a time. Press the backs of the legs into the floor and stretch out through the heels. Take five full breaths. To exit the pose, gently lower the head and back to the floor. Bend the knees and hug them to the chest.",
    "teacherCues": "",
    "modifications": "Place bolster under the back Place blanket under the neck and/or head Bend knees, placing feet flat on the floor",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/fish-pose/"
  },
  {
    "id": "full-bow-pose",
    "englishName": "Full Bow Pose",
    "sanskritName": "Padangustha Dhanurasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/full-bow-pose.png",
    "imageAlt": "Practitioner demonstrating Full Bow Pose (Padangustha Dhanurasana)",
    "shortFact": "Strengthens back and leg muscles Realigns spinal column, Stimulates spinal nerves, stretching back ligaments and muscles Improves posture Improves flexibility of back, shoulders, and hips Massages liver, abdominal organs, pancreas and adrenal glands Relieves gastrointestinal disorders.",
    "benefits": "Strengthens back and leg muscles Realigns spinal column, Stimulates spinal nerves, stretching back ligaments and muscles Improves posture Improves flexibility of back, shoulders, and hips Massages liver, abdominal organs, pancreas and adrenal glands Relieves gastrointestinal disorders",
    "steps": "Full bow pose is a deep backbend that opens the heart, stretches the hips and massages the lymphatic system. Half Bow pose is also known as big Toe Bow pose, as the hand grip is around the big toes, not the ankles. Full Bow pose is popular with Pilates instructors and back specialists, for its posture improving benefits, reducing round shoulders and improving curvature of the spine. Begin on the belly, with forearms on the on the mat in front of you. Release the pelvis into the mat and square the hip bones. Bend the right knee. Reach the right arm overhead and back to grab the big toe, working your fingers around all five toes. Bend the left leg and reach overhead and back to grab the left toes. Arch the back, squeeze the elbows in around the head and press the legs back. To exit the pose, release one foot and then the other. Press back into child’s pose.",
    "teacherCues": "",
    "modifications": "Use straps to lasso feet Grasp ankles and/or leave thighs on floor Place bolster/blanket underbelly",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/full-bow-pose/"
  },
  {
    "id": "one-legged-eight-limbed-posture",
    "englishName": "One-legged Eight-Limbed Pose",
    "sanskritName": "Eka Pada Ashtanga Namaskara",
    "difficulty": "beginner",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/one-legged-eight-limbed-posture.png",
    "imageAlt": "Practitioner demonstrating One-legged Eight-Limbed Pose (Eka Pada Ashtanga Namaskara)",
    "shortFact": "Strengthens leg, glute, back and neck muscles Tones the hips and waist Improves flexibility of spine.",
    "benefits": "Strengthens leg, glute, back and neck muscles Tones the hips and waist Improves flexibility of spine",
    "steps": "One-legged Eight-Limbed Posture is an advanced variation of knees-chest-chin pose, commonly performed as part of a sun salute sequence. In its basic form, one legged Eight Limbed posture builds strength in the core muscles and upper body. This version provides more challenge as one leg is extended skyward. In addition to strengthening leg and glute muscles, One legged Eight Limbed pose provides a deep backbend toning the hips and back, while stretching the spine. Begin in plank pose, with toes tucked. Bend the elbows and lower the knees, chest and chin to the mat. The buttocks, hips, and belly do not touch the floor. Extend the arms one-at-a-time along the mat. Stretch the right foot back and raise the leg upward. Point the toes. Straighten the left leg and lift the knee off the ground. The weight of the body is supported by the chest, chin , arms and toes. To exit the pose, lower the leg, then drop to knees. Push back to child pose or downward facing dog. Repeat other side.",
    "teacherCues": "",
    "modifications": "Keep elbows bent Keep one knee on the mat Practice with one foot on wall Place a bolster under hips",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/one-legged-eight-limbed-posture/"
  },
  {
    "id": "little-bridge-pose",
    "englishName": "Little Bridge Pose",
    "sanskritName": "Dwi Pada Pitham",
    "difficulty": "beginner",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/little-bridge-pose.png",
    "imageAlt": "Practitioner demonstrating Little Bridge Pose (Dwi Pada Pitham)",
    "shortFact": "Stretches chest, neck and spine Calms brain and relieves mild depression Stimulates spinal nerves Strengthens back and legs Tones, hips, abdomen and glutes Realigns the spine Massages and stretches colon.",
    "benefits": "Stretches chest, neck and spine Calms brain and relieves mild depression Stimulates spinal nerves Strengthens back and legs Tones, hips, abdomen and glutes Realigns the spine Massages and stretches colon",
    "steps": "Little Bridge Pose is an advanced variation of bridge pose. All backbends even beginner ones have their challenges. In this version, the legs are extended, making the glutes and thighs work even harder to keep the hip thrust. That makes Little Bridge pose a great butt burner exercise, a favorite pose of dynamic and fitness yoga classes. But Little Bridge pose is also popular with restorative and therapeutic yoga teachers as the pose includes a chin lock that massages the thyroid responsible for metabolism and tissue health. Begin on the back with the knees bent and feet flat on the mat, hips width apart. This is the start position. Roll the arms and shoulders under the body. Clasp the hands together. Flatten out the neck and back of the head. Tuck the chin towards the chest. On the inhale, press the foot soles and arms down. Lift the hips skywards on the exhale. Push the chest towards the chin, arching the back. Extend one leg and then the other along the mat, heels pressing into the ground. Hold the pose for 5 breaths. To exit the pose, step one foot at a time back to start position. Unclasp the arms and slowly lower the body down, one vertebrae at a time.",
    "teacherCues": "",
    "modifications": "Press feet against a wall Place blocks or bolster under hips",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/little-bridge-pose/"
  },
  {
    "id": "one-legged-wheel-pose",
    "englishName": "One legged Wheel pose",
    "sanskritName": "Eka Pada Chakrasana",
    "difficulty": "beginner",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/one-legged-wheel-pose.png",
    "imageAlt": "Practitioner demonstrating One legged Wheel pose (Eka Pada Chakrasana)",
    "shortFact": "Strengthens the legs and arms Improves flexibility of wrists, shoulders and spine Stimulates spinal nerves and reproductive glands Improves circulation and respiration.",
    "benefits": "Strengthens the legs and arms Improves flexibility of wrists, shoulders and spine Stimulates spinal nerves and reproductive glands Improves circulation and respiration",
    "steps": "One legged Wheel pose is a deep backbend that stretches and energises the whole body. One legged Wheel pose is a variation of wheel pose, an advanced posture that requires a flexible spine as well as strong legs and arms. It is recommended that practioners master basic and intermediate backbends before attempting this posture Begin in a lying down position with the knees bent and feet soles on the ground. The feet should be hips width apart with the heels touching the hips. Place the palms on the floor beside each ear, with the fingers pointing towards the shoulders. When ready press the hips upward. Arch the back and press the chest toward the chin. Fully straighten the arms and bring the eye gaze towards the floor (as for a handstand). Straighten the legs, by walking the hands and feet towards each other. Bend the right leg and bring the knee towards the chest. Straighten the leg and point the toes skyward. Take five breaths. To exit the pose, bend the knee and return the foot to the floor. Bend the elbows and knees. Slowly release the back to the ground, vertebrae by vertebrae. Repeat the other side",
    "teacherCues": "",
    "modifications": "Practice with two partners; each holding either of a strap or towel placed under the hips Practice with shoulders resting between two chairs Practice one-legged bridge",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/one-legged-wheel-pose/"
  },
  {
    "id": "balancing-table-pose",
    "englishName": "Balancing table pose",
    "sanskritName": "Dandayamna Bharmanasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/balancing-table-pose.png",
    "imageAlt": "Practitioner demonstrating Balancing table pose (Dandayamna Bharmanasana)",
    "shortFact": "Strengthens the core muscles Lengthens the spine Improves balance, coordination and focus.",
    "benefits": "Strengthens the core muscles Lengthens the spine Improves balance, coordination and focus",
    "steps": "Balancing table pose is a core strengthening pose that works with many different styles and levels of yoga practice from power yoga to pregnancy and senior yoga. Balancing table pose lengthens the spine, improves balance, coordination and focus. This posture also works as a prep pose for standing balances such as Warrior III, half-moon and dancer. Begin on hands and knees (table top pose). Stretch the right leg back. On the inhale, lift the leg level with the floor. Exhale. Stretch the toes towards the back wall. On the next inhale, extend the left hand forward, with the thumbs pointing upwards. Hold for 5-6 breaths. To exit the pose, return the knee and then the hand. Repeat other side.",
    "teacherCues": "",
    "modifications": "Keep ball of extended foot on floor Press extended foot or hand against wall Place blanket or folded mat under knees",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/balancing-table-pose/"
  },
  {
    "id": "wild-thing",
    "englishName": "Wild thing",
    "sanskritName": "Camatkarasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/wild-thing.png",
    "imageAlt": "Practitioner demonstrating Wild thing (Camatkarasana)",
    "shortFact": "Strengthens the legs, back and shoulders Improves flexibility of the spine Improves rotation and movement of the shoulders Opens the chest and improves respiration and circulation Stimulates the spinal nerves and balances nervous system.",
    "benefits": "Strengthens the legs, back and shoulders Improves flexibility of the spine Improves rotation and movement of the shoulders Opens the chest and improves respiration and circulation Stimulates the spinal nerves and balances nervous system",
    "steps": "Wild thing is an energetic heart opener that will rock your asana practice. Sometimes called, Rock star, this pose combines an inverted backbend with a balance that resembles the onstage choreography of some rock-n-rollers. And, its Sanskrit name means ‘unfolding of the raptured heart’. Wild thing also known as flip-the dog, is a counter-pose to downward facing dog. Its many names are only matched by its applications and uses in sequencing and practice. This is a playful pose that requires some flexibility of the spine and shoulders. Preceding poses should include plank and side plank, bridge pose and downward facing dog. Begin from downward facing dog. Spread the fingers of both hands and press down with thumb and forefinger. Stretch the sternum forward to lengthen the spine. Inhale and extend the right leg back to 3-legged or split dog. Exhale and bend your leg at the knee, drawing the heel towards the hips, knee pointing upwards. On the next inhale, shift your weight into left hand and outer edge of left foot (as for side plank). Lift the right hand off the mat and extend the arm over the head. Pivot onto your right foot pad and spiral the chest skywards, until both feet are flat and grounded. Deeply arch the back and reach the right hand back. If you want to take the pose further, bring the right hand onto the ground into upward facing bow or wheel. To exit the pose, Shift the weight back onto the left hand outer edge of your left foot and flip back to downward facing dog. Repeat other side",
    "teacherCues": "",
    "modifications": "Enter from mariachi I – seated on the floor, right leg bent. Place left hand a foot behind hip. Ground left foot, push upwards into back bend and reach right upward Practice bring right hand against wall Practice pressing left foot against wall Place bolster under back",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/wild-thing/"
  },
  {
    "id": "upward-facing-two-foot-staff-pose",
    "englishName": "Upward Facing Two-Foot Staff Pose",
    "sanskritName": "Dwi Pada Viparita Dandasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/upward-facing-two-foot-staff-pose.png",
    "imageAlt": "Practitioner demonstrating Upward Facing Two-Foot Staff Pose (Dwi Pada Viparita Dandasana)",
    "shortFact": "Strengthens neck, shoulders, back and thigh muscles Opens the chest and improves respiration Improves balance Improves circulation and metabolic processes.",
    "benefits": "Strengthens neck, shoulders, back and thigh muscles Opens the chest and improves respiration Improves balance Improves circulation and metabolic processes",
    "steps": "Upward Facing Two-Foot Staff Pose is a combination pose that puts headstand together with upward bow pose. If you’re looking for an intermediate backbend chest-opener, this is your pose. Suggested warm-up and prep poses include headstand (sirasana), bow pose (dhanurasana) and upward bow (urdhva dhanurasana). Begin in a lying down (neutral spine) position with bent knees. Bring the feet close to the hips. Place both palms, on either side of the head. Press the knees away from the body and push the hands down. Straighten the arms, lifting head, shoulders and hips off the ground (as for bow pose). Hold for 3-5 breathes. Next, bend the elbows, lower the forearms (one-at-a-time) onto the ground. Slowly lower the head crown onto the mat. Slide the hands towards each other and interlock the fingers (as for headstand). Press the forearms and elbows down to lift the chest and head up off the ground. To complete the full pose, walk the feet away from the body, one-at-a-time, until the legs are straight. Press down with the inner heels and lift up with the chest. To exit the pose, walk the feet back under the knees. Slowly lower the head crown to the mat. Release the handclasp and one-at-a-time, place hands next to the head, press back to bow pose. Walk the feet in slightly and drop the chin to chest, rolling back down to neutral spine, start position.",
    "teacherCues": "",
    "modifications": "Practice lying sideways across a chair Place block between feet and squeeze Practice with knees bent Practice with head supported by block in final pose",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/upward-facing-two-foot-staff-pose/"
  },
  {
    "id": "twisting-cobra-pose",
    "englishName": "Twisting Cobra pose",
    "sanskritName": "Tiryaka Bhujangasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/twisting-cobra-pose.png",
    "imageAlt": "Practitioner demonstrating Twisting Cobra pose (Tiryaka Bhujangasana)",
    "shortFact": "Expands lungs and improves breathing Improves flexibility of the back Relieves backache Tones abdomen Massages female reproductive organs (ovaries and uterus, reliving menstrual cramps) Stimulates appetite Alleviates constipation Massages and stimulates liver and kidneys.",
    "benefits": "Expands lungs and improves breathing Improves flexibility of the back Relieves backache Tones abdomen Massages female reproductive organs (ovaries and uterus, reliving menstrual cramps) Stimulates appetite Alleviates constipation Massages and stimulates liver and kidneys",
    "steps": "Begin reversed corpse pose (advasana), lying on the belly, forehead to ground, feet hips width apart, toes tucked. Place the hands flat on the ground, below the shoulders. Bend the elbows and squeeze then against the sides of the chest. Press chest forward and lift the upper body off the ground. Slowly raise the head, straighten the left elbow and look over the right shoulder. Bring the head back to centre and return to front lying corpse pose. Repeat the other side.",
    "teacherCues": "",
    "modifications": "Low cobra – keep elbows bent, mid torso on ground, lifting only head and sternum Sphinx pose- place forearms on ground, lifting only head and sternum",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/twisting-cobra-pose/"
  },
  {
    "id": "eight-limbed-salutation-pose",
    "englishName": "Eight Limbed Salutation Pose",
    "sanskritName": "Ashtanga Namaskara",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/eight-limbed-salutation-pose.png",
    "imageAlt": "Practitioner demonstrating Eight Limbed Salutation Pose (Ashtanga Namaskara)",
    "shortFact": "Strengthens leg, chest and arm muscles Improves flexibility of back and spine Strengthens upper back and shoulders.",
    "benefits": "Strengthens leg, chest and arm muscles Improves flexibility of back and spine Strengthens upper back and shoulders",
    "steps": "Begin from downward facing dog. Keep the hands and feet in the same place. Bend the knees and elbows and lower the knees, chest and chin to the floor. Grip the ground with toes and finger tips, seat pointing up, belly off ground. To exit the pose, move into cobra and/or to downward facing dog.",
    "teacherCues": "",
    "modifications": "From downward facing dog, lower to hands and knees, then knees-chest-chin From child pose, lift to hands and knees, then to knees-chest-chin",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/eight-limbed-salutation-pose/"
  },
  {
    "id": "runners-lunge",
    "englishName": "Runner’s Lunge Pose",
    "sanskritName": "Arda Mandalasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/runners-lunge.png",
    "imageAlt": "Practitioner demonstrating Runner’s Lunge Pose (Arda Mandalasana)",
    "shortFact": "Stretches groin Helps relieve sciatica Opens chest Strengthens arms, legs and back Prepares the lower body for standing lunges.",
    "benefits": "Stretches groin Helps relieve sciatica Opens chest Strengthens arms, legs and back Prepares the lower body for standing lunges",
    "steps": "Runner’s Lunge is often found in Sun Salutations and in preparation for a class with many standing lunges. It helps develop stability and flexibility in the lower body and prepares it for the Warrior poses. Runner’s Lunge also increases stamina and strength in the arms, back, hips and legs. Start in Mountain pose and inhale into Upward Salute pose. Exhale into a standing forward bend. Place both hands on the floor and step the right foot back, placing the ball of the foot on the floor and keeping the right leg straight. The left foot is between the hands, which are shoulder-width apart, palms flat on the floor. The left knee is directly over the left ankle. Look forward, keeping the chin parallel with the floor and extending the spine. Take a breath and while exhaling, soften the groin and let it sink toward the floor. To exit, either step the left foot back to meet the right foot, and bring the body into Plank pose, or step the right foot up and bring the body to Standing Forward Bend. Repeat on the other side.",
    "teacherCues": "",
    "modifications": "When entering the pose, bend knees in Standing Forward Bend before stepping foot back. Place hands on blocks to lessen the intensity of the stretch. Keep the neck neutral or look down if neck pain is experienced. Lower the knee of the extended leg to the mat and place a blanket under it. Place a block under the extended knee or shin.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/runners-lunge/"
  },
  {
    "id": "sphinx-ii",
    "englishName": "Sphinx Pose II",
    "sanskritName": "Salamba Bhujangasana",
    "difficulty": "beginner",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/sphinx-ii.png",
    "imageAlt": "Practitioner demonstrating Sphinx Pose II (Salamba Bhujangasana)",
    "shortFact": "Counters effects from long periods of sitting Stimulates digestive organs Opens chest Stretches entire spine.",
    "benefits": "Counters effects from long periods of sitting Stimulates digestive organs Opens chest Stretches entire spine",
    "steps": "Sphinx pose is a gentle backbend that is beneficial for beginners and students with injuries that prevent them from doing other backbends. It is also an effective and gentle backbend for experienced students. To enter the pose, lie on the stomach with the feet hip width apart and arms bent at the elbows alongside the body. The palms are flat on the mat. Press the palms into the mat and gently lift the torso off of the mat. Shift the elbows so they are on the mat and directly under the shoulders. The arms make a 90 degree angle and the fingers are spread wide on the mat. The shoulders are back and away from the ears, and the head is lifted while the eyes gaze straight ahead. Gently press the pubic bone into the floor, relax the gluteal muscles of the buttocks and feel the stretch in the lower back. To exit Sphinx pose, gently lift the body to Table Top pose by pushing back from the hands and bending at the knees.",
    "teacherCues": "",
    "modifications": "If the backbend is too intense, extend the forearms forward, creating a wider angle in the arm. Feet can be placed together instead of hip-width apart. Perform half neck rolls (gently looking over each shoulder) to counter tension in the neck.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/sphinx-ii/"
  },
  {
    "id": "sphinx",
    "englishName": "Sphinx Pose",
    "sanskritName": "Salamba Bhujangasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/sphinx.png",
    "imageAlt": "Practitioner demonstrating Sphinx Pose (Salamba Bhujangasana)",
    "shortFact": "Strengthen thighs and core muscles Opens the chest Improves sciatica and paralysis in the legs Improves blood circulation in the hip joints Relieve back pain.",
    "benefits": "Strengthen thighs and core muscles Opens the chest Improves sciatica and paralysis in the legs Improves blood circulation in the hip joints Relieve back pain",
    "steps": "Naraviralasana is the infant of backbends. It can be practiced with either an active or passive approach. This yoga posture is great for relieving low back pain, hamstring tension, and circulation in the legs and hips. Although the posture looks easy, students should take care not to use extreme force in extending the neck and head towards the back, but expect to engage the thighs and other muscles and joints.",
    "teacherCues": "",
    "modifications": "Use folded blanket and place on mat, then lay down on it Rotate legs inward",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/sphinx/"
  },
  {
    "id": "upward-facing-dog-pose",
    "englishName": "Upward Facing Dog Pose",
    "sanskritName": "Urdhva Mukha Svanasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/upward-facing-dog-pose.png",
    "imageAlt": "Practitioner demonstrating Upward Facing Dog Pose (Urdhva Mukha Svanasana)",
    "shortFact": "Strengthens the back, legs, shoulders, arms and abdominals Opens the whole front of the body, including chest and shoulders Energizing and heart opening.",
    "benefits": "Strengthens the back, legs, shoulders, arms and abdominals Opens the whole front of the body, including chest and shoulders Energizing and heart opening",
    "steps": "Begin from plank pose. Line up the palms just slightly wider than shoulder distance apart, fingers spread wide on the mat, with the index finger facing forward. The heels line up over the toes and the body is in a strong long line. Inhale to simultaneously roll over the toes to press the tops of the feet into the ground and press the sternum forward to extend the upper spine. Lift the eyes and chest up. Press the shoulders back and energize up from the palms of the hands. This posture can be used as part of a flow through sun salutations or held on its own for several breaths. To come out, shift the weight back to plank, tucking the toes under again. Press back to Down Dog or lower through Chaturanga Dandasana to release to the floor. *This posture can also be started from the floor, with the hands lined up at the chest, pressing the chest up and out and lifting the pelvis and legs away from the floor.",
    "teacherCues": "",
    "modifications": "Perform with the knees on the ground for more support for abdominals and upper body Keep the toes tucked under to help the legs to energize more and create more stability Perform mini cobra from the floor, leaving the legs on the ground instead and lifting the upper chest only (this is especially helpful while flowing quickly) Place blocks under the wrists to find more extension in a tight thoracic spine Roll the edge of the mat or use a wedge under the palms to decrease the angle of the wrist extension.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/upward-facing-dog-pose/"
  },
  {
    "id": "locust-pose-shalabhasana",
    "englishName": "Locust Pose",
    "sanskritName": "Shalabhasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/locust-pose-shalabhasana.png",
    "imageAlt": "Practitioner demonstrating Locust Pose (Shalabhasana)",
    "shortFact": "Physical Builds strength in the muscles of the lower back Strengthens the neck, arms and shoulders Increases flexibility and strength in the back Helpful and offers relief in cases of sciatica, slipped disc, varicose veins, hemorrhoids and lower back pain Excess fat is reduced especially from the hips, waist, posterior, thighs, and the abdomen Improves stomach and digestive disorders.",
    "benefits": "Physical Builds strength in the muscles of the lower back Strengthens the neck, arms and shoulders Increases flexibility and strength in the back Helpful and offers relief in cases of sciatica, slipped disc, varicose veins, hemorrhoids and lower back pain Excess fat is reduced especially from the hips, waist, posterior, thighs, and the abdomen Improves stomach and digestive disorders. Stretching and improving circulation throughout the small and large intestine. Alleviates disorders of the stomach and bowels and flatulence, improves digestion, promotes peristaltic action and helps with constipation Improves circulation and blood flow throughout the lower body Energetic (Pranic) Stimulates swadhisthana chakra Increases agni (the digestive fire) Mental Improves concentration Promotes calmness and focus Stimulates and helps balance the swadhisthana (2nd) and manipura (3rd) chakras Shalabhasana stimulates the autonomic nervous system and particularly the parasympathetic regions in the neck and pelvis. It strengthens and tones the lower back and pelvic organs. It is also said to tone the stomach, aiding digestion and stimulating appetite, and the functioning of the liver. It may provide relief for backache and mild sciatica although these conditions should be treated with awareness and care.",
    "steps": "The main benefits of the locust are to build strength and flexibility in the back. Different traditions have differing ideas of what physically constitutes the ‘locust posture’, shalabhasana. In the ‘Heart of Yoga’, Desikracher identifies five variations of shalabhasana- each of which will change the effect and the function of the asana in different ways. There are also a number of different options as to the breathing whilst entering, leaving and staying in the pose and these themselves are also all able to effect the function and the effect of the asana. Before discussing the benefits and contraindications of this asana it is important to identify with version of the posture is going to be taught",
    "teacherCues": "",
    "modifications": "Modifications are available for some students, ie back problems/sciatica may widen legs, pad under pelvis to reduce compression of the lower back and soften the final position",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/locust-pose-shalabhasana/"
  },
  {
    "id": "cobra-pose-bhujangasana",
    "englishName": "Cobra Pose",
    "sanskritName": "Bhujangasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/cobra-pose-bhujangasana.png",
    "imageAlt": "Practitioner demonstrating Cobra Pose (Bhujangasana)",
    "shortFact": "Stretches the ankles, thighs, hips, and back.",
    "benefits": "Stretches the ankles, thighs, hips, and back. Relieves tension and stress, by calming the nervous system. Relaxation. Massages the organs. Improves digestion.",
    "steps": "Begin lying face-down with the legs extended hip-distance apart and the hands spread wide underneath the shoulders. Draw the elbows in close to the ribcage. On an inhalation, firmly press the pubic bone, tops of the feet, and thighs into the floor, lift the shoulders up and back as you press into the palms to lift the chest off of the floor. Maintain a connection in the front of the body between the lower ribcage and the top of the hips, engaging from the pubic bone to the belly button. Allow the tailbone to slightly drop down, as you try not to over engage the buttocks muscles. Lift from the sternum to the top of the head, maintaining an equal openness through out the spine. Stay for a few breaths. On an exhalation, reach through the crown as you lower the chest back to the floor. Keep the elbows hugging close to the body to engage the tricep muscles and avoid the shoulders rounding forward.",
    "teacherCues": "",
    "modifications": "Lift the hands, only come up to a place where you can support your spine without pushing. Cobra Push Up: Extend the arms in front of the body, slightly wider than the shoulders. As you inhale, slide the palms along the floor to lift the chest. On the exhalation, allow the palms to slide forward releasing back onto the ches",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/cobra-pose-bhujangasana/"
  },
  {
    "id": "cat-pose-marjaryasana",
    "englishName": "Cat Pose",
    "sanskritName": "Marjaryasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/cat-pose-marjaryasana.png",
    "imageAlt": "Practitioner demonstrating Cat Pose (Marjaryasana)",
    "shortFact": "Stretches the spine.",
    "benefits": "Stretches the spine. Massages the internal organs.",
    "steps": "On hands and knees, make sure the knees are directly underneath the hips, and the hands are directly underneath the shoulders. Spread the fingers wide and engage the hands by pressing the fingertips, knuckles (in particular the index finger), and heel of the hand, into the floor. The head is in line with the spine and the gaze is down at the ground in front of the hands. With an exhalation begin to round the spine, bringing the mid-back up towards the ceiling and allowing the head to relax down. Draw the navel in and expand into the lower back. Inhale to return to a neutral spine. Often paired with Bitilasana- Cow Pose.",
    "teacherCues": "",
    "modifications": "Can be performed on the forearms.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/cat-pose-marjaryasana/"
  },
  {
    "id": "camel-pose-ustrasana-asana",
    "englishName": "Camel Pose",
    "sanskritName": "Ustrasana",
    "difficulty": "advanced",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/camel-pose-ustrasana-asana.png",
    "imageAlt": "Practitioner demonstrating Camel Pose (Ustrasana)",
    "shortFact": "Opens the front of the thighs, chest, shoulders and throat.",
    "benefits": "Opens the front of the thighs, chest, shoulders and throat. Strengthens the back muscles. Invigorates the nervous system. Stretches the abdominals and deep hip flexors.",
    "steps": "With the toes tucked under, in a high kneeling position, place the hands on the lower back. The heel of the hand should rest at the top of the buttocks. Lift the chest up and draw the tips of the shoulder blades down towards each other. To ensure that the abdominals are engaged, the upper thighbones move back and the tailbone pulls slightly down. Lift the lower belly. To deepen into the posture, keep the thighs perpendicular to the floor, as you reach back to place the hands on the heels. Rotate the inner elbows forward to open the chest. The head can be kept neutral, or if the neck is strong, release the head back. Hold the pose for 30 seconds to 1 minute. To come out of the posture, if the head is back, leave it back. Place the hands into the lower back, lengthening the tailbone down again. Inhale to lift the chest up; the head comes up last. Untuck the toes and fold over the knees into Balasana- Child’s pose",
    "teacherCues": "",
    "modifications": "For some students it may be difficult to release the hands to the feet. One option is to stay with the hands in the lower back and work on lifting through the upper chest. Conversely, place a block lengthwise on either side of each heel and rest the hands onto the blocks.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/camel-pose-ustrasana-asana/"
  },
  {
    "id": "bridge-pose-setu-bandasana-asana",
    "englishName": "Bridge Pose",
    "sanskritName": "Setu Bandasana",
    "difficulty": "beginner",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/bridge-pose-setu-bandasana-asana.png",
    "imageAlt": "Practitioner demonstrating Bridge Pose (Setu Bandasana)",
    "shortFact": "Opens the chest and throat, stimulating the thyroid.",
    "benefits": "Opens the chest and throat, stimulating the thyroid. Strengthens abdominals and hamstrings; stretches the spine. Aids digestion, headaches, backaches, insomnia, menstrual cramps (see modifications), and high blood pressure. Calming effect on the nervous system, helpful for anxiety, fear, depression, and stress.",
    "steps": "Lying prone, step the feet in towards the buttocks, hip distance apart. Place the arms by the sides of the body with the blade edge or pinky-finger side down. Roll the shoulders back to open the front of the body. The chest should lift off the floor here, as though there was a fist placed behind the heart. On the exhalation, actively press into the edge of the arms and into the feet to begin lifting the hips up off of the floor. Firm the lower belly by lengthening the back and allowing the tailbone to draw under, lift the pubic bone towards the navel. Use the strength of the hamstrings to lift the thighs parallel to the floor. Make sure the knees are directly above the ankles. To encourage more opening in the front of the chest, clasp the hands behind the back and reach through the arms. To release from Bridge, unclasp the hands and lower the buttocks to the floor, with the exhale, unwind the spine down to the ground.",
    "teacherCues": "",
    "modifications": "For difficulty keeping the hips lifted, slide a bolster underneath the pelvis. Restorative Spinal Lift: Begin coming into the posture as above, lifting the hips off of the floor. Place a bolster underneath the pelvis and allow the pelvis to relax down. The arms can be soft by the sides, or, to open the chest, relax the arms overhead. Allow the body to be fully supported. This restorative modification can be held for 5 to 15 minutes.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/bridge-pose-setu-bandasana-asana/"
  },
  {
    "id": "bow-pose",
    "englishName": "Bow Pose",
    "sanskritName": "Dhanurasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/bow-pose.png",
    "imageAlt": "Practitioner demonstrating Bow Pose (Dhanurasana)",
    "shortFact": "Tones the muscles of the back and maintains flexibility of the spine.",
    "benefits": "Tones the muscles of the back and maintains flexibility of the spine. Opens the entire front side of the body- ankles, thighs, hip flexors- psoas, abdomen, chest, and throat. Increases vitality and counteracts fatigue. Stimulates the digestive tract and reproductive organs. Aids in Constipation.",
    "steps": "Begin lying prone with the arms extended to the sides of the body, the legs hip distance apart, and the forehead on the ground. Bend the knees towards the buttocks and place the hands around the outside of the ankles. Inhale to begin pressing the feet into the palms until both sides of the chest draw up off the floor. Reach through the top of the head. The body should look like an archers bow. To release from this pose, lower the chest and quietly return the legs to the floor",
    "teacherCues": "",
    "modifications": "Use a yoga strap around the ankles if students can’t reach with their hands. Bend one knee at a time, leaving one side of the body on the floor while the other side lifts. Alternate sides.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/bow-pose/"
  },
  {
    "id": "table-top-pose",
    "englishName": "Table Top Pose",
    "sanskritName": "Bharmanasana",
    "difficulty": "intermediate",
    "category": "back-bends",
    "categories": [
      "back-bends"
    ],
    "image": "/poses/table-top-pose.png",
    "imageAlt": "Practitioner demonstrating Table Top Pose (Bharmanasana)",
    "shortFact": "Strengthens arms, shoulders and core Improves body awareness and alignment Prepares the body for other postures Builds stability and coordination.",
    "benefits": "Strengthens arms, shoulders and core Improves body awareness and alignment Prepares the body for other postures Builds stability and coordination",
    "steps": "Table Top Pose, or Bharmanasana, is one of the main pose in a Yoga practice. It shows up a lot in sequences, especially in the beginning, as it helps build body awareness, stability and connection with the breath. It’s an active posture that strengthens the arms, shoulders and core, and prepares the body for movements like Cat-Cow and Downward Facing Dog. How to do Table Top (step by step) Starting position: Begin with your hands just below your shoulders and your knees aligned with your hips. Hands foundation: Spread your fingers wide and root the whole palm into the ground. Distribute the weight, avoiding putting all your weight on your wrists. Spine alignment: Keep your back neutral and long, without letting the lower back sink or rounding too much. Let the body find a natural balance here. Core activation: Gently draw the navel in towards the spine to support the posture and protect the lower back, without creating tension. Shoulders and arms: Push the floor away with your hands, activating the arms and shoulders. Slightly protract the shoulder blades, without collapsing between them. Neck and gaze: Keep the neck long and relaxed, with your gaze down to the floor, in line with the spine. Hips stability: Keep the hips stable and stacked over the knees, without shifting your weight to one side. Final position: The body forms a steady “table”, back parallel to the floor, strong base, the wrists and knees are firm, and the breathing is light. Coming out: From here, move into your next posture with control, staying connected to your body.",
    "teacherCues": "",
    "modifications": "Place a blanket under the knees Bring the wrists slightly forward of the shoulders to reduce pressure, or make fists to decrease wrist load Use blocks under the hands",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/table-top-pose/"
  },
  {
    "id": "lotus-peacock-pose",
    "englishName": "Lotus Peacock Pose",
    "sanskritName": "Padma Mayurasana",
    "difficulty": "advanced",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/lotus-peacock-pose.png",
    "imageAlt": "Practitioner demonstrating Lotus Peacock Pose (Padma Mayurasana)",
    "shortFact": "Strengthens forearms, wrists and elbows Improves flexibility in knees, hips and ankles Stimulates the elimination of toxins Massages digestive system Invigorates circulation Develops balance and focus.",
    "benefits": "Strengthens forearms, wrists and elbows Improves flexibility in knees, hips and ankles Stimulates the elimination of toxins Massages digestive system Invigorates circulation Develops balance and focus",
    "steps": "Lotus Peacock Pose is an advanced inversion that combines an arm balance with a hip opener. The Lotus Pose is your classic posture which is a seated cross-legged pose. Lotus Peacock Pose many benefits include stimulating the elimination of toxins and improving circulation. Lotus Peacock Pose should be practiced at the end of practice, just before savasana and after all other inversions. Begin in a seated lotus position with the right leg folded on top. Stand onto the knees and bring the palms flat onto the floor in front of the body with the fingers pointing backwards towards the knees. Bend the elbows and bring them to touch. Lean the torso forward and place the elbows on either side of the abdomen. Tip further forward to bring the chest onto the upper arms. Shift your weight slightly more forward, bringing the knees off the floor. Stretch the thighs straight back, so the torso, head and legs are in one line. Lift the head and bring the eye gaze forward. Remain in the pose for several breaths. To exit the pose, Bring the knees to the floor and walk the hands back to the start position. Unfold the legs and refold with the left leg on top. Repeat.",
    "teacherCues": "",
    "modifications": "Place head on floor or block Crossed legs in place of lotus",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/lotus-peacock-pose/"
  },
  {
    "id": "scorpion-pose",
    "englishName": "Scorpion pose",
    "sanskritName": "Vrscikasana",
    "difficulty": "advanced",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/scorpion-pose.png",
    "imageAlt": "Practitioner demonstrating Scorpion pose (Vrscikasana)",
    "shortFact": "Strengthens arms and back Open chest Strengthens shoulders and shoulder flexibility Strengthens hips and hip flexibility Improves spinal flexibility and tones spinal nerves Improves circulation in the lower limbs and abdomen Improves balance.",
    "benefits": "Strengthens arms and back Open chest Strengthens shoulders and shoulder flexibility Strengthens hips and hip flexibility Improves spinal flexibility and tones spinal nerves Improves circulation in the lower limbs and abdomen Improves balance",
    "steps": "Scorpion pose combines a challenging inversion with a deep backbend. Scorpion pose is an advanced yoga posture that requires a strong forearm balance. Scorpion pose in its full extension resembles the shape of a striking scorpion that arches its tail above its back and then strikes beyond its head. To start, begin on hands and knees. Lower the forearms to the floor, elbows aligned with shoulders (hands turned slightly in) Straighten one leg at a time and lift into forearm stand. Bend the knees and lift the head. Arch the back and bend deeply, slowly lowering the feet onto the head crown.To exit the pose, lower one leg at a time to the floor, returning to start pose.",
    "teacherCues": "",
    "modifications": "Practice with hands two feet from the wall. Bend the knees and place feet against the wall. Walk the feet down the wall, deepening the backbend. Go as far as is comfortable Place bolster under chest and feet against wall",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/scorpion-pose/"
  },
  {
    "id": "balancing-table-pose-2",
    "englishName": "Balancing Table Pose",
    "sanskritName": "Dandayamna-bharmanasana",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/balancing-table-pose-2.png",
    "imageAlt": "Practitioner demonstrating Balancing Table Pose (Dandayamna-bharmanasana)",
    "shortFact": "Improves balance, coordination and focus Strengthens core and arm muscles Stretches and strengthens back muscles Lengthens spine and improves posture.",
    "benefits": "Improves balance, coordination and focus Strengthens core and arm muscles Stretches and strengthens back muscles Lengthens spine and improves posture",
    "steps": "Balancing Table Top is a building block pose that improves balance, coordination and posture. Balancing Table top is a versatile pose that can be modified to accommodate gentle sequences or switched up to a dynamic core builder for power yoga classes. Balancing Table Top benefits include building arm strength. That makes this pose, a great starter for building a sequence leading to arm balances. Balancing Table Top is equally popular with yoga fitness and yogalates instructors, lengthening the spine and improving posture. To start, begin on hands and knees in table top pose. Slide the right toes back to straighten the right leg. Inhale and lift the right leg parallel to the floor. Stretch the toes towards the back wall. Keep eye gaze on the centre point between the two hands. Raise the left arm parallel to the floor. Reach the fingers to the front wall. Hold for five breaths. To exit the pose, release the hand to the floor, then lower the knee. Repeat on the other side.",
    "teacherCues": "",
    "modifications": "Place blanket under knees Place hand or foot against a wall Place bolster under belly",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/balancing-table-pose-2/"
  },
  {
    "id": "dolphin-plank-pose",
    "englishName": "Dolphin Plank Pose",
    "sanskritName": "Makara Adho Mukha Svanasana",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/dolphin-plank-pose.png",
    "imageAlt": "Practitioner demonstrating Dolphin Plank Pose (Makara Adho Mukha Svanasana)",
    "shortFact": "Strengthens core, shoulders, arms and thighs Stretches foot arch and neck/upper back Tones belly, glutes and thigh muscles Relieves mild depression and stress Improves balance Improves osteoporosis.",
    "benefits": "Strengthens core, shoulders, arms and thighs Stretches foot arch and neck/upper back Tones belly, glutes and thigh muscles Relieves mild depression and stress Improves balance Improves osteoporosis",
    "steps": "Dolphin Plank pose is a modified version of plank pose, practiced with the forearms flat on the mat. Dolphin Plank pose is a challenging core strengthening pose, that also works the arms, thighs and glutes. Dolphin Plank pose is typically practiced as part of power yoga or Vinyasa flow class. Begin from a hands and knees posture. Lower the forearms, one-at-a-time onto the mat. Come onto the toes, as for Dolphin pose. Walk the feet back, until the shoulders are over the elbows and the torso is parallel to the mat. Press the forearms and elbow into the mat. Draw the shoulders down and against the back. Lengthen the tailbone towards the feet and stretch into heels, while lifting the front thighs towards the ceiling. Keep the throat soft and stretch the head away from shoulders. Eye gaze is on the mat. To exit the pose, release the knees to floor and push back to child pose or hand-and-knees pose. Repeat 2 more times, holding the pose for 20-30 seconds.",
    "teacherCues": "",
    "modifications": "Place bolster under belly Place block under forehead Lower knees to ground",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/dolphin-plank-pose/"
  },
  {
    "id": "reverse-plank-pose-variation",
    "englishName": "Reverse Plank Pose Variation",
    "sanskritName": "Purvothanasana",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/reverse-plank-pose-variation.png",
    "imageAlt": "Practitioner demonstrating Reverse Plank Pose Variation (Purvothanasana)",
    "shortFact": "Strengthens arms, chest and legs Stretches shoulders, chest, wrists and ankles.",
    "benefits": "Strengthens arms, chest and legs Stretches shoulders, chest, wrists and ankles",
    "steps": "Reverse Plank Pose Variation is a one-legged version of Reverse Plank Pose. Both Reverse Plank Pose and Reverse Plank Pose Variation may be used as a counter pose to forward seated bend or plank pose. This Reverse plank variation is an all over body stretch, that strengthens and tones from head to toe. Reverse Plank Pose Variation is appropriate for all levels of practice. Begin in staff pose (Danadasana) with hands behind the hips and fingers pointing forward. The hands should be placed several inches behind the hips. The hands should be shoulder width apart. Externally rotate the shoulder blades, pointing fingertips back towards hips and press knuckles into the ground. Draw the shoulder blades into the back. Inhale and lift the hips. Press the toes, balls of feet and sole into the ground. When stable extend the right leg skyward, eye gaze towards the toes. To exit the pose, lower the right leg. On the exhale slowly lower the hips to the ground, returning to staff pose. Repeat other side.",
    "teacherCues": "",
    "modifications": "Using a chair (sit on edge of chair, with hands clasping seat) Practice with one leg bent, the other extended Place blanket or rolled up mat under feet",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/reverse-plank-pose-variation/"
  },
  {
    "id": "side-plank-pose-variation",
    "englishName": "Side Plank Pose Variation",
    "sanskritName": "Vashishtasana Variation",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/side-plank-pose-variation.png",
    "imageAlt": "Practitioner demonstrating Side Plank Pose Variation (Vashishtasana Variation)",
    "shortFact": "In plank, position the hands slightly in front of the shoulders.",
    "benefits": "In plank, position the hands slightly in front of the shoulders. To strengthen the arms press middle finger and knuckles down. When rolling onto the side, keep body in one straight line from crown to heels. Firm the torso by pulling belly button towards spine. At the same time, drawing shoulders, blades and tailbone down. Push out through the heels and flex the feet to engage leg muscles.",
    "steps": "Side Plank Pose variation is the full expression of side plank, the vertical side balancing asana. This pose is commonly practiced in Iyengar classes and Side Plank Pose variation photos are popular on both Twitter and Instagram as the pose captures the power and grace of the yogasana in all its glory. One tweet read, Vashishtasana marries strength and flexibility. In addition to being a great big heart opening pose, Side Plank Pose variation strengthens arm, back and core. Begin from plank pose. Shifting the weight of your body onto the right arm, extend the left arm along the left side of the body. Keep the body straight and slowly roll onto your right side, supported by the right hand, arm and outside of the right foot. Raise the left leg perpendicular to the floor and bend the knee towards the chest. Reach the left hand to the inside of the foot and take hold of the big toe with two index fingers. Straighten the knee and extend the leg, upward. Turn the gaze towards the toe. To exit the pose, bend the knee and release the toe hold. Lower the left leg and hand to the floor and return to plank. Repeat other side.",
    "teacherCues": "",
    "modifications": "Practice with foot soles pressing against a wall Practice with back against a wall Use strap to hold foot in place Place top foot on floor in front of lower leg Practice with lower leg in bent knee resting on floor",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/side-plank-pose-variation/"
  },
  {
    "id": "pose-dedicated-sage-koundinya",
    "englishName": "Pose Dedicated to the Sage Koundinya I",
    "sanskritName": "Eka Pada Koundinyasana I",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/pose-dedicated-sage-koundinya.png",
    "imageAlt": "Practitioner demonstrating Pose Dedicated to the Sage Koundinya I (Eka Pada Koundinyasana I)",
    "shortFact": "Strengthens core muscles, shoulders, arms and wrists Open hips, hamstrings and inner thighs Improves balance and focus Aids digestion Tones belly and spine.",
    "benefits": "Strengthens core muscles, shoulders, arms and wrists Open hips, hamstrings and inner thighs Improves balance and focus Aids digestion Tones belly and spine",
    "steps": "Koundinya I is a standing arm balance that works the splits and a twist into a playful mid-air pose. Koundinya I is an impressive looking pose requiring skill and determination, but it is also a very accessible pose. Preceding poses should include a series of sun salutations to activate the core muscles and open the shoulders, crow and side crow, low lunge to stretch the psoas, and universal spinal twist to limber the back and spine. Begin in tadasana with toes together. Step back into a lunge. Lower the left knee down to the ground. Place the hands onto the front knee and lift up through the torso. Bring the left hand to outside of right knee and turn the upper body to the right, bring the left elbow over the right knee. Place the hands flat down with fingers pointing towards the right edge of mat. Bend the elbows to make a shelf for the outer right thigh. Slide the chest forward and lift both feet off the ground. Stretch the left leg horizontal and the right foot back as for a split and hold. To exit the pose, sweep or step the left leg back to chaturanga. Take a vinyasa or child pose, then roll up to start position. Repeat other side.",
    "teacherCues": "",
    "modifications": "Lean torso onto upper arms Place feet on chairs, bolster or wall Place block under back thigh",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/pose-dedicated-sage-koundinya/"
  },
  {
    "id": "flying-pigeon-pose",
    "englishName": "Flying Pigeon Pose",
    "sanskritName": "Eka Pada Galavasana",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/flying-pigeon-pose.png",
    "imageAlt": "Practitioner demonstrating Flying Pigeon Pose (Eka Pada Galavasana)",
    "shortFact": "Strengths upper body, shoulders, arms and shoulders Improves balance, coordination and focus Tones abdominals, hips and legs Stretches hips and legs Stimulates digestive system.",
    "benefits": "Strengths upper body, shoulders, arms and shoulders Improves balance, coordination and focus Tones abdominals, hips and legs Stretches hips and legs Stimulates digestive system",
    "steps": "Flying pigeon pose is a mash-up of an inversion, arm balance and pigeon pose. To fully realise the challenges and rewards of this pose, imagine practicing pigeon pose mid-air on a trapeze. Preceding poses should include a series of sun salutations, chair pose followed by reverse pigeon to stretch the piriformis, crow practice and handstand. Begin in Tadasana or chair pose . Bend your right leg and place the ankle across your left thigh. Bend the knees and slowly lower to a squat on tiptoes. Place your hands flat on the ground, directly in front of the feet. Bending your elbows, make a shelf for the lower right leg. Rest your right knee onto your right upper arm. The right foot rests on the left upper arm with the toes curling around the bicep (if possible. Now slide the chest forward more and extend the left leg straight. To exit the pose, bring the left foot to the floor. Walk the hands back to tiptoe pose and uncross the right leg. Slowly roll upwards to start in mountain pose. Repeat other side",
    "teacherCues": "",
    "modifications": "Baby flying pigeon (keep back leg bent with toe on floor or block) Practice with bolster under chest, forehead on blocks and back foot pressing against a wall Use strap around upper arms to keep elbows in",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/flying-pigeon-pose/"
  },
  {
    "id": "shoulder-pressing-pose",
    "englishName": "Shoulder-pressing pose",
    "sanskritName": "Bhujapidasana",
    "difficulty": "beginner",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/shoulder-pressing-pose.png",
    "imageAlt": "Practitioner demonstrating Shoulder-pressing pose (Bhujapidasana)",
    "shortFact": "Strengthens arm muscles Increases flexibility in shoulder joints and lower back Massages abdomen and internal organs, especially the pancreas Improves balance and concentration.",
    "benefits": "Strengthens arm muscles Increases flexibility in shoulder joints and lower back Massages abdomen and internal organs, especially the pancreas Improves balance and concentration",
    "steps": "Shoulder-pressing pose is a beginner arm balance. This pose requires strength in the arms and shoulders, though focus and balance are the real keys to success for this pose. To learn the shoulder-pressing pose, it is suggested to practice preparatory poses which include plank and vinyasa transitions to gain strength and momentum. To enter the pose, begin in a squat with feet shoulders-width apart. Bring the arms underneath the knees. Place the palms flat on the mat to the outside of each foot. Begin shifting the weight forward onto the hands. When the upper arms are under the thighs, squeeze them together. Now, rock the hips gently rock back to lift the feet off the ground. To anchor the pose, cross the ankles and lift the sternum. Hold for 5-10 breaths. To exit the pose, uncross the feet and lower them to the mat. Release the arms and return to the start position.",
    "teacherCues": "",
    "modifications": "Place blocks under hands, hips or both Practice facing a wall, walk feet up the wall and press feet flat against the wall Keep feet on ground",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/shoulder-pressing-pose/"
  },
  {
    "id": "side-crow",
    "englishName": "Side Crow",
    "sanskritName": "Parsva Bakasana",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/side-crow.png",
    "imageAlt": "Practitioner demonstrating Side Crow (Parsva Bakasana)",
    "shortFact": "Strengthens shoulders, arms and wrists Tones abdomen, hips and thighs Massages inner organs, improving digestion Improves balance and concentration.",
    "benefits": "Strengthens shoulders, arms and wrists Tones abdomen, hips and thighs Massages inner organs, improving digestion Improves balance and concentration",
    "steps": "Parsva Bakasana or Side Crow as a posture works on many levels – both as an arm balance challenge, a core strengthener and also a detoxifying twist. The versatility of this pose also lends it to be an intermediate posture to practice. Begin in a low squat with toes together (malasana). Walk hands around to the right side until the left elbow is outside the right knee. Place palms flat onto ground. Soften the belly and twist deeper. Bend the elbows as for push-up pose (chaturanga). Bring the weight onto the hands and lift the hips, bringing the feet off the ground. The right knee should rest on left elbow. Slowly straighten the arms. To exit the pose, release the feet and walk the hands back to malasana. Repeat other side.",
    "teacherCues": "",
    "modifications": "Place head on bolster or block Place bolster or block under thigh to support lift Practice next to wall, press feet into wall to support lift Place Strap around upper arms",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/side-crow/"
  },
  {
    "id": "one-legged-chaturanga",
    "englishName": "One legged Chaturanga",
    "sanskritName": "Eka Pada Chaturanga",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/one-legged-chaturanga.png",
    "imageAlt": "Practitioner demonstrating One legged Chaturanga (Eka Pada Chaturanga)",
    "shortFact": "Strengthens shoulders,back, arms and legs Tones back, hips and glutes Improves balance and concentration.",
    "benefits": "Strengthens shoulders,back, arms and legs Tones back, hips and glutes Improves balance and concentration",
    "steps": "One legged chaturanga is a variation of the classic staff pose- Chaturanga Dandasana. Begin from Downward Facing Dog (Adho Mukha Svanasana). Shift your upper body forward, coming into plank position (shoulders over hands). Bend the elbows back to 90° and lower the head and chest to four limbed staff pose (chaturanga). When you are stable, bring your weight into the left leg and foot. Lift the right foot off the ground. Hold for 5-10 breaths. To exit the pose, lower foot to ground. Return to Downward Facing Dog. Repeat other side.",
    "teacherCues": "",
    "modifications": "Bring knees to floor Place bolster or blocks under abdomen Bring forearms to wedge, blanket or floor Press raised foot against wall",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/one-legged-chaturanga/"
  },
  {
    "id": "swan-pose",
    "englishName": "Swan pose",
    "sanskritName": "Hamsasana",
    "difficulty": "beginner",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/swan-pose.png",
    "imageAlt": "Practitioner demonstrating Swan pose (Hamsasana)",
    "shortFact": "Massages the abdomen and internal organs Stimulates metabolism and digestive system Develops balance and muscular control Improves strength and flexibility of hands and wrists Tones hips and legs Strengthens neck and shoulders.",
    "benefits": "Massages the abdomen and internal organs Stimulates metabolism and digestive system Develops balance and muscular control Improves strength and flexibility of hands and wrists Tones hips and legs Strengthens neck and shoulders",
    "steps": "Begin in cow/cat pose (Marjaryasana). Bring the knees apart and the feet together. Push the chest forward and turn the hands so the fingers point towards the body. Bring the wrists towards each other and bend the elbows. Rest the abdomen on top of the elbows and upper arms. Straighten the legs one and at a time, placing the tops of the toes or balls of the feet on the floor. Lengthen the neck keeping the eye gaze straight ahead. To come out of the pose, bend the knees and return to the start position. Beginners may hold the pose for 1-5 breathes and repeat three times.",
    "teacherCues": "",
    "modifications": "Keep knees bent and on the floor Place blocks under shoulders or hips to help stabilise the body Practice with heels of feet pressed against the wall",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/swan-pose/"
  },
  {
    "id": "visvamitras-pose",
    "englishName": "Visvamitra’s Pose",
    "sanskritName": "Visvamitrasana",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/visvamitras-pose.png",
    "imageAlt": "Practitioner demonstrating Visvamitra’s Pose (Visvamitrasana)",
    "shortFact": "Strengthens arms and legs Stretches and tones sciatic nerves, legs and hips Strengthens core muscles Improves concentrations and balance.",
    "benefits": "Strengthens arms and legs Stretches and tones sciatic nerves, legs and hips Strengthens core muscles Improves concentrations and balance",
    "steps": "Begin in a lunge (right foot forward). Bring the right hand to the outside of the right foot, working the arm and shoulder under the right thigh. Turn the left foot flat. Extend the right leg in front. Raise the left arm upwards and turn the head towards the fingertips. To come out of the pose, lower the left hand and then the right foot to the ground. Unbind the right arm and shoulder, returning to the lunge. Repeat the other side.",
    "teacherCues": "",
    "modifications": "½ Vishvamitra’s pose is practiced with back leg bent (on one knee) ¾ Vishvamitra’s pose is practiced with front foot pressed against the wall Place a brick under front hand before lifting the leg up",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/visvamitras-pose/"
  },
  {
    "id": "one-legged-crow",
    "englishName": "One-Legged Crow Pose",
    "sanskritName": "Eka Pada Bakasana",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/one-legged-crow.png",
    "imageAlt": "Practitioner demonstrating One-Legged Crow Pose (Eka Pada Bakasana)",
    "shortFact": "Improves balance and coordination Improves focus and concentration Strengthens arms, wrists, shoulders and back Strengthens core muscles, pelvis and legs Balances the nervous system.",
    "benefits": "Improves balance and coordination Improves focus and concentration Strengthens arms, wrists, shoulders and back Strengthens core muscles, pelvis and legs Balances the nervous system",
    "steps": "Begin in mountain pose (Tadasana) . Step the feet hips width apart. Toes may turn out slightly. Bend the knees to a low squat. Come on to tip toes and bring the hands flat on the ground in front of the feet. Shift the weight into the hands, pressing down with forefinger and thumb. The elbows are bent making a tripod. Shift the weight onto the hands and raise the hips slightly, to lift the knees onto the upper arms and raising the feet off the ground. (crow pose) Next, shift the weight onto the left hand and stretch the right leg back until it is straight. Focus the eye gaze on the nose tip (nasikagra drishti). To exit the pose, bend right knee to upper arm, then lower feet. Return to mountain pose. Repeat other side.",
    "teacherCues": "",
    "modifications": "Stand/squat-ing on a block helps to raise hips Place bolster or stack of blocks in front to rest head Bind arms with straps to support arms and shoulders Rest left knee on stack of blocks and or extend foot against wall",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/one-legged-crow/"
  },
  {
    "id": "eight-angle-pose",
    "englishName": "Eight Angle Pose",
    "sanskritName": "Astavakrasana",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/eight-angle-pose.png",
    "imageAlt": "Practitioner demonstrating Eight Angle Pose (Astavakrasana)",
    "shortFact": "Strengthens wrists, arms, shoulders Strengthens back and core muscles Tones thighs and hips Improves balance and coordination Develops control of the nervous system.",
    "benefits": "Strengthens wrists, arms, shoulders Strengthens back and core muscles Tones thighs and hips Improves balance and coordination Develops control of the nervous system",
    "steps": "Begin in staff pose with legs extended, hands by the hips. Bend the right leg and thread the right upper arm underneath the thigh. Lift the hips and left leg off the floor as in Elephant’s trunk pose. Cross the left ankle over the right and bend the elbows, bringing the chest forward and parallel to the floor. Stretch both legs to the right side. To come out of the pose, uncross the ankles and lower to staff pose. Repeat the other side.",
    "teacherCues": "",
    "modifications": "From elephant trunk pose, lower the hips down to the ground. Now cross left leg over right and squeeze the legs up and out, toes pointing towards the sky Place three blocks under the hips and one brick under each hand to help lift up Place two or three blocks in front of the hands to act as a crash pad for head",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/eight-angle-pose/"
  },
  {
    "id": "firefly",
    "englishName": "Firefly Pose",
    "sanskritName": "Tittibhasana",
    "difficulty": "beginner",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/firefly.png",
    "imageAlt": "Practitioner demonstrating Firefly Pose (Tittibhasana)",
    "shortFact": "Develops arm muscles Increases flexibility of shoulder joints and lower back Massages and tones abdomen and intestines Stimulates pancreas.",
    "benefits": "Develops arm muscles Increases flexibility of shoulder joints and lower back Massages and tones abdomen and intestines Stimulates pancreas",
    "steps": "Begin in a low squat (namaskarasana). Bring the torso forward. Slide the shoulders and upper arms underneath the thighs. Bring hands around the back of the legs and place them behind the feet. Rest the thighs on the upper arms. Transfer the weight of the body from the feet to the hands and arms. Now lift the feet off the ground and extend the legs. To come out of the pose, lower the feet lightly to the ground and come back to start position –squat.",
    "teacherCues": "",
    "modifications": "Beginners may find placing bricks under the hands and/or feet will provide the extra boost needed to lift out and up in this pose Students with tight hamstrings and/or weak knees may keep knees soft or bent in this pose (see variations)",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/firefly/"
  },
  {
    "id": "side-plank",
    "englishName": "Side Plank Pose",
    "sanskritName": "Vasisthasana",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/side-plank.png",
    "imageAlt": "Practitioner demonstrating Side Plank Pose (Vasisthasana)",
    "shortFact": "Strengthens and tone leg muscles, feet and ankles Strengths hands, wrists and arms Strengths shoulders, upper back and spine Improves balance Calms nervous system.",
    "benefits": "Strengthens and tone leg muscles, feet and ankles Strengths hands, wrists and arms Strengths shoulders, upper back and spine Improves balance Calms nervous system",
    "steps": "Begin in plank pose (phalahakasana). Grasp the ground with the toes and stretch back into the heels. Move the shoulders forward over the hands. Root the right hand, pressing the finger tips into the ground. Shift the weight into the right hand and arm. Roll onto the outer edge of the right foot. Lift the left arm, extending it upwards, turning the body and head to face out. Bring left foot and leg on top of the right. To come out of the pose lower the left arm and leg. Return to plank pose. Repeat on the other side.",
    "teacherCues": "",
    "modifications": "For wrists weakened or sore from carpal tunnel syndrome come down to the forearms (Dolphin side plank) For weakened shoulders , bring lower leg knee down and top foot to ground behind (place a folded mat or blanket under the knees) For kyphosis or curvature of the spine bring lower leg knee down and top foot to ground behind, (place a folded mat or blanket under the knees) and rest top arm along the body or bend the elbow with hand on hip or wrap top arm around the back For pregnancy yoga and/or to tabilise weak back and hips leave the top foot on the ground – turning it sideways and rooting into the mat instead of lifting it up.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/side-plank/"
  },
  {
    "id": "crow-crane",
    "englishName": "Crow Pose",
    "sanskritName": "Kakasana",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/crow-crane.png",
    "imageAlt": "Practitioner demonstrating Crow Pose (Kakasana)",
    "shortFact": "Strengthens upper body, arms, shoulders, chest, abs & upper back Strengthens hips Develops focus, balance & coordination Increases concentration Improves circulation.",
    "benefits": "Strengthens upper body, arms, shoulders, chest, abs & upper back Strengthens hips Develops focus, balance & coordination Increases concentration Improves circulation",
    "steps": "Begin in a low squat – namaskarasana with feet shoulder width apart and toes pointed out at a 45° angle. Place the hands flat on the floor in front of the feet. Bend the elbows and slowly shift your weight forward onto the hands. The heels will begin to come off the floor. Engage the lower abdominal muscles to lift one knee and then the other onto the upper arms. Now bring the weight fully into the arms and hands. Squeeze the insides of the knees to the upper arms lifting one foot and then the other off the ground. To exit the pose lower the feet back to a low squat bring the hands into prayer to namaskarasana.",
    "teacherCues": "",
    "modifications": "Bring the feet onto a block to use as a perch encourages playfulness when learning the pose. This prop also provides a lift, helping to bring the chest forward and the upper arms in front of the shins. The use of a block or blanket as a crash inspires confidence and helps new students to bring the head forward without fear.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/crow-crane/"
  },
  {
    "id": "plank",
    "englishName": "Plank Pose",
    "sanskritName": "Phalahakasana",
    "difficulty": "intermediate",
    "category": "arm-balances",
    "categories": [
      "arm-balances"
    ],
    "image": "/poses/plank.png",
    "imageAlt": "Practitioner demonstrating Plank Pose (Phalahakasana)",
    "shortFact": "Strengthens throughout the body: legs, core, back, shoulders, arms, hands and neck.",
    "benefits": "Strengthens throughout the body: legs, core, back, shoulders, arms, hands and neck. Powerful and invigorating Lengthens the spine Builds endurance",
    "steps": "Begin from hands and knees. Line up the palms just slightly wider than shoulder distance apart and spread the fingers wide on the mat, the index finger turns to face forward. Press down into the hands and step the legs back to straight. Firm the body from the legs all the way up the torso, keeping energy right out to the top of the head. See Technical comments for more details. This posture can be used as part of a flow through sun salutations or held on its own for several breaths. To come out, lower the knees down to the floor again or press back to Down Dog or lower through Chaturanga Dandasana to release to the floor.",
    "teacherCues": "",
    "modifications": "Perform with the knees on the ground for more support for abdominals and upper body Perform on elbows or fingertips Roll the edge of the mat or use a wedge under the palms to decrease the angle of the wrist extension.",
    "sourceUrl": "https://www.yogaclassplan.com/yoga-pose/plank/"
  }
];

export const POSES_BY_CATEGORY = {
  standing: ALL_POSES.filter((p) => p.categories?.includes("standing")),
  "seated-twists": ALL_POSES.filter((p) => p.categories?.includes("seated-twists")),
  reclining: ALL_POSES.filter((p) => p.categories?.includes("reclining")),
  inversions: ALL_POSES.filter((p) => p.categories?.includes("inversions")),
  "forward-bends": ALL_POSES.filter((p) => p.categories?.includes("forward-bends")),
  "back-bends": ALL_POSES.filter((p) => p.categories?.includes("back-bends")),
  "arm-balances": ALL_POSES.filter((p) => p.categories?.includes("arm-balances")),
};

const LEGEND_TIER_POSE_IDS = new Set([
  "scorpion-pose",
  "lotus-peacock-pose",
  "chin-stand",
  "tripod-headstand",
  "firefly-pose-variation-c",
  "compass-pose",
  "monkey-pose",
  "half-bound-lotus-tiptoe-pose",
  "womb-embryo-pose",
  "straight-angle-pose",
  "side-reclining-leg-lift",
  "revolved-downward-dog-pose",
  "pose-dedicated-to-the-sage-marichi-i",
]);

/**
 * The scraped `difficulty` field is wrong for several peak postures, so these
 * ids are classified explicitly and take precedence over the scraped value.
 */
const TIER_OVERRIDES: Record<string, SkillTier> = {
  "hand-stand": "pro",
  headstand: "pro",
  "noose-pose": "pro",
  "one-legged-eight-limbed-posture": "pro",
  "one-legged-wheel-pose": "pro",
  firefly: "legend",
  "swan-pose": "legend",
  "shoulder-pressing-pose": "legend",
  "half-moon-pose": "amateur",
};

export function getPoseSkillTier(pose: Pose): SkillTier {
  const override = TIER_OVERRIDES[pose.id];
  if (override) return override;

  if (LEGEND_TIER_POSE_IDS.has(pose.id)) {
    return "legend";
  }

  if (pose.difficulty === "legend") return "legend";
  if (pose.difficulty === "pro") return "pro";
  if (pose.difficulty === "amateur") return "amateur";
  if (pose.difficulty === "beginner") return "beginner";

  if (pose.difficulty === "advanced" || pose.category === "arm-balances" || pose.category === "inversions") {
    return "pro";
  }

  if (pose.difficulty === "intermediate") {
    return "amateur";
  }

  return "beginner";
}

const POSE_BY_ID = new Map<string, Pose>(
  [...STARTER_POSES, ...ALL_POSES].map((pose) => [pose.id, pose])
);

/**
 * Tier for a stored pose id, or null when the id is not in either dataset.
 */
export function getPoseTierById(id: string): SkillTier | null {
  const pose = POSE_BY_ID.get(id);
  return pose ? getPoseSkillTier(pose) : null;
}

/**
 * Every posture a learner can study: the ten starters plus the full library,
 * deduplicated by id (a few starters repeat inside ALL_POSES).
 */
export const ATLAS_POSES: Pose[] = [...POSE_BY_ID.values()];

export const POSES_BY_TIER: Record<SkillTier, Pose[]> = {
  beginner: ALL_POSES.filter((p) => getPoseSkillTier(p) === "beginner"),
  amateur: ALL_POSES.filter((p) => getPoseSkillTier(p) === "amateur"),
  pro: ALL_POSES.filter((p) => getPoseSkillTier(p) === "pro"),
  legend: ALL_POSES.filter((p) => getPoseSkillTier(p) === "legend"),
};

