function twoSum(numbers: number[], target: number): number[] {
  const hash = {};

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    if (hash.hasOwnProperty(target - n)) {
      return [hash[target - n] + 1, i + 1];
    }
    hash[n] = i;
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
