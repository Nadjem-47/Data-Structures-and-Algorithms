const bfs = (tree) => {
    const queue = [tree]
  
    while (queue.length) {
      const current = queue.shift()
      console.log(current.value)
  
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
  }
  