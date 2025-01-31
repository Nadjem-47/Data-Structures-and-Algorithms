class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  // Method to add a vertex to the graph
  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }

  // Method to add an edge between two vertices
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return false
    this.adjacencyList[vertex1].push(vertex2)
    return true
  }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("C")
graph.addVertex("B")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("K")

graph.addEdge("A", "C")
graph.addEdge("A", "B")
graph.addEdge("B", "D")
graph.addEdge("B", "C")
graph.addEdge("C", "B")
graph.addEdge("C", "E")
graph.addEdge("C", "A")
graph.addEdge("E", "K")
