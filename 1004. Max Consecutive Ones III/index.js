/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let zeroCount = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    right++;
    maxLength = Math.max(maxLength, right - left);
  }
  return maxLength;
};

console.log(longestOnes((nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]), (k = 2))); // 6
console.log(
  longestOnes(
    (nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]),
    (k = 3)
  )
); // 6
