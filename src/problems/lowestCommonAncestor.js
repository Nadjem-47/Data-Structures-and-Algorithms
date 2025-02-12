const lowestCommonAncestor = function (root, p, q) {
  let current = root
  while (current) {
    if (p.val > current.val && q.val > current.val) {
      current = current.right
    } else if (p.val < current.val && q.val < current.val) {
      current = current.left
    } else {
      return current
    }
  }
}
