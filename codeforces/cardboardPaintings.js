"use strict";
const readline = require("readline");
function chr(n, c, arr) {
 
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
    let [n, c] = input().split(" ").map(Number);
    let arr = input().split(" ").map(Number);
    console.log(chr(n, c, arr));
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
