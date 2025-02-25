export const search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middleIdx = Math.floor((left + right) / 2);
        let middle = nums[middleIdx];

        if (middle === target) return middleIdx;

        if (middle > target) {
            right = middleIdx - 1;
        } else {
            left = middleIdx + 1;
        }
    }

    return -1; 
};





console.log(search([-1,0,3,5,9,12], 9)); // Expected output: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected output: -1
