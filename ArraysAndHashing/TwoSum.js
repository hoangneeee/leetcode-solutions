// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hash = {}; 

    for (let i = 0; i < nums.length; i++) { 
        const n = nums[i]; 
        if (hash.hasOwnProperty(target - n)) { 
            return [hash[target - n], i];
        }
        hash[n] = i;
    }
    return [];
};

// console.log(twoSum([2,7,11,15],9));
