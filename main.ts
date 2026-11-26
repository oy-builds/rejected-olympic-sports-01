import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Rejected Olympic Sports — Synchronized Queue Standing.
// Four athletes hold their place in a 40-minute airport line, judged on
// posture and patience — gold goes to whoever sighs last.
const ENTRY =
  "Synchronized Queue Standing: four athletes hold their place in a 40-minute airport line, judged on posture and patience — gold goes to whoever sighs last.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output/entry.txt";
const outFile = outDir.endsWith("entry.txt") ? outDir : join(outDir, "entry.txt");
const outPath = outFile.split("/").slice(0, -1).join("/") || ".";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

mkdirSync(outPath, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outFile}`);
