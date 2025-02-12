import { ListNode } from "../classes"

export function arrayToLinkedList(arr) {
  let node = new ListNode(0)
  let current = node

  for (let num of arr) {
    current.next = new ListNode(num)
    current = current.next
  }

  return node.next
}
