"use strict";
const readline = require("readline");
function chr(arr) {
  return arr.filter((x) => x === "U").length % 2 === 0 ? "NO" : "YES";
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
    let [x,y] = input().split(" ").map(Number);
    console.log(Math.min(x,y), Math.max(x,y));
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
console.log(2,2)