/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    const rows = new Set();
    const columns = new Set();
    const box = new Set();

    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        if (rows.has(board[i][j])) {
          return false;
        }
        rows.add(board[i][j]);
      }

      if (board[j][i] !== '.') {
        if (columns.has(board[j][i])) {
          return false;
        }
        columns.add(board[j][i]);
      }

      const rowIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const colIndex = Math.floor(i % 3) * 3 + Math.floor(j % 3);

      if (board[rowIndex][colIndex] !== '.') {
        if (box.has(board[rowIndex][colIndex])) {
          return false;
        }
        box.add(board[rowIndex][colIndex]);
      }
    }
  }
  return true;
};

console.time('executionTime');
const board = [
  ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
  ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
  ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
  ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
  ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
];

console.log(isValidSudoku(board));
console.timeEnd('executionTime');
