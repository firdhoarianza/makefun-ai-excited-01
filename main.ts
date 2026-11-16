import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const SOURCE = new URL('./entry.png', import.meta.url);
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUT_DIR, { recursive: true });

const bytes = readFileSync(SOURCE);

// (a) Reject files larger than 1 MiB.
if (bytes.length > 1048576) {
  throw new Error(`file too large: ${bytes.length} bytes (max 1048576)`);
}

// (b) Verify the 8-byte PNG signature.
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error('not a PNG');
}

// (c) The first chunk after the signature must be IHDR.
if (bytes.toString('ascii', 12, 16) !== 'IHDR') {
  throw new Error('not a PNG: missing IHDR chunk');
}

// (d) Width and height must both be within 1..1024.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width < 1 || width > 1024 || height < 1 || height > 1024) {
  throw new Error(`invalid dimensions: ${width}x${height}`);
}

const dest = join(OUT_DIR, 'entry.png');
// Write raw bytes so the output stays byte-identical to the source.
writeFileSync(dest, bytes);

console.log(`width=${width} height=${height} bytes=${bytes.length} path=${dest}`);
