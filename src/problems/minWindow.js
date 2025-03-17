/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// TODO: Resolve
var minWindow = function(s, t) {

    if (t === "")
        return "";

    let countT = {};
    let window = {};

    for (let char of t) {
        countT[char] = (countT[char] || 0) + 1
    }

    let have = Object.keys(countT).length;
    let need = 0;

    let result = [-1, -1];
    let resultLength = Infinity;
    let left = 0

    for (let right = 0; right < s.length; right++) {

        const current = s[right];
        window[current] = (window[current] || 0) + 1

        if (current in countT && window[current] === countT[current]) {
            need++;
        }

        while (have === need) {
            if ((right - left + 1) < resultLength) {
                result = [left, right]
                resultLength = right - left + 1
            }

            window[s[left]]--

            if (s[left]in countT && window[s[left]] < countT[s[left]]) {
                need--
            }
            left++
        }

    }

    return result !== Infinity ? s.slice(result[0], result[1] + 1) : ""
};