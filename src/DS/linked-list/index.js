class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.right = null
  }
}

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

a.next = b
b.next = c
c.next = d

const linkedListValues = (node) => {
  if (!node) return []

  let result = [node.value]
  result = result.concat(linkedListValues(node.next))
  return result
}

linkedListValues(a)
