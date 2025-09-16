/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
 */
var permute = function(nums) {
    
    const result = [];
    const used = new Set();

    function backtrack(path) {

        if (path.length === nums.length) {
            result.push([...path])
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used.has(i))
                continue;
            used.add(i)
            path.push(nums[i])
            backtrack(path)
            path.pop()
            used.delete(i)
        }

    }

    backtrack([])

    return result;
};
