import { arrayToLinkedList } from "../utils/arrayToLinkedList"

let l1 = arrayToLinkedList([9, 9, 9, 9, 9, 9, 9])
let l2 = arrayToLinkedList([9, 9, 9, 9])

const addTwoNumbers = function (l1, l2) {
  let carry = 0
  let dummy = new ListNode(0)
  let current = dummy

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = Math.floor(sum / 10) 
    current.next = new ListNode(sum % 10)
    current = current.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }

  return dummy.next
}

// PSEUDO CODE:

// Initialize [carry] = 0, [dummy] = new ListNode(0), [current] = [dummy]
// Loop until both [l1] and [l2] are exhausted and there's no [carry] left:
//   - Add the values from [l1], [l2], and [carry]:  
//     [sum] = ([l1] ? [l1.val] : 0) + ([l2] ? [l2.val] : 0) + [carry]
//   - If [sum] is 10 or more, update [carry] = Math.floor([sum] / 10)  
//   - Assign [current.next] = new ListNode([sum] % 10) (storing the last digit of [sum])  
//   - Move [current] to [current.next] to append the next digit without modifying existing nodes  
//   - If [l1] exists, move [l1] to [l1.next]; do the same for [l2]  
//     (Ensures all digits from both lists are processed)  

// Return [dummy.next] because [dummy] is initialized with [0] only as a placeholder  
// This simplifies the logic and avoids handling a separate head case.  

// Time Complexity: O(Max([M], [N])), where [M] and [N] are the lengths of the two lists  
// Space Complexity: O(Max([M], [N])), as we create a new linked list of similar length.  


addTwoNumbers(l1, l2)
