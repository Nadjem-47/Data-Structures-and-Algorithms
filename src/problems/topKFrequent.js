/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    const frequentNums = new Map();
    let result = [];

    for (let num of nums) {
        frequentNums.set(num, (frequentNums.get(num) || 0) + 1);
    }

    let buckets = Array(nums.length + 1).fill(null).map( () => []);

    for (let[num,freq] of frequentNums) {
        buckets[freq].push(num);
    }

    for (let index = buckets.length - 1; index >= 0 && result.length < k; index--) {
        const bucket = buckets[index];
        if (bucket.length) {
            result.push(...bucket);
        }
    }

    return result.slice(0, k);
};