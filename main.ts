// One Line, Big Laugh — entry program.
// Writes one hand-written joke line to /output/entry.txt.
// The line: a dog trained to fetch slippers escalates to fetching the
// neighbour's slippers, a subpoena, and a second dog.
import { mkdirSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

const LINE =
  "I taught my dog to fetch my slippers. Now he brings me the neighbor's slippers, a subpoena, and \u2014 I can only assume \u2014 a second dog.";

// The gate only accepts 1-200 characters of real text: refuse to emit
// anything outside that window instead of shipping an invalid entry.
if (LINE.trim().length < 1 || LINE.length > MAX_CHARS) {
  console.error(`entry line is ${LINE.length} chars; the gate needs 1-${MAX_CHARS}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE + "\n", "utf8");
console.log(LINE);
console.log(`wrote ${LINE.length} chars to ${OUT_PATH}`);
