const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
]

function toAdjecencyList(edges) {
  const adjList = {}
  for (let [node1, node2] of edges) {
    adjList[node1] = [...(adjList[node1] || []), node2]
    adjList[node2] = [...(adjList[node2] || []), node1]
  }

  return adjList
}

const adjList = toAdjecencyList(edges)

function hasPath(adjList, src, target, visited = new Set()) {
  if (src === target) return true

  visited.add(src)

  for (let node of adjList[src]) {
    if (!visited.has(node) && hasPath(adjList, node, target, visited)) {
      return true
    }
  }

  return false
}

hasPath(adjList, "i", "n")
