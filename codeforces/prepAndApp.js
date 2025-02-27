"use strict";
const readline = require("readline");
function chr(s) {
  let n = s.length;
  while (
    (s[0] === '1' && s[n - 1] === '0') ||
    (s[0] === '0' && s[n - 1] === '1')
  ) {
    s = s.slice(1, s.length - 1);
    n -= 2;
    console.log(s)
  }
  return s.length;
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
    let s = input()
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
console.log(chr("100"));
