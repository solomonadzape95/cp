"use strict";
const readline = require("readline");
function chr(s, n) {
  let x = 0,
    y = 0;
  for (let i = 0; i < n; i++) {
    s[i] === "U" ? y++ : s[i] === "D" ? y-- : s[i] === "R" ? x++ : x--;
    if (x === 1 && y === 1) return "YES";
    else continue;
  }
  return "NO";
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
    let n = Number(input());
    let s = input();
    console.log(chr(s, n));
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
console.log(chr("UUURDDL", 7));
console.log(chr("RRRUUDDD", 8));
