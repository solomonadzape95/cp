"use strict";
const readline = require("readline");
function chr(a, b, c) {
  return a + b >= 10 || b + c >= 10 || a + c >= 10 ? "YES" : "NO";
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
console.log(chr(2,4,5))
console.log(chr(6,4,5))