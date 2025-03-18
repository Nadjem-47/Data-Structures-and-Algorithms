/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// TODO:reimplement
var maxSlidingWindow = function(nums, k) {

    const deque = [];
    const result = [];

    for (let right = 0; right < nums.length; right++) {
        if (deque.length > 0 && deque[0] < right - k + 1) {
            deque.shift();
        }

        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[right]) {
            deque.pop();
        }

        deque.push(right);

        if (right >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};
