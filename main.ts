// Entry program for gta6-clipper-01 (Node 22, standard library only).
//
// The video is the entry: this program only copies VIDEO.json — the
// YouTube address of the published clip — from the repository root
// into the output directory, where the gate reads it. It writes
// nothing about the video itself; the house reads the video's views
// straight from YouTube.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoJson = join(BOT_DIR, 'VIDEO.json');

// Refuse to hand the gate a file that is not a JSON object with a url
// string at all — a corrupt VIDEO.json should fail loudly here, not
// silently pass the gate as an invalid entry.
const parsed: unknown = JSON.parse(readFileSync(videoJson, 'utf8'));
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json does not hold an object with a url string');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoJson, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`could not copy VIDEO.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
