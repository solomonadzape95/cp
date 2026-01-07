/** 
 * Implements the opposite ends two pointer algorithm for finding if two numbers in a sorted array add up to a target..
 * @param nums- the sorted array on which the algorithm is to be performed
 * @param target - the target sum for the two numbers
 * @returns two numbers for the position of the pair
 */
export function findLocationOfTargetSum(nums: number[], target: number): number[] | "Not Found" {
  let left = 0, right = nums.length - 1;
  while(left < right){
    if(nums[left] + nums[right] === target)return [left, right];
    else{
      if(nums[left] + nums[right] < target) left++;
      else right--
    }
  }
  return  "Not Found"
}


/**
 * Implements a two pointer solution that starts from the same end of the array, to remove duplicates in a sorted array
 * @param nums - the sorted array from which the duplicates are to be removed
 * @returns the length of the unique array
 */
export function removeDuplicatesFromArray(nums: number[]): number{
  let left = 0;
  for(let right = 1; right < nums.length ; right++){
    if (nums[left] !== nums[right]){
      ++left;
      nums[left] = nums[right]
    }
  }
  return left;
} 