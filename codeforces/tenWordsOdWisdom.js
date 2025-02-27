"use strict";
const readline = require("readline");
function chr(arr) {
  let a = [...arr]
  let b = a.filter((x) => x[0] <= 10).sort((a,b) => b[1] - a[1])[0];
  return arr.findIndex(x => x === b) + 1
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
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(input().split(" ").map(Number));
    }
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
console.log(chr([[1,2],[3,4],[5,6]]))