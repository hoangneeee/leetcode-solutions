function evalRPN(tokens: string[]): number {
  const operators = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => Math.trunc(a / b),
  };
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const cur = tokens[i];
    if (operators[cur]) {
      const b = stack.pop();
      const a = stack.pop();

      stack.push(operators[cur](a, b));
    } else {
      stack.push(parseInt(cur));
    }
  }

  return stack[0];
}

console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
