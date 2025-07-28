

function romanToInt(s: string): number {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    const next = s[i + 1];

    if (roman[cur] < roman[next]) {
      result -= roman[cur];
    } else {
      result += roman[cur];
    }
  }

  return result;
}

console.log(romanToInt('MCMXCIV'));
