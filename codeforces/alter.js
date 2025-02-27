function isAlternatingBinaryString(n, s) {
  // If the length of the string is 1, it's already alternating
  if (n === 1) {
    return true;
  }

  // Iterate over each character in the string
  for (let i = 0; i < n; i++) {
    // Try replacing all occurrences of the current character with 0 and 1
    for (let replacement of ["0", "1"]) {
      let alternating = true;
      // Perform the replacement
      let newString = s.slice(0, i) + replacement + s.slice(i + 1);
      // Check if the resulting string is alternating
      for (let j = 1; j < n; j++) {
        if (newString[j] === newString[j - 1]) {
          alternating = false;
          break;
        }
      }
      // If the string is alternating, return true
      if (alternating) {
        return true;
      }
    }
  }
  // If no alternating string is found after all iterations, return false
  return false;
}

console.log(isAlternatingBinaryString(8,'testcase'))