"use strict";
const readline = require("readline");
function chr(s) {
  return a < b ? (b < c ? "STAIR" : b > c ? "PEAK" : "NONE") : "NONE";
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
    let [a, b, c] = input().split(" ").map(Number);
    console.log(chr(a, b, c));
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
console.log(chr(1, 2, 3));
console.log(chr(1, 5, 3));
