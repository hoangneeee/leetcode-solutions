// Link: https://leetcode.com/problems/valid-number/

function isNumber(s: string): boolean {
    return /^\s*[+-]?((\d+(\.\d*)?)|(\.\d+))([eE][+-]?\d+)?\s*$/.test(s);
};

console.log(isNumber("0"));
console.log(isNumber("e"));
console.log(isNumber("."));
console.log(isNumber("-1E+3"));
