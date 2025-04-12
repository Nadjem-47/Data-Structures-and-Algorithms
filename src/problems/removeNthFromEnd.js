/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let dummy = new ListNode(0); // Dummy node to handle edge cases
    dummy.next = head;
    let p1 = dummy;
    let p2 = dummy;

    for (let i = 0; i <= n; i++) {
        if (!p2) return head; // Edge case: n > list length
        p2 = p2.next;
    }

    while (p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    p1.next = p1.next.next;

    return dummy.next;

};