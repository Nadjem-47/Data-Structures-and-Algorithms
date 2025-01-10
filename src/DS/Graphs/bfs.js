const breadthFirstPrint = (graph, source) => {
    const queue = [source]
    let result = ""
    while (queue.length) {
      const current = queue.shift()
      result += current + " , "
      queue.push(...graph[current])
    }
    return result
  }