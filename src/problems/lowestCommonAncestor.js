const lowestCommonAncestor = function (root, p, q) {
    let current = root;
    while (current) {
      if (p.val > current.val && q.val > current.val) {
        current = current.right; // Move to the right subtree
      } else if (p.val < current.val && q.val < current.val) {
        current = current.left; // Move to the left subtree
      } else {
        return current; // Return the TreeNode
      }
    }
  };
  