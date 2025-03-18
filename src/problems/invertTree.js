// Given the root of a binary tree, invert the tree, and return its root.


const invertTree = function(root) {
    if (!root)
        return root;

    const temp = root.left;
    root.left = invertTree(root.right)
    root.right = invertTree(temp)
    return root
};
