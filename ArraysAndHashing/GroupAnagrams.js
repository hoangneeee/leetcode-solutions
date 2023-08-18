// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = {};

  strs.forEach((element, index) => {
    const key = element.split('').sort().join('');
    if (result.hasOwnProperty(key)) {
      result[key].push(element);
    } else {
      result[key] = [element];
    }
  });

  return Object.values(result);
};

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
