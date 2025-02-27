"use strict";
const readline = require("readline");
function chr(arr) {
  arr = arr.split("");
  let reps = 1;
  let base = reps;
  let i = 0;
  while (i < arr.length) {
    reps = arr[i] == arr[i + 1] ? reps + 1 : reps;
    i++;
    if (arr[i] !== arr[i + 1] && reps > base) {
      base = reps;
      reps = 1;
    }
  }
  return base;
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
  let arr = input();
  console.log(chr(arr));
  // let [a, b, c] = input().split(" ").map(Number);
  // console.log(chr(a, b, c));
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
  chr(
    "ACCGGGTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  )
);

