const reverseKGroup = function(head, k) {
    let dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while(true) {
        const kth = getKth(groupPrev, k);
        if (!kth) break;

        let groupNext = kth.next;

        // Reverse the current group
        let prev = kth.next;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        // Connect the previous group to the reversed group
        let temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }

    return dummy.next;
};

const getKth = (curr, k) => {
    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }
    return curr;
};