const maxArea = function(height) {
    let left = 0;
let right = height.length - 1;
let area = 0;

while (left < right) {
    const leftVal = height[left];
    const rightVal = height[right];

    const minHeight = Math.min(leftVal, rightVal)

    area = Math.max(area, minHeight * (right - left))

    if (leftVal < rightVal) {
        left++
    } else {
        right--
    }

}
return area
};