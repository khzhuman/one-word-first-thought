import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The first word that came to mind — one word, no second draft.
const firstThought = "Oops";

// The entry must be exactly one word: no spaces, no punctuation tricks.
if (/\s/.test(firstThought) || firstThought.length === 0) {
  throw new Error("entry must be exactly one word");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";

function main(): void {
  console.log(firstThought);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), firstThought, "utf8");
}

main();
