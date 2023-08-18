/**
 * https://leetcode.com/problems/contains-duplicate/description/
 * Idie: Set unique array and compare length 2 array
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const newArr = [...new Set(nums)];
  if (newArr.length === nums.length) return false;
  return true;
};
