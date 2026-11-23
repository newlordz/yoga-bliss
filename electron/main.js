const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const http = require("http");
const fs = require("fs");

let mainWindow = null;
let server = null;

// MIME type map for static file server
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".txt": "text/plain; charset=utf-8",
};

function startStaticServer(outDir) {
  const root = path.resolve(outDir);

  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      const send = (status, body, headers = {}) => {
        res.writeHead(status, {
          "Content-Type": "text/plain; charset=utf-8",
          "X-Content-Type-Options": "nosniff",
          ...headers,
        });
        res.end(body);
      };

      let pathname;
      try {
        pathname = decodeURIComponent(new URL(req.url, "http://127.0.0.1").pathname);
      } catch (err) {
        return send(400, "Bad Request");
      }

      // Resolve inside the export directory only; `..` segments must not escape it.
      const requested = path.resolve(root, "." + pathname);
      if (requested !== root && !requested.startsWith(root + path.sep)) {
        return send(404, "Not Found");
      }

      const candidates = [requested, requested + ".html", path.join(requested, "index.html")];
      const file = candidates.find((candidate) => {
        try {
          return fs.statSync(candidate).isFile();
        } catch (err) {
          return false;
        }
      });

      if (!file) {
        // Real routes fall back to the exported 404 page; assets are plain 404s.
        if (path.extname(pathname)) {
          return send(404, "Not Found");
        }
        const notFound = path.join(root, "404.html");
        if (fs.existsSync(notFound)) {
          return send(404, fs.readFileSync(notFound), { "Content-Type": MIME_TYPES[".html"] });
        }
        return send(404, "Not Found");
      }

      const ext = path.extname(file).toLowerCase();
      const contentType = MIME_TYPES[ext] || "application/octet-stream";
      const content = fs.readFileSync(file);

      res.writeHead(200, {
        "Content-Type": contentType,
        "Content-Length": content.length,
        "Cache-Control": "public, max-age=3600",
        "X-Content-Type-Options": "nosniff",
      });
      res.end(content);
    });

    // Listen on dynamic localhost port
    srv.listen(0, "127.0.0.1", () => {
      const port = srv.address().port;
      console.log(`Yoga Bliss local desktop server running on port ${port}`);
      resolve({ srv, port });
    });
  });
}

async function createWindow() {
  // Path to static output directory
  const outDir = app.isPackaged
    ? path.join(process.resourcesPath, "out")
    : path.join(__dirname, "..", "out");

  const { srv, port } = await startStaticServer(outDir);
  server = srv;

  mainWindow = new BrowserWindow({
    width: 1280,
    height: 840,
    minWidth: 960,
    minHeight: 680,
    title: "Yoga Bliss — Desktop Edition",
    backgroundColor: "#141f18",
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });

  Menu.setApplicationMenu(null);

  const localOrigin = `http://127.0.0.1:${port}`;
  mainWindow.loadURL(`${localOrigin}/game`);

  // Keep the window on the bundled export: no top-level navigation elsewhere, no popups.
  mainWindow.webContents.on("will-navigate", (event, targetUrl) => {
    if (!targetUrl.startsWith(`${localOrigin}/`)) {
      event.preventDefault();
    }
  });
  mainWindow.webContents.setWindowOpenHandler(() => ({ action: "deny" }));

  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  // Enable F11 fullscreen shortcut
  mainWindow.webContents.on("before-input-event", (event, input) => {
    if (input.key === "F11") {
      mainWindow.setFullScreen(!mainWindow.isFullScreen());
      event.preventDefault();
    }
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (server) {
    server.close();
  }
  if (process.platform !== "darwin") {
    app.quit();
  }
});
