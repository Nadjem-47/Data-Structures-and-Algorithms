const dfs = (tree) => {
    const stack = [tree]
  
    while (stack.length) {
      const current = stack.pop()
      console.log(current.value)
  
      if (current.left) stack.push(current.left)
      if (current.right) stack.push(current.right)
    }
  }
  
  const dfs_recursion = (tree) => {
    if (!tree) return []
  
    let result = [tree.value]
  
    result = result.concat(dfs_recursion(tree.left))
    result = result.concat(dfs_recursion(tree.right))
  
    return result
  }
  