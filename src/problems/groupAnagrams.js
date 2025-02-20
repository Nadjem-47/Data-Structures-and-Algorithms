/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const anagramsMap = new Map();

    for (let str of strs) {
        const key = str.split("").sort().join("")
        if (anagramsMap.has(key)) {
            anagramsMap.get(key).push(str)
        } else {
            anagramsMap.set(key, [str])
        }
    }

    return [...anagramsMap.values()]
};


groupAnagrams(["eat","tea","tan","ate","nat","bat"])