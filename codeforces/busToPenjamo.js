"use strict";
const readline = require("readline");
function chr(arr, r) {
  let happy = 0;
  let newArr = arr.map((x) => {
    happy += Math.floor(x / 2);
    return (x = x % 2);
  });
  let total = newArr.reduce((a, c) => a + c, 0);
  let rem = r - happy / 2;
  happy = total > rem ? happy + rem - 1 : happy + total;
  return happy;
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
  let [n, r] = input().split(" ").map(Number);
  let arr = input().split(" ").map(Number);
  console.log(chr(arr, r));
});

let currentLine = 0;
function input() {
  if (currentLine >= lines.length) {
    console.error("Not enough lines of input provided.");
    process.exit(1);
  }
  return lines[currentLine++];
}
console.log(chr([3, 1, 1, 3], 5));
