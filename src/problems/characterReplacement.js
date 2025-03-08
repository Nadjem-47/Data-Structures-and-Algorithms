// TODO: check this problem again
const characterReplacement = function(s, k) {
    const count = new Map();
    let result = 0;
    let left = 0;
    let maxFreq = 0; 

    for (let right = 0; right < s.length; right++) {
        const current = s[right];
        count.set(current, 1 + (count.get(current) || 0));

        maxFreq = Math.max(maxFreq, count.get(current));

        const windowLength = right - left + 1;
        if (windowLength - maxFreq > k) {
            const leftChar = s[left];
            count.set(leftChar, count.get(leftChar) - 1);
            left++;
        }

        result = Math.max(result, right - left + 1);
    }
    
    return result;
};
