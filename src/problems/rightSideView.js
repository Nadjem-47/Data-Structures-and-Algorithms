
/*
199. Binary Tree Right Side View

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

*/
var rightSideView = function(root) {
    const res = []
    const queue = [root];

    while (queue.length) {
        let rightVal = null;
        const qLength = queue.length;

        for (let i = 0; i < qLength; i++) {
            const node = queue.shift()
            if (node) {
                rightVal = node;
                queue.push(node.left);
                queue.push(node.right);
            }

        }

        rightVal && res.push(rightVal.val)
    }

    return res
};