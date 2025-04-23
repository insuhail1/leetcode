/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  const frequencyMap = new Map();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    const search = k - element;

    if (element === search && frequencyMap.get(element) < 2) {
      continue;
    }
    if (frequencyMap.get(k - element) > 0 && frequencyMap.get(element) > 0) {
      frequencyMap.set(element, frequencyMap.get(element) - 1);
      frequencyMap.set(k - element, frequencyMap.get(k - element) - 1);
      c++;
    }
  }
  return c;
};