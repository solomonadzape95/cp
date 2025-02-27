"use strict";
const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
function chr(n) {
  let a = "##";
  let b = "..";
  let state = true;
  let s = "";
  for (let i = 1; i < n + 1; i++) {
    for (let k = 0; k < 2; k++) {
      for (let j = 1; j < n + 1; j++) {
        if (state) {
          if (j % 2 === 0) {
            s += b;
            continue;
          } else {
            s += a;
            continue;
          }
        } else {
          if (j % 2 === 0) {
            s += a;
            continue;
          } else {
            s += b;
            continue;
          }
        }
      }
      i === n && k === 1 ? "" : (s += "\n");
    }
    state = state ? false : true;
  }
  return s;
}
let lines = [];
rl.on("line", (line) => {
  lines.push(line);
});

rl.on("close", () => {
  let t = parseInt(input(), 10);
  for (let i = 0; i < t; i++) {
    let n = Number(input());
    console.log(chr(n));
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
