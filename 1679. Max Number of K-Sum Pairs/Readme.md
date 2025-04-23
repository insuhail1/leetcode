# Max Operations Solution

This solution finds the maximum number of operations that can be performed on an array of numbers where each operation consists of removing two numbers that sum to a given target value.

## Problem Description

Given an array of integers `nums` and an integer `k`, find the maximum number of operations you can perform where each operation consists of removing two numbers from the array that sum to `k`.

## Solution Approach

The solution uses a frequency map to efficiently track and count pairs of numbers that sum to `k`. Here's how it works:

1. **Frequency Map Creation**:

   - Create a Map to store the frequency of each number in the array
   - This allows O(1) lookups for checking if a complement number exists

2. **Pair Finding**:

   - For each number in the array, check if its complement (k - number) exists in the map
   - Special handling for cases where the number and its complement are the same
   - Decrement the frequency count when a valid pair is found

3. **Edge Cases**:
   - Handles duplicate numbers correctly
   - Ensures numbers aren't used more times than they appear in the array

## Time and Space Complexity

- **Time Complexity**: O(n), where n is the length of the input array
- **Space Complexity**: O(n), for storing the frequency map

## Example

```javascript
// Example 1
nums = [3, 1, 3, 4, 3];
k = 6;
// Output: 1
// Only one pair (3,3) sums to 6

// Example 2
nums = [1, 2, 3, 4];
k = 5;
// Output: 2
// Two pairs (1,4) and (2,3) sum to 5
```

## Implementation Details

The solution uses a Map data structure for efficient lookups and updates. The Map stores the frequency of each number in the array, allowing us to:

- Quickly check if a complement number exists
- Track how many times each number can be used
- Update counts as pairs are found

This approach is more efficient than using a regular object because:

- Map provides better performance for frequent lookups and updates
- Map methods (get/set) are more semantically clear
- Map can handle any type of key (though in this case we're using numbers)
