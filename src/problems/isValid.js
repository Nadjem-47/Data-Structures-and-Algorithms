/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {

    if (s.length % 2 !== 0) return false;

  const left = ["[", "(", "{"];
  const stack = [];

  for (let char of s) {
      if (left.includes(char)) {
          stack.push(char);
      } else {
          if (!stack.length) return false;
          
          const last = stack.pop();
          
          if (
              (last === "[" && char !== "]") ||
              (last === "(" && char !== ")") ||
              (last === "{" && char !== "}")
          ) {
              return false;
          }
      }
  }

  return !stack.length;
};
