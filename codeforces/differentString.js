"use strict";
const readline = require("readline");
function chr(s) {
  const counts = new Array(26).fill(0);
  for (let char of s) {
    counts[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  let differentChars = 0;
  for (let count of counts) {
    if (count > 0) differentChars++;
  }

  if (differentChars < 2) {
    return ["NO"];
  } else {
    let r = s.split("");
    for (let i = 1; i < r.length; i++) {
      if (r[0] !== r[i]) {
        [r[0], r[i]] = [r[i], r[0]];
        break;
      }
    }
    return ["YES", r.join("")].join('\n');
  }
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
    let s = input();
    console.log(chr(s));
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
console.log(chr("aaabaaa"));
