// Link: https://leetcode.com/problems/zigzag-conversion/

function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }
  const res = Array(numRows).fill('');
  let row = 0;
  let step = -1;
  for (let i = 0; i < s.length; i++) {
    res[row] += s[i];
    if (row === 0) {
      step = 1;
    } else if (row === numRows - 1) {
      step = -1;
    }
    row += step;
  }
  return res.join('');
}

console.log(convert('PAYPALISHIRING', 3));
