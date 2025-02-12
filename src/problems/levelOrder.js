import { arrayToBinaryTree } from "../utils/arrayToBinaryTree"

export const levelOrder = function (root) {
  if (!root) return []

  const queue = [root]
  const result = []

  while (queue.length) {
    let levelSize = queue.length
    let levelVals = []

    for (let i = 0; i < levelSize; i++) {
      let current = queue.shift()
      levelVals.push(current.val)

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    result.push(levelVals)
  }

  return result
}

const binaryTree = arrayToBinaryTree([])

levelOrder(binaryTree)
