function largestComponent(adjList) {
    let maxCount  = 0
    const visited = new Set()
  
    for (const node in adjList) {
      if (!visited.has(node)) {
        const componentSize = _countComponentSize(node, adjList, visited);
        maxCount = Math.max(maxCount, componentSize);
      }
    }
  
    return maxCount 
  }
  
  function _countComponentSize(src, graph, visited = new Set()) {
    if (visited.has(src)) return 0
  
    visited.add(src)
    const current = graph[src]
    let size = 1
  
    for (const neighbor of current) {
      size += _countComponentSize(neighbor, graph, visited )
    }
  
    return size
  }
  
  console.log(largestComponent(graph.adjacencyList))
  