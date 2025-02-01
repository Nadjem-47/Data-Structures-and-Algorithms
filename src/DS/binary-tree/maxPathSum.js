function maxPathSum(node) {
    if (!node) return 0;
  
    const leftSum = Math.max(0, maxPathSum(node.left));
    const rightSum = Math.max(0, maxPathSum(node.right));
  
    return node.value + Math.max(leftSum, rightSum);
  }