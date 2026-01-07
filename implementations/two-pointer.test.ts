import { findLocationOfTargetSum, removeDuplicatesFromArray } from "./two-pointer";

describe('findLocationOfTargetSum', () => {
  // Group related tests together
  
  test('should return indices when target sum is found', () => {
    // setup test data
    const nums = [1,2,3,4,5]
    const target = 7

    // call function
    const result = findLocationOfTargetSum(nums, target)

    // asert result
    expect(result).toEqual([1,4])
  })

  test('should return "Not Found" when pair not found', () => {

  const nums = [1,2,3]
  const target = 7
  const result = findLocationOfTargetSum(nums, target)
  expect(result).toBe("Not Found")
  })
})

describe("removeDuplicatesFromArray", () => {
  // Group related tests together

  test("should return length when duplicates are removed", () => {
    // setup test data
    const nums = [1, 1,1,1,2,2,2, 3,3,3,3, 4, 5];

    // call function
    const result = removeDuplicatesFromArray(nums);

    // asert result
    expect(result).toEqual(4);
  });
});