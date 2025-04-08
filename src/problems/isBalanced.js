/**
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 */

var isBalanced = function(root) {
    
    function dfs(root) {
      if (!root)
          return [0, true]

      const left = dfs(root.left);
      const right = dfs(root.right);

      const balanced = left[1] && right[1] && Math.abs(left[0] - right[0]) <= 1

      return [1 + Math.max(left[0], right[0]), balanced]
  }

  return dfs(root)[1]
};