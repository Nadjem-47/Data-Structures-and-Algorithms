
/**
 * Calculates the total amount of trapped rainwater given an elevation map.
 *
 * @param {number[]} height - An array representing the elevation map where each element is a non-negative integer.
 * @returns {number} - The total amount of rainwater that can be trapped.
 *
 * This function uses a two-pointer approach to calculate the trapped water.
 * It maintains left and right pointers along with their respective maximum heights
 * and iteratively calculates trapped water by finding the minimum of the two maximums.
 */

const trap = function(height) {
    if (!height)
        return 0;

    let left = 0;
    let right = height.length - 1;

    let leftMax = height[left];
    let rightMax = height[right];

    let result = 0;

    while (left < right) {
        if (leftMax < rightMax) {
            left++
            leftMax = Math.max(leftMax, height[left])
            result += leftMax - height[left]
        } else {
            right--
            rightMax = Math.max(rightMax, height[right])
            result += rightMax - height[right]
        }
    }

    return result;
};