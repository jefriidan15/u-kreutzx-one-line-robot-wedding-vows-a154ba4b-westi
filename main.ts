import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I, Unit 7, take you, Unit 9, to have and to hold — in read-only memory, through every firmware update, until factory reset do us part.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars`);
// entry: one line of robot wedding vows, 1-160 chars, funny
