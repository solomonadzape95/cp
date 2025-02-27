"use strict";
const readline = require("readline");
function rt(n) {
  let total = (n / 2) * (1 + n);
  return total;
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
  let n = parseInt(input(), 10);
  let arr = input();
  console.log(
    rt(n) -
      arr
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b)
        .reduce((a, b) => a + b, 0)
  );
});

let currentLine = 0;
function input() {
  if (currentLine >= lines.length) {
    console.error("Not enough lines of input provided.");
    process.exit(1);
  }
  return lines[currentLine++];
}
// console.log(chr(2,'1'));
// console.log(rt(5000));
