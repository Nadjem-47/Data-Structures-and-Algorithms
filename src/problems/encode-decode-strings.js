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

// PSEUDO CODE (encode): O(n)

// 1. Initialize [delimiter] to uniquely separate words.  
// 2. Map over [strs] and convert each string to "[length][delimiter][word]".  
//    (Adding the length ensures we know exactly how many characters to read during decoding.)  
// 3. Join all the transformed strings into a single encoded string.  
// 4. The length prefix helps decode each word correctly later.  

// PSEUDO CODE (decode): O(n)

// 1. Initialize [p1] = 0, a pointer to track our position in [str].  
// 2. Loop until [p1] reaches the end of [str]:  
//    - Find the next [delimiter] index ([p2]), which separates length from word.  
//    - Extract the length of the word by substring from [p1] to [p2].  
//    - Convert this length to a number.  
//    - Extract the actual word from [p2 + 1] to [p2 + 1 + length].  
//    - Add the extracted word to the [result] array.  
//    - Move [p1] forward to [p2 + 1 + length] to process the next word.  
//      (This ensures we start reading the next word correctly instead of reprocessing old data.)  
// 3. Return the decoded list of words.  

