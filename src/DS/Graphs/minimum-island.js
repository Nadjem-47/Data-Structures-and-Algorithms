const grid = [
  ["W", "L", "L", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["L", "L", "L", "W", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "L", "L", "W", "W"],
]

const minimumIsland = (grid) => {
  const visited = new Set()
  let minIslandSize = Infinity

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === "W" || visited.has(r + "," + c)) continue
      minIslandSize = Math.min(
        minIslandSize,
        countIslandSize(r, c, grid, visited)
      )
    }
  }

  return minIslandSize === Infinity ? 0 : minIslandSize
}

function countIslandSize(r, c, grid, visited) {
  const rowInRange = r >= 0 && r < grid.length
  const colInRange = c >= 0 && c < grid[r]?.length

  if (!rowInRange || !colInRange) return 0
  if (grid[r][c] === "W") return 0
  if (visited.has(r + "," + c)) return 0

  visited.add(r + "," + c)

  let size = 1

  size += countIslandSize(r + 1, c, grid, visited)
  size += countIslandSize(r - 1, c, grid, visited)
  size += countIslandSize(r, c + 1, grid, visited)
  size += countIslandSize(r, c - 1, grid, visited)

  return size
}

console.log(minimumIsland(grid), "minimumIsland")
