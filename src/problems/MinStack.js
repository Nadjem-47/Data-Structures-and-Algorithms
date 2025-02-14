const MinStack = function () {
  this.stack = []
  this.minStack = []
}

MinStack.prototype.push = function (val) {
  this.stack.push(val)

  if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
    this.minStack.push(val)
  }
}

MinStack.prototype.pop = function () {
  if (!this.stack.length) return null

  if (
    this.stack[this.stack.length - 1] ===
    this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.pop()
  }

  return this.stack.pop()
}

MinStack.prototype.top = function () {
  if (!this.stack.length) return null
  return this.stack[this.stack.length - 1]
}

MinStack.prototype.getMin = function () {
  if (!this.minStack.length) return null
  return this.minStack[this.minStack.length - 1]
}
