"use strict";
const readline = require("readline");
function chr(arr) {
  let allAns = 0;
  let all = arr.filter((x) => x[1] === 11).sort((a, b) => a[0] - b[0]);
  if (all.length !== 0) allAns = all[0][0];
  let one = arr.filter((x) => x[1] === 10).sort((a, b) => a[0] - b[0]);
  let two = arr.filter((x) => x[1] === 1).sort((a, b) => a[0] - b[0]);
  if (allAns !== 0 && (one.length === 0 || two.length === 0)) return allAns;
  if (allAns !== 0 && one.length !== 0 && two.length !== 0)
    return allAns < one[0][0] + two[0][0] ? allAns : one[0][0] + two[0][0];
  if (allAns === 0 && one.length !== 0 && two.length !== 0)
    return one[0][0] + two[0][0];
  return -1;
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
console.log(
  chr([
    [2, 0],
    [3, 10],
    [4, 1],
    [4, 0],
  ])
);
