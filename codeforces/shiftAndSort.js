// "use strict";
// const readline = require("readline");
// function chr(s) {
//   let ans = 0;
//   while (
//     s !==
//     s
//       .split("")
//       .sort((a, b) => a - b)
//       .join("")
//   ) {
//     let i1 = s.indexOf("1");
//     let i0 = s.slice(i1).indexOf("0") + s.slice(0, i1).length;
//     let sub = s.substring(i1, i0 + 1).split("");
//     ans += sub.length;
//     let x = sub.pop();
//     sub.unshift(x);
//     s = s.slice(0, i1) + sub.join("") + s.slice(i0 + 1);
//   }
//   return ans;
// }
// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false,
// });

// let lines = [];
// rl.on("line", (line) => {
//   lines.push(line);
// });

// rl.on("close", () => {
//   let t = parseInt(input(), 10);
//   for (let i = 0; i < t; i++) {
//     let arr = input();
//     console.log(chr(s));
//     // let [a, b, c] = input().split(" ").map(Number);
//     // console.log(chr(a, b, c));
//   }
// });

// let currentLine = 0;
// function input() {
//   if (currentLine >= lines.length) {
//     console.error("Not enough lines of input provided.");
//     process.exit(1);
//   }
//   return lines[currentLine++];
// }
"use strict";

let inputBuffer = "";
let inputIndex = 0;

process.stdin.resume();
process.stdin.setEncoding("utf-8");

process.stdin.on("data", function (data) {
  inputBuffer += data;
});

process.stdin.on("end", function () {
  inputBuffer = inputBuffer.trim().split("\n");
  const t = parseInt(inputBuffer[inputIndex++], 10);
  for (let i = 0; i < t; i++) {
    const s = inputBuffer[inputIndex++];
    console.log(chr(s));
  }
});
function chr(s) {
  let ans = 0;
  while (
    s !==
    s
      .split("")
      .sort((a, b) => a - b)
      .join("")
  ) {
    let i1 = s.indexOf("1");
    let i0 = s.slice(i1).indexOf("0") + s.slice(0, i1).length;
    let sub = s.substring(i1, i0 + 1).split("");
    ans += sub.length;
    let x = sub.pop();
    sub.unshift(x);
    s = s.slice(0, i1) + sub.join("") + s.slice(i0 + 1);
  }
  return ans;
}

console.log(chr("01101001"));
console.log(chr("101011"));
console.log(chr("11000"));
