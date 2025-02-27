"use strict";
const readline = require("readline");
function chr(n, x) {
  let a = [x[0] + 1];
  for (let i = 0; i < n - 1; i++) {
    if (a[i] > x[i]) {
      a.push(a[i] + x[i]);
      continue;
    }
    a.push(x[i]);
    while (a[i + 1] % a[i] !== x[i]) {
      a[i] += a[i - 1];
    }
  }
  return a.join(" ");
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
    let x = input().split(" ").map(Number);
    console.log(chr(n, x));
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
console.log(chr(4, [2, 4, 1]));
console.log(chr(3, [1, 1]));
console.log(chr(6, [4, 2, 5, 1, 2]));
console.log(chr(2, [500]));
console.log(chr(3, [1, 5]));
