const hasPathDfs = (graph, src, dst) => {
  const stack = [src]

  while (stack.length) {
    const current = stack.pop()

    if (current === dst) return true

    stack.push(...graph[current])
  }
  return false
}

const hasPathDfsRecursion = (graph, src, dst) => {
  if (src === dst) return true

  for (let neighbor of graph[src]) {
    if (hasPathDfsRecursion(graph, neighbor, dst)) {
      return true
    }
  }

  return false
}

const hasPathBfs = (graph, src, dst) => {
  const queue = [src]

  while (queue.length) {
    const current = queue.shift()

    if (current === dst) return true

    queue.push(...graph[current])
  }
  return false
}
