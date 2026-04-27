import fs from "fs";
import path from "path";

const BUILTIN_ASSETS = new Set([
  "favicon.ico",
  "next.svg",
  "vercel.svg",
  "globe.svg",
  "file.svg",
  "window.svg",
]);

const RASTER = /\.(jpe?g|png|webp|avif)$/i;

/** Lower = more likely a folder from ChatGPT / exports. */
function pathKindScore(relativePath: string): number {
  const p = relativePath.toLowerCase().replace(/\\/g, "/");
  if (/(^|\/)chat\s*gpt(\/|$)/.test(p) || p.includes("chat-gpt/")) return 0;
  if (p.includes("chatgpt") || p.includes("/gpt/") || p.includes("export")) return 1;
  if (p.includes("chat")) return 2;
  return 3;
}

function nameScore(fileName: string): number {
  const base = path.basename(fileName, path.extname(fileName)).toLowerCase();
  if (/^(portrait|profile|headshot|me|self|avatar|photo)$/i.test(base)) return 0;
  if (/(portrait|profile|headshot|photo|avatar|self)/.test(base)) return 1;
  return 2;
}

function shouldSkipDir(name: string): boolean {
  return name.startsWith(".") || name === "node_modules" || name === ".next";
}

type Hit = {
  relUrl: string;
  name: string;
  nameScore: number;
  pathKind: number;
  depth: number;
  /** Most recently replaced file wins on ties. */
  mtimeMs: number;
};

function walkPublic(
  dir: string,
  publicRoot: string,
  dirDepth: number,
  out: Hit[],
): void {
  if (dirDepth > 12) return;
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (shouldSkipDir(e.name)) continue;
      walkPublic(full, publicRoot, dirDepth + 1, out);
      continue;
    }
    if (!RASTER.test(e.name) || BUILTIN_ASSETS.has(e.name.toLowerCase())) {
      continue;
    }
    const rel = path.relative(publicRoot, full);
    if (rel.startsWith("..") || !rel) continue;
    const relUrl = `/${rel.split(path.sep).join("/")}`;
    const st = fs.statSync(full);
    out.push({
      relUrl,
      name: e.name,
      nameScore: nameScore(e.name),
      pathKind: pathKindScore(rel),
      depth: rel.split(path.sep).length,
      mtimeMs: st.mtimeMs,
    });
  }
}

function compareHits(a: Hit, b: Hit): number {
  const p = a.pathKind - b.pathKind;
  if (p !== 0) return p;
  const n = a.nameScore - b.nameScore;
  if (n !== 0) return n;
  if (a.mtimeMs !== b.mtimeMs) return b.mtimeMs - a.mtimeMs;
  if (a.depth !== b.depth) return a.depth - b.depth;
  return a.relUrl.localeCompare(b.relUrl);
}

export type PublicPortrait = {
  src: string;
  /** Bust client caches when the file is replaced at the same path. */
  rev: string;
};

export function getPublicPortrait(): PublicPortrait | null {
  try {
    const publicRoot = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicRoot)) return null;
    const hits: Hit[] = [];
    walkPublic(publicRoot, publicRoot, 0, hits);
    if (hits.length === 0) return null;
    hits.sort(compareHits);
    const h = hits[0];
    return { src: h.relUrl, rev: String(Math.floor(h.mtimeMs)) };
  } catch {
    return null;
  }
}

