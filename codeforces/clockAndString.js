"use strict";
const readline = require("readline");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function chr(a, b, c, d) {
  let arr1 = [];
  let y = a < b ? a : b;
  let z = a < b ? b : a;
  for (let i = y + 1; i < z; i++) {
    arr1.push(i);
  }
  let arr2 = arr.map((x) => (!arr1.includes(x) ? x : ""));
  console.log(arr1, arr2);
  if (
    (arr2.includes(c) && arr1.includes(d)) ||
    (arr2.includes(d) && arr1.includes(c))
  )
    return "YES";
  return "NO";
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
    let [a, b, c, d] = input().split(" ").map(Number);
    console.log(chr(a, b, c, d));
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
console.log(chr(5, 3, 4, 2));
// 12 1 10 2
// 3 12 6 9
// 1 9 8 4
// 6 7 9 12
// 7 12 9 6
// 10 12 11 1
// 3 9 6 12
// 1 4 3 5
// NO;
// NO;
// NO;
// NO;
// YES;
// YES;
// YES;
// YES;
