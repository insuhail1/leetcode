# Determine if Two Strings Are Close

## Problem Description

Given two strings `word1` and `word2`, determine if they are "close". Two strings are considered close if you can transform one into the other using the following operations:

1. **Operation 1**: Swap any two existing characters

   - Example: `abcde` -> `aecdb`

2. **Operation 2**: Transform every occurrence of one existing character into another existing character, and do the same with the other character
   - Example: `aacabb` -> `bbcbaa` (all a's turn into b's, and all b's turn into a's)

You can use these operations on either string as many times as necessary.

## Examples

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"

```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;
  const temp2 = {};
  for (const e of word2) {
    temp2[e] = (temp2[e] || 0) + 1;
  }
  const present = word1.split("").every((w) => temp2[w]);
  if (!present) return false;

  const temp1 = {};
  for (const e of word1) {
    temp1[e] = (temp1[e] || 0) + 1;
  }
  const sorted1 = Object.values(temp1).sort((a, b) => a - b);
  const sorted2 = Object.values(temp2).sort((a, b) => a - b);
  if (sorted1.join("") !== sorted2.join("")) return false;

  return true;
};
console.log(closeStrings((word1 = "abc"), (word2 = "bca")));
console.log(closeStrings((word1 = "a"), (word2 = "aa")));
console.log(closeStrings((word1 = "abbzzca"), (word2 = "babzzcz")));

``;
```
