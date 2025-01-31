const grid = [
  ["W", "L", "L", "L", "W"],
  ["L", "L", "L", "L", "L"],
  ["L", "W", "L", "W", "L"],
  ["W", "W", "W", "L", "W"],
  ["L", "W", "L", "W", "L"],
]

const islandCount = (grid) => {
  const visited = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }).fill(false)
  )

  let count = 0
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
      const current = grid[rowIndex][colIndex]
      const isVisited = visited[rowIndex][colIndex]
      if (current === "L" && !isVisited) {
        checkIsland(rowIndex, colIndex, grid, visited)
        count += 1
      }
    }
  }

  return count
}

const checkIsland = (rowIndex, colIndex, grid, visited) => {
  if (rowIndex < 0 || rowIndex >= grid.length) return
  if (colIndex >= grid[rowIndex].length || colIndex < 0) return
  if (grid[rowIndex][colIndex] === "W") return
  if (visited[rowIndex][colIndex]) return

  visited[rowIndex][colIndex] = true

  checkIsland(rowIndex + 1, colIndex, grid, visited)
  checkIsland(rowIndex - 1, colIndex, grid, visited)
  checkIsland(rowIndex, colIndex - 1, grid, visited)
  checkIsland(rowIndex, colIndex + 1, grid, visited)
}

console.log(islandCount(grid))
