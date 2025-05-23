/**
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let n = 0;
    const stack = [];
    let cur = root;

    while (cur || stack.length > 0) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }

        cur = stack.pop();
        n++;

        if (n === k) {
            return cur.val;
        }

        cur = cur.right;
    }
};