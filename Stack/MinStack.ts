class MinStack {
  stack = [];
  min = null;
  constructor() {}

  push(val: number): void {
    if (this.stack.length === 0) {
      this.min = val;
    } else {
      this.min = Math.min(this.min, val);
    }
    this.stack.push(val);
  }

  pop(): void {
    this.stack.pop();
    this.min = Math.min(...this.stack);
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min;
  }
}

const obj = new MinStack();
obj.push(1);
obj.push(2);
obj.top();
obj.getMin();
obj.pop();
obj.getMin();
obj.pop();
