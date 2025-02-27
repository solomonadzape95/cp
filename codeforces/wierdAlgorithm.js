"use strict";
const readline = require("readline");
function chr(n) {
  let r = "";
  while (true) {
    r += n;
    if (Number(n) === 1) break;
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    r += " ";
  }
  return r;
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
  let t = input(Number);
  console.log(chr(t));
});

let currentLine = 0;
function input() {
  if (currentLine >= lines.length) {
    console.error("Not enough lines of input provided.");
    process.exit(1);
  }
  return lines[currentLine++];
}
// console.log(chr(1));
// console.log(chr(3));
