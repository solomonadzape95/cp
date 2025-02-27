"use strict";
const readline = require("readline");
function chr(s) {
  let n = 0;
  for (let i = 0; i < 10; i++) {
    n += "codeforces".at(i) !== s.at(i) ? 1 : 0;
  }
  return n;
}
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let lines = [];
rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", () => {
  let t = parseInt(input(), 10);
  for (let i = 0; i < t; i++) {
    let s = input();
    console.log(chr(s));
  }
});

let currentLine = 0;
function input() {
  if (currentLine >= lines.length) {
    console.error("Not enough lines of input provided.");
    process.exit(1);
  }
  return lines[currentLine++];
}
console.log(chr('coolforsez'))
console.log(chr('cadafurcie'))
console.log(chr('codeforces'))
console.log(chr("paiuforces"));