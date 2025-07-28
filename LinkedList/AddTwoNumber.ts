class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let numL1 = '';
  let numL2 = '';

  while (l1) {
    numL1 += String(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    numL2 += String(l2.val);
    l2 = l2.next;
  }

  numL1 = numL1.split('').reverse().join('');
  numL2 = numL2.split('').reverse().join('');

  let carry = 0;
  let sumReverse = '';
  let i = numL1.length - 1;
  let j = numL2.length - 1;

  while (i >= 0 || j >= 0) {
    const num1 = i >= 0 ? parseInt(numL1[i]) : 0;
    const num2 = j >= 0 ? parseInt(numL2[j]) : 0;

    const sum = num1 + num2 + carry;
    carry = Math.floor(sum / 10);

    sumReverse = String(sum % 10) + sumReverse;
    i--;
    j--;
  }

  if (carry > 0) {
    sumReverse = String(carry) + sumReverse;
  }

  sumReverse = sumReverse.split('').reverse().join('');
  
  let head: ListNode | null = new ListNode(parseInt(sumReverse[0]));
  let current: ListNode | null = head;
  for (let i = 1; i < sumReverse.length; i++) {
    current.next = new ListNode(parseInt(sumReverse[i]));
    current = current.next;
  }
  return head;
}

const l1 = new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))))))))))))))))))));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));
