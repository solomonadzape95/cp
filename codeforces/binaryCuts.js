const readline = require("readline");
function MPTBS(s) {
  let changes = 0;
  let prevDigit = null;
  for (let digit of s) {
    if (digit !== prevDigit) {
      changes++;
      prevDigit = digit;
    }
  }
  return changes;
}
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let t;
  let currentTestCase = 0;
  let input = [];

  rl.question("Enter the number of test cases: ", (numTests) => {
    t = parseInt(numTests);
    readNextTestCase();
  });

  function readNextTestCase() {
    rl.question(
      `Enter the binary string for test case ${currentTestCase + 1}: `,
      (s) => {
        input.push(s);
        currentTestCase++;
        if (currentTestCase < t) {
          readNextTestCase();
        } else {
          rl.close();
          processInput();
        }
      }
    );
  }

  function processInput() {
    for (let i = 0; i < t; i++) {
      console.log(MPTBS(input[i]));
    }
  }

console.log(MPTBS())