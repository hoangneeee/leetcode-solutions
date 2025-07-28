class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let numL1 = 0;
  let numL2 = 0;

  while (l1) {
    numL1 = numL1 * 10 + l1.val;
    l1 = l1.next;
  }

  while (l2) {
    numL2 = numL2 * 10 + l2.val;
    l2 = l2.next;
  }

  return new ListNode(numL1 + numL2);
}


const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));

