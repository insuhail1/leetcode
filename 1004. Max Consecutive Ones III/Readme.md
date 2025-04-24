# 1004. Max Consecutive Ones III

## Problem Description

Given a binary array `nums` and an integer `k`, return the maximum number of consecutive 1's in the array if you can flip at most `k` 0's.

---

## Examples

### Example 1

**Input:**

```javascript
(nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]), (k = 2);
```

**Output:** `6`

**Explanation:**

```
[1,1,1,0,0,1,1,1,1,1,1]
```

Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

---

### Example 2

**Input:**

```javascript
(nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]), (k = 3);
```

**Output:** `10`

**Explanation:**

```
[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
```

Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

---

## Solution Approach

This problem can be efficiently solved using the sliding window technique. Here's a detailed explanation of the approach:

### 1. Sliding Window Concept

- We maintain a window using two pointers: `left` and `right`
- The window represents a subarray of consecutive elements
- We expand the window by moving the `right` pointer
- We contract the window by moving the `left` pointer when needed

### 2. Key Variables

- `left`: Starting index of the current window
- `right`: Ending index of the current window
- `maxLength`: Tracks the maximum length of valid subarrays found
- `zeroCount`: Counts the number of zeros in the current window

### 3. Algorithm Steps

1. Initialize all variables to 0
2. Move the `right` pointer through the array
3. For each element:
   - If it's a 0, increment `zeroCount`
   - If `zeroCount` exceeds `k`, move the `left` pointer until `zeroCount` is within limit
   - Update `maxLength` with the maximum window size found
4. Return `maxLength` as the result

### 4. Complexity Analysis

- **Time Complexity**: O(n), where n is the length of the input array
  - Each element is processed at most twice (once by `right` pointer and once by `left` pointer)
- **Space Complexity**: O(1)
  - We use a constant amount of extra space regardless of input size

---

## Code Implementation

```javascript
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
```

---

## Example Walkthrough

Let's walk through Example 1:

```javascript
(nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]), (k = 2);
```

1. Window expands until we encounter 2 zeros
2. When we hit the third zero, we need to move the left pointer
3. The optimal window is found when we can flip 2 zeros to get 6 consecutive 1's
4. The final result is 6, representing the maximum length of consecutive 1's possible with at most 2 flips
