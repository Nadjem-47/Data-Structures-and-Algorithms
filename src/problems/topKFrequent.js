
/**
 * Finds the k most frequent elements in the given array.
 *
 * @param {number[]} nums - An array of integers.
 * @param {number} k - The number of top frequent elements to return.
 * @return {number[]} - An array containing the k most frequent elements.
 *
 * This function uses a frequency map to count occurrences of each number,
 * then utilizes bucket sort to gather numbers by frequency, and finally
 * extracts the top k frequent elements.
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

    

