const sumTree = (node) => {
    if (!node) return 0;
    return node.value + sumTree(node.left) + sumTree(node.right)
  }