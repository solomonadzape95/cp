function calculateUnionArea(N, K, L) {
  const events = [];

  // Create events for each square
  for (let i = 1; i <= N; i++) {
    const x1 = i * K - L;
    const x2 = i * K + L;
    const y1 = x1; // Bottom-left y-coordinate
    const y2 = x2; // Top-right y-coordinate

    // Add start and end events for the sweep line
    events.push({ x: x1, type: 1, y1: y1, y2: y2 }); // Start event
    events.push({ x: x2, type: -1, y1: y1, y2: y2 }); // End event
  }

  // Sort events by x coordinate
  events.sort((a, b) => a.x - b.x);

  let lastX = events[0].x;
  let activeIntervals = [];
  let totalArea = 0;

  function calculateActiveLength() {
    if (activeIntervals.length === 0) return 0;

    let length = 0;
    let currentStart = -Infinity;
    let currentEnd = -Infinity;

    for (const interval of activeIntervals) {
      const [start, end] = interval;

      // Merge intervals
      if (start > currentEnd) {
        length += currentEnd - currentStart;
        currentStart = start;
        currentEnd = end;
      } else {
        currentEnd = Math.max(currentEnd, end);
      }
    }

    length += currentEnd - currentStart; // Add last interval
    return length;
  }

  for (const event of events) {
    const currentX = event.x;

    // Calculate area contributed by active intervals
    const activeLength = calculateActiveLength();
    totalArea += activeLength * (currentX - lastX);

    // Update lastX
    lastX = currentX;

    // Add or remove intervals based on event type
    if (event.type === 1) {
      activeIntervals.push([event.y1, event.y2]);
      activeIntervals.sort((a, b) => a[0] - b[0]); // Sort by start of intervals
    } else {
      activeIntervals = activeIntervals.filter(
        (interval) => !(event.y1 >= interval[0] && event.y2 <= interval[1])
      );
    }
  }

  return totalArea;
}

// Example usage:
const N = 5; // Number of squares
const K = 10; // Parameter K
const L = 50000; // Parameter L

// console.log(calculateUnionArea(N, K, L)); // Output the area of union of squares
// const a = [
//   [".", ".", ".", ".", ".", ".", "5", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   ["9", "3", ".", ".", "2", ".", "4", ".", "."],
//   [".", ".", "7", ".", ".", ".", "3", ".", "."],
//   [".", ".", ".", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", "3", "4", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "3", ".", ".", "."],
//   [".", ".", ".", ".", ".", "5", "2", ".", "."],
// ];
// function isValidSquare(row, col, board) {
//   let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
//   let isValid = true;
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       if (board[row + i][col + j] === ".") continue;
//       if (!numbers.includes(board[row + i][col + j])) {
//         isValid = false;
//         console.log("not found", board[row + i][col + j], "isValid", isValid);
//         break;
//       }
//       //   didRun && console.log("it ran");
//       delete numbers[Number(board[row + i][col + j]) - 1];
//       isValid = true;
//     }
//     if (!isValid) break;
//   }
//   console.log(isValid);
//   return isValid;
// }
// function longestConsecutive(nums) {
//   const numSet = new Set(nums);
//   let longestStreak = 0;

//   for (const num of numSet) {
//     if (!numSet.has(num - 1)) {
//       // Check if it's the start of a sequence
//       let currentNum = num;
//       let currentStreak = 1;

//       while (numSet.has(currentNum + 1)) {
//         currentNum += 1;
//         currentStreak += 1;
//       }

//       longestStreak = Math.max(longestStreak, currentStreak);
//     }
//   }

//   return longestStreak;
// }
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
