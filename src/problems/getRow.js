/**
 * @param {number} rowIndex
 * @return {number[]}
 * 
 * 119. Pascal's Triangle II
 * 
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

 */
var getRow = function(rowIndex) {
    let result = Array(rowIndex + 1).fill(1);

    for (let i = 0; i <= rowIndex; i++) {

        for (let j = i - 1; j > 0; j--) {
            result[j] = result[j] + result[j - 1]
        }
    }

    return result;
};