function countLatticePoints(r) {
  let count = 0;
  for (let x = 0; x <= r; x++) {
    let minY = Math.ceil(Math.sqrt(r * r - x * x));
    let maxY = Math.floor(Math.sqrt((r + 1) * (r + 1) - x * x) - 1);
    if (x > 0) {
      count += (maxY - minY + 1) * 2;
    } else {
      count += maxY - minY + 1;
    }
  }
  return count;
}
// const t = parseInt(prompt("Enter the number of test cases"), 10);
// for (let i = 0; i < t; i++) {
//   const r = parseInt(prompt("Enter the radius for test case " + (i + 1)), 10);
//   console.log(countLatticePoints(r));
// }
console.log(countLatticePoints(1))
console.log(countLatticePoints(2))
console.log(countLatticePoints(3))
console.log(countLatticePoints(4))
console.log(countLatticePoints(5))