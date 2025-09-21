/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 
 * 
 * 79. Word Search
Solved
Medium
Topics
premium lock icon
Companies
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
 */
var exist = function (board, word) {
  const rows = board.length
  const cols = board[0].length

  function backtrack(r, c, i) {
    if (i === word.length) return true

    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i]) {
      return false
    }

    const temp = board[r][c]

    board[r][c] = "*"

    const result =
      backtrack(r + 1, c, i + 1) ||
      backtrack(r - 1, c, i + 1) ||
      backtrack(r, c + 1, i + 1) ||
      backtrack(r, c - 1, i + 1)

    board[r][c] = temp

    return result
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (backtrack(r, c, 0)) {
        return true
      }
    }
  }

  return false
}
