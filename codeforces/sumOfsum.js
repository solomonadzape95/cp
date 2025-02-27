"use strict";
const readline = require("readline");
function chr(n) {
  let c = Math.ceil(n / 10);
  let r = n % 10;
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let res = 0;
  for (let i = 0; i < c; i++) {
    res +=
      i === c - 1 && r !== 0
        ? arr
            .slice(0, r+1)
            .map((x) => x + i)
            .reduce((acc, cur) => acc + cur, 0)
        : arr.map((x) => x + i).reduce((acc, cur) => acc + cur, 0);
  }
  return res;
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
console.log(chr(12));
console.log(chr(1));
console.log(chr(2024));
