export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

export function arrayToLinkedList(arr) {
  let node = new ListNode(0)
  let current = node

  for (let num of arr) {
    current.next = new ListNode(num)
    current = current.next
  }

  return node.next
}
