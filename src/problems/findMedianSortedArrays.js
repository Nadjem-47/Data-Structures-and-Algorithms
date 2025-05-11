/*
Median of Two Sorted Arrays
You are given two integer arrays nums1 and nums2 of size m and n respectively, where each is sorted in ascending order. Return the median value among all elements of the two arrays.


Example 1:

Input: nums1 = [1,2], nums2 = [3]

Output: 2.0
Explanation: Among [1, 2, 3] the median is 2.

Example 2:

Input: nums1 = [1,3], nums2 = [2,4]

Output: 2.5
Explanation: Among [1, 2, 3, 4] the median is (2 + 3) / 2 = 2.5.
*/
var findMedianSortedArrays = function(nums1, nums2) {
    let A = nums1;
    let B = nums2;
    let total = nums1.length + nums2.length;
    let half = Math.floor(total / 2);

    if (A.length > B.length) {
        [A, B] = [B, A];
    }

    let left = 0;
    let right = A.length - 1;

    while (true) {
        let i = Math.floor((left + right) / 2); // A's partition
        let j = half - i - 2; // B's partition

        let Aleft = i >= 0 ? A[i] : -Infinity;
        let Aright = i + 1 < A.length ? A[i + 1] : Infinity;
        let Bleft = j >= 0 ? B[j] : -Infinity;
        let Bright = j + 1 < B.length ? B[j + 1] : Infinity;

        if (Aleft <= Bright && Bleft <= Aright) {
            if (total % 2) {
                return Math.min(Aright, Bright);
            }
            return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
        } else if (Aleft > Bright) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }
};