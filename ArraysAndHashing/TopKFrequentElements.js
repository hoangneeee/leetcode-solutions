// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  let uniqueNums = Array.from(map.keys());

  uniqueNums.sort((a, b) => map.get(b) - map.get(a));

  return uniqueNums.slice(0, k);
};

console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));
