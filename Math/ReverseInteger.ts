function reverse(x: number): number {
  let result = 0;
  const negative = x < 0;
  if (negative) {
    x = -x;
  }

  while (x !== 0) {
    result = result * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  result = negative ? -result : result;

  if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
  }

  return result;
}

console.log(reverse(-123));
