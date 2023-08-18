// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;

    let max = 0;
    const sort = new Set(nums.sort());
    sort.forEach((n) => {
        if (!sort.has(n - 1)) {
            let count = 1;
            while (sort.has(n + count)) {
                count++;
            }
            max = Math.max(max, count);
        }
    })
    return max;
};


console.time("executionTime");
const arr = [0,3,7,2,5,8,4,6,0,1]

console.log(longestConsecutive(arr));
console.timeEnd("executionTime");
