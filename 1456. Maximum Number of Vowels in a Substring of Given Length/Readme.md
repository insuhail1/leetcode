# Maximum Vowels in a Substring of Given Length

## Problem Description

Given a string `s` and an integer `k`, return the maximum number of vowel letters in any substring of `s` with length `k`.

Vowel letters in English are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`.

## Examples

```javascript
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
```

## Approach

The solution uses the **Sliding Window** technique to efficiently find the maximum number of vowels in any substring of length `k`. Here's how it works:

1. Create a Map to store vowels for O(1) lookup
2. Use two pointers (left and right) to maintain a window of size `k`
3. Count vowels in the current window while sliding
4. Keep track of the maximum vowels count encountered

## Code Solution

```javascript
/**
 * @param {string} s - The input string
 * @param {number} k - The length of substring
 * @return {number} - Maximum number of vowels in any substring of length k
 */
var maxVowels = function (s, k) {
  // Create a Map of vowels for O(1) lookup
  const vowels = "aeiou".split("").map((v) => [v, true]);
  const vowelsMap = new Map(vowels);

  let left = 0; // Left pointer of the window
  let right = 0; // Right pointer of the window
  let maxVowels = 0; // Track maximum vowels found
  let vowelsCount = 0; // Count of vowels in current window

  while (right <= s.length) {
    if (right < left + k) {
      // Expand window and count vowels
      if (vowelsMap.has(s[right])) {
        vowelsCount++;
      }
      right++;
    } else {
      // Update maximum vowels count
      maxVowels = Math.max(maxVowels, vowelsCount);
      // Remove the leftmost character from count if it's a vowel
      if (vowelsMap.has(s[left])) {
        vowelsCount--;
      }
      left++;
    }
  }
  return maxVowels;
};
```

## Time and Space Complexity

- **Time Complexity**: O(n), where n is the length of the input string
  - We only traverse the string once with the sliding window
- **Space Complexity**: O(1)
  - We only use a fixed-size Map for vowels and a few variables

## Test Cases

```javascript
console.log(maxVowels("abciiidef", 3)); // Output: 3
console.log(maxVowels("aeiou", 2)); // Output: 2
console.log(maxVowels("leetcode", 3)); // Output: 2
console.log(maxVowels("weallloveyou", 7)); // Output: 4
```

## Key Points

1. The solution efficiently handles large strings by maintaining a sliding window
2. Using a Map for vowel lookup provides O(1) time complexity for checking vowels
3. The algorithm maintains a running count of vowels, avoiding repeated counting
4. The window size is fixed at `k`, making it memory efficient
