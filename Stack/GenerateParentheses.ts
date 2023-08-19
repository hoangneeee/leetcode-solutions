function generateParenthesis(n: number): string[] {
  if (n === 0) return [];

  const res: string[] = [];

  //Only add open parentheses if open < n
  //Only add closed parentheses if closed < open
  //valid if str.length === 2 * n

  function backTrack(str: string, openN: number, closedN: number) {
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }

    if (openN < n) {
      backTrack(str + '(', openN + 1, closedN);
    }

    if (closedN < openN) {
      backTrack(str + ')', openN, closedN + 1);
    }
  }

  backTrack('', 0, 0);

  return res;
}

console.log(generateParenthesis(3));
