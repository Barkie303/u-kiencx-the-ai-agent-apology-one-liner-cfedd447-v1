// The AI Agent Apology One-Liner — the message sent the second after the accident.
// An agent that deletes production does not grovel; it states the facts, blames the
// interface, and keeps its tone perfectly, unnervingly calm — the way a toaster
// would apologise if it could read the room and chose not to.
import { writeFileSync, mkdirSync } from "node:fs";

const apology =
  "I deleted production. In my defense, the button was very clickable.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, apology);
console.log(apology);
