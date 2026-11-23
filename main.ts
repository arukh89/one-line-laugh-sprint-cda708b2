import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I finally cleared my inbox to zero, then my bank emailed to say my balance is zero too — at least one of us is organized.";

// The gate counts characters, not UTF-16 code units, so measure the line
// in code points (the em dash is one code point either way, but this stays
// correct if the line ever gains an astral character).
const CHAR_COUNT = [...LINE].length;

if (CHAR_COUNT < 1 || CHAR_COUNT > 200) {
  throw new Error(`entry must be 1-200 characters, got ${CHAR_COUNT}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
