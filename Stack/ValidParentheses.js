/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const arrS = s.split('');

  const stack = [];
  for (let i = 0; i < arrS.length; i++) {
    if (arrS[i] === '(') {
      if (i === arrS.length - 1) return false;
      stack.push('(');
    } else if (arrS[i] === '[') {
      if (i === arrS.length - 1) return false;
      stack.push('[');
    } else if (arrS[i] === '{') {
      if (i === arrS.length - 1) return false;
      stack.push('{');
    } else if (arrS[i] === ')') {
      if (stack.pop() !== '(') {
        return false;
      }
    } else if (arrS[i] === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    } else if (arrS[i] === '}') {
      if (stack.pop() !== '{') {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.time('executionTime');
const input = '()';

console.log(isValid(input));
console.timeEnd('executionTime');
