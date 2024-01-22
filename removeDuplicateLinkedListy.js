/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var deleteDuplicates = function (head) {
  //if the list empty
  if (!head) {
    return head;
  }

  let current = head;
  let nextNode = head.next;

  while (nextNode !== null) {
    if (current.val === nextNode.val) {
      console.log('duplicate found');
      current.next = nextNode.next;
    } else {
      current = nextNode; // Move both pointers forward
    }
    nextNode = nextNode.next;
  }
  return head; // Return the modified linked list
};

// Create a linked list with values 1, 2, 3
const node1 = new ListNode(4);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(3);
const node5 = new ListNode(2);
const node6 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = null;
console.log(deleteDuplicates(node1, node2, node3, node4, node5, node6));
