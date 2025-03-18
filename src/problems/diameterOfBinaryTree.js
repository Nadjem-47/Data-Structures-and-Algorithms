// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.

const diameterOfBinaryTree = function(root) {
    let result = 0;

    function dfs(root) {
        if (!root)
            return 0;
        const leftDepth = dfs(root.left);
        const rightDepth = dfs(root.right);


        result = Math.max(result, leftDepth + rightDepth)

        return 1 + Math.max(leftDepth, rightDepth)
    }

    dfs(root)
    return result
};
