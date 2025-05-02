/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
 */
var singleNumber = function(nums) {
    const numsSet = new Set();
   let result = 0;

   for (let n of nums) {
       if (numsSet.has(n)) {
           result -= n
       } else {

           numsSet.add(n)
           result += n
       }

   }

   return result;
};