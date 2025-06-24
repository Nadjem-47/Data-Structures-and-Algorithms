/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 297. Serialize and Deserialize Binary Tree
 * 
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
    let res = [];

    function dfs(node) {
        if (!node) {
            res.push("N");
            return;
        }
        res.push(String(node.val))
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)
    return res.join(",")
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

const deserialize = function(root) {

    const vals = root.split(",");
    let i = 0;

    function dfs() {
        if (vals[i] === "N") {
            i++;
            return null
        }

        const node = new TreeNode(Number(vals[i]),null,null);
        i++;
        node.left = dfs();
        node.right = dfs();

        return node;
    }

    return dfs()
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
