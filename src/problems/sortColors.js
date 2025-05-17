/**
 * Sort Colors
 * 
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 */
var sortColors = function(nums) {
       let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap with low and move both pointers
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // Move mid pointer
            mid++;
        } else {
            // Swap with high and move high pointer
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};