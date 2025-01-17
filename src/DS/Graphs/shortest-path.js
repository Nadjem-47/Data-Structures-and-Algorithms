function shortestPath(graph, src, target) {
    if (src === target) return 0; 
  
    const visited = new Set();
    const queue = [{ distance: 0, node: src }];
  
    while (queue.length) {
      const current = queue.shift(); 
      visited.add(current.node);
  
      for (const neighbor of graph[current.node]) {
        if (neighbor === target) {
          return current.distance + 1; 
        }
  
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push({
            distance: current.distance + 1,
            node: neighbor,
          });
        }
      }
    }
  
    return -1; 
  }
  
  console.log(shortestPath(graph.adjacencyList, "A", "K"))
  