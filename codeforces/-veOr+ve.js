"use strict";
const readline = require("readline");
function chr(arr) {
  if (arr.filter((x) => x < 0).length % 2 === 0)
    return arr
      .map((x) => (x *= x < 0 ? -1 : 1))
      .reduce((acc, cur) => acc + cur, 0);
  let rem = Math.min(...arr.map((x) => (x = Math.abs(x))));
  return arr
    .map((x) => (x *= x < 0 && x !== rem ? -1 : 1))
    .reduce((acc, cur) => acc + cur, 0);
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
    let arr = input().split(" ").map(Number);
    console.log(chr(arr));
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
console.log(chr([1, 5, -5, 0, 2]));
