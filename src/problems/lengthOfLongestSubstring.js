const lengthOfLongestSubstring = function(s) {
    let left = 0;
    let result = 0;
    let subStr = "";

    for (let right = 0; right < s.length; right++) {
        const current = s[right];

        if (subStr.includes(current)) {
            left += subStr.indexOf(current) + 1;
        }

        subStr = s.substring(left, right + 1);
        result = Math.max(result, subStr.length);
    }

    return result;
};