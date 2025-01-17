function countComponents(adjList) {
    const visited = new Set()
    let count = 0
  
    function exploreComponent(node) {
      if (visited.has(node)) return false
  
      visited.add(node)
      for (const neighbor of adjList[node]) {
        exploreComponent(neighbor)
      }
      return true
    }
  
    for (const node in adjList) {
      if (exploreComponent(node)) {
        count++
      }
    }
  
    return count
  }
  
countComponents(graph.adjacencyList)