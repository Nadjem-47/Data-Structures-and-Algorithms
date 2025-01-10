const depthFirstPrint = (graph, source) => {
    const stack = [source]
    let result = ""
    while (stack.length) {
      const current = stack.pop()
      result += current + " , "
      stack.push(...graph[current])
    }
    return result
  }


  