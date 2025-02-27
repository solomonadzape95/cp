"use strict";
const readline = require("readline");
function chr(s) {
  return s[0] === "a" || s[1] === "b" || s[2] === "c" ? "YES" : "NO";
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
    // let [a, b, c] = input().split(" ").map(Number);
    // console.log(chr(a, b, c));
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
console.log(chr('acb'))
console.log(chr('cba'))
console.log(chr('cab'))
console.log(chr('bca'))