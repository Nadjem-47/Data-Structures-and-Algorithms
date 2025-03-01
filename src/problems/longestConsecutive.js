const longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    const numsSet = new Set(nums);
    let result = 0;

    for (let n of numsSet) { 
        if (!numsSet.has(n - 1)) { 
            let current = n;
            let sequence = 1;

            while (numsSet.has(current + 1)) {
                current++;
                sequence++;
            }

            result = Math.max(result, sequence);
        }
    }

    return result;
};