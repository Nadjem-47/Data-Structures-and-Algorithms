/*
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
*/
var getIntersectionNode = function(headA, headB) {
    let l1 = headA;
    let l2 = headB;


    while (l1 !== l2) {
        l1 = l1 ? l1.next : headB;
        l2 = l2 ? l2.next : headA;
    }

    return l1;
};