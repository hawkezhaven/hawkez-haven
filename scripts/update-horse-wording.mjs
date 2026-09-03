import fs from "node:fs";

const path = "src/lib/horses.ts";
let content = fs.readFileSync(path, "utf8");

const replacements = [
  [
    'lookingForward: "Electra is a future rehoming candidate. When ready, her future home will require horse experience and an understanding of sensitive, intelligent mares.",',
    'lookingForward: "Electra is a future rehoming candidate, but there is no rush. Following her significant injury, she is being given time to physically and mentally readjust, rebuild confidence and gradually return to appropriate work. As she progresses, we will assess what type of riding life, if any, best suits her.",',
  ],
  [
    'lookingForward: "Kohan is a future rehoming candidate seeking an experienced, active equestrian partner who appreciates his drive, intelligence, and warrior spirit.",',
    'lookingForward: "Kohan is a future rehoming candidate, but there is no rush. Following his significant injury and recovery, he is being given time to physically and mentally readjust, rebuild confidence and gradually return to appropriate work. As he progresses, we will assess what type of riding life best suits him.",',
  ],
];

for (const [from, to] of replacements) {
  if (!content.includes(from)) {
    throw new Error(`Expected horse wording was not found: ${from}`);
  }
  content = content.replace(from, to);
}

fs.writeFileSync(path, content);
console.log("Updated Electra and Kohan rehabilitation wording.");
