// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const left = new Array(n);
  const right = new Array(n);
  right[n - 1] = 1;
  left[0] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  for (let i = 0; i < n; i++) {
    nums[i] = left[i] * right[i];
  }
  return nums;
};

console.time('executionTime');
console.log(productExceptSelf([1, 2, 3, 4]));
console.timeEnd('executionTime');
