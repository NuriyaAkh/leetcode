class ListNode {
  constructor(val) {
      this.val = val;
      this.next = null;
  }
}

function reverseLinkedList(head) {
  if (!head) {
      return null; // Handle the case of an empty linked list
  }

  let prev = null;
  let current = head;
  let next = null;

  while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }

  return prev; // Return the new head (prev)
}
// Create a linked list with values 1, 2, 3
const node1 = new ListNode(4);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

// Call the reverseLinkedList function with the head of the linked list
const reversedList = reverseLinkedList(node1,node2,node3);
console.log(reversedList)