import fs from "node:fs";

const horsePath = "src/lib/horses.ts";
let horseContent = fs.readFileSync(horsePath, "utf8");

const from = 'riderLevel: "Confident Rider (Honest, thoughtful nature; appreciates a steady, confident partner).",';
const to = 'riderLevel: "Confident Beginner (Honest, thoughtful nature; appreciates a steady, supportive partner).",';

if (!horseContent.includes(from)) {
  throw new Error("Expected Khan rider level was not found.");
}

horseContent = horseContent.replace(from, to);
fs.writeFileSync(horsePath, horseContent);

console.log("Updated Khan rider level to Confident Beginner.");
