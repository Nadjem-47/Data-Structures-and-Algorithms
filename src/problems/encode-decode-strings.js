function encode(strs) {
  let delimiter = "/"
  return strs.map((str) => str.length + delimiter + str).join("")
}

function decode(str) {
  let result = []
  let delimiter = "/"
  let p1 = 0

  while (p1 < str.length) {
    let p2 = str.indexOf(delimiter, p1)

    if (p2 === -1) break

    let length = Number(str.substring(p1, p2))
    let word = str.substring(p2 + 1, p2 + 1 + length)

    result.push(word)

    p1 = p2 + 1 + length
  }

  return result
}
