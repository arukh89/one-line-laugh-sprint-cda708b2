import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I finally cleared my inbox to zero, then my bank emailed to say my balance is zero too — at least one of us is organized.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
