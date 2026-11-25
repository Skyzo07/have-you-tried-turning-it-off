// "Have You Tried Turning It Off?" — one funny line from a hopeless
// tech support agent to a desperate customer.
// Writes the entry line to <output dir>/entry.txt (no trailing newline:
// the line is the whole file).

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm going to put you on a brief hold while I Google your exact problem — out loud, if that's okay.";

// Gate: the entry must be UTF-8 text of 1 to 199 characters.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry line is ${LINE.length} chars, must be 1–199`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length}-char entry to ${join(outDir, "entry.txt")}`);
