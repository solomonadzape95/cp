"use strict";
const readline = require("readline");
function chr(n, arr1, arr2) {
  if (n === 1) return "YES";
  if (arr1[n - 2] === "<" && arr2[n - 2] === "<") return "NO";
  if (arr1[n - 2] === ">" && arr1[n - 1] === "<" && arr2[n - 2] === "<")
    return "NO";
  return "YES";
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
    let arr1 = input().split("");
    let arr2 = input().split("");
    console.log(chr(n, arr1, arr2));
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
console.log(chr(4, [">", ">", "<", "<"], [">", ">", ">", "<"]));
