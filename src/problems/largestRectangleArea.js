// TODO : Resolve


/**
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0;
const stack = [];

for (let i = 0; i < heights.length; i++) {

    const h = heights[i]
    let start = i;

    while (stack.length && stack[stack.length - 1][1] > h) {
        const [index,height] = stack.pop();

        maxArea = Math.max(maxArea, height * (i - index))
        start = index
    }

    stack.push([start, h])
}

for (let j = 0; j < stack.length; j++) {
    const [i, h] = stack[j];
    maxArea = Math.max(maxArea, h * (heights.length - i));
}


return maxArea
};