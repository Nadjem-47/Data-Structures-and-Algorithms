/**

1448. Count Good Nodes in Binary Tree

Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

Return the number of good nodes in the binary tree.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
        function dfs(root, maxValue) {

        if (!root)
            return 0

        let res = root.val >= maxValue ? 1 : 0;
        maxValue = Math.max(maxValue, root.val)

        res += dfs(root.left, maxValue)
        res += dfs(root.right, maxValue)
        return res;
    }

    return dfs(root, root.val)
};