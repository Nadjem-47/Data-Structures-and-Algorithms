
// TODO: revisite
const generateParenthesis = function (n) {
  const stack = []
  const result = []

  const backtrack = (openN, closedN) => {
    console.log(openN === n && closedN === n)
    if (openN === n && closedN === n) {
      result.push(stack.join(""))
      return
    }

    if (openN < n) {
      stack.push("(")
      backtrack(openN + 1, closedN)
      stack.pop()
    }

    if (closedN < openN) {
      stack.push(")")
      backtrack(openN, closedN + 1)
      stack.pop()
    }
  }

  backtrack(0, 0)
  return result
}
