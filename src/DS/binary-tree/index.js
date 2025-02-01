class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const a = new Node(5)
const b = new Node(4)
const c = new Node(3)
const d = new Node(2)
const e = new Node(1)
const f = new Node(5)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f




 