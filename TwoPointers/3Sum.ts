function threeSum(nums: number[]): number[][] {
  const arraySort = nums.sort((a, b) => a - b);
  const result: number[][] = [];
  arraySort.forEach((val, idx) => {
    if (idx > 0 && val === arraySort[idx - 1]) {
      return;
    }
    let left = idx + 1;
    let right = arraySort.length - 1;

    while (left < right) {
      const sum = val + arraySort[left] + arraySort[right];
      if (sum === 0) {
        result.push([val, arraySort[left], arraySort[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) left++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  });
  return result;
}

console.log(threeSum([-2,0,0,2,2]));
