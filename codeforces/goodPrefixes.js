"use strict";
const readline = require("readline");
function chr(arr, l) {
  let count = 0;
  for (let i = l; i > 0; i--) {
    let x = Math.max(...arr);
    let y = 0;
    arr
      .sort((a, b) => b - a)
      .forEach((c,i,a) => {
        y = i === a.length - 1 ? y : y + c;
      });
    if ((i === 0) & (arr[0] === 0)) {
      count++;
      continue;
    }
    count = y === x ? count + 1 : count;
    arr.pop();
    console.log(y);
  }
  return count;
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
    let y = Number(input());
    let arr = input().split(" ").map(Number);
    console.log(chr(arr, y));
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
console.log(chr([1, 1, 0, 3, 5, 2, 12], 7));
console.log(chr([0], 1));
console.log(
  [1, 1, 0, 3, 5, 2, 12].reduce((c, a) => {
    if (c !== 12) c + a, 0;
  })
);
