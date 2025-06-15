/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }

    let prev = null;
    let current = slow;
    let next = null;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current
        current = next;
    }

    let p1 = head;
    let p2 = prev;


    while (p2) {
        if (p2.val !== p1.val) return false;
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
};
