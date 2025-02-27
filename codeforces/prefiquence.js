"use strict";
const readline = require("readline");
function chr(a, b, n, m) {
  let count = m > n ? n : m;
  let num = 0;
  for (let i = 0; i < count; i++) {
    let x = b.indexOf(a[i]);
    if (x === -1) return num;
    num++;
    b = b.slice(x + 1);
    continue;
  }
  return num;
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
    let [n, m] = input().split(" ").map(Number);
    let a = input();
    let b = input();
    console.log(chr(a, b, n, m));
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
console.log(chr("10011", "1110", 5, 4));
console.log(chr("100", "110", 3, 3));
console.log(chr("1", "111", 1, 3));
console.log(chr("1011", "1111", 4, 4));
console.log(chr("100", "11010", 3, 5));
console.log(chr("100", "0", 3, 1));
