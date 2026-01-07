function prevtwoSum(numbers: number[], target: number): number[] | undefined {
  const numMap: { [key: number]: number } = {};

  for (let i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];

    if (complement in numMap) {
      return [numMap[complement] + 1, i + 1];
    }

    numMap[numbers[i]] = i;
  }
}

console.log(prevtwoSum([2, 11, 7, 15], 9));
