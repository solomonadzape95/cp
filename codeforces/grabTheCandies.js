"use strict";
const readline = require("readline");
function chr(s, n) {
  let odd = 0,
    even = 0;
  for (let i = 0; i < n; i++) {
    s[i] % 2 === 0 ? even += s[i] : odd+= s[i];
  }
  return even > odd ? "YES" : "NO";
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
    let s = input().split(" ").map(Number);
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
console.log(chr([1, 2, 3, 4], 4));
console.log(chr([1, 1, 1, 2], 4));
