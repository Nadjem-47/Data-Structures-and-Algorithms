/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
   let condidate = null;
   let count = 0;

   for (let num of nums) {
        if (count === 0) {
            condidate = num;
        }
        count += (condidate === num) ? 1 : -1

   }

   return condidate;
};
