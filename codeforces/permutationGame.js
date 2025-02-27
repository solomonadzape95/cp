"use strict";
const readline = require("readline");
function chr(k, pb, ps, p, a) {
  let bod = 0,
    sas = 0;
  for (let i = 0; i < k; i++) {
    bod += a[pb - 1];
    sas += a[ps - 1];
    pb = a[p[pb - 1] - 1] > a[pb - 1] ? p[pb - 1] : pb;
    ps = a[p[ps - 1] - 1] > a[ps - 1] ? p[ps - 1] : ps;
  }
  return bod > sas ? "Bodya" : sas > bod ? "Sasha" : "Draw";
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
    let [n, k, pb, ps] = input().split(" ").map(Number);
    let p = input().split(" ").map(Number);
    let a = input().split(" ").map(Number);
    console.log(chr(k, pb, ps, p, a));
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
console.log(chr(2, 3, 2, [4, 1, 2, 3], [7, 2, 5, 6]));
console.log(
  chr(
    8,
    2,
    10,
    [3, 1, 4, 5, 2, 7, 8, 10, 6, 9],
    [5, 10, 5, 1, 3, 7, 10, 15, 4, 3]
  )
);
console.log(chr(1000000000, 1, 2, [(1, 2)], [4, 4]));
console.log(
  chr(10, 4, 1, [5, 1, 4, 3, 2, 8, 6, 7], [1, 1, 2, 1, 2, 100, 101, 102])
);
console.log(chr(1, 2, 5, [1, 2, 4, 5, 3], [4, 6, 9, 4, 2]));
console.log(chr(2, 3, 1, [4, 1, 3, 2], [6, 8, 5, 3]));
console.log(chr(9, 5, 4, [6, 1, 3, 5, 2, 4], [6, 9, 8, 9, 5, 10]));
console.log(chr(8, 4, 2, [2, 3, 4, 1], [5, 2, 8, 7]));
console.log(chr(2, 3, 1, [4, 1, 3, 2], [6, 8, 5, 3]));
console.log(chr(1000000000, 1, 2, [1, 2], [1000000000, 2]));
// 4 2 3 2
// 4 1 2 3
// 7 2 5 6
// 10 8 2 10
// 3 1 4 5 2 7 8 10 6 9
// 5 10 5 1 3 7 10 15 4 3
// 2 1000000000 1 2
// 1 2
// 4 4
// 8 10 4 1
// 5 1 4 3 2 8 6 7
// 1 1 2 1 2 100 101 102
// 5 1 2 5
// 1 2 4 5 3
// 4 6 9 4 2
// 4 2 3 1
// 4 1 3 2
// 6 8 5 3
// 6 9 5 4
// 6 1 3 5 2 4
// 6 9 8 9 5 10
// 4 8 4 2
// 2 3 4 1
// 5 2 8 7
// 4 2 3 1
// 4 1 3 2
// 6 8 5 3
// 2 1000000000 1 2
// 1 2
// 1000000000 2
