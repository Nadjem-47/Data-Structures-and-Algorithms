/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.


Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

*/
var checkInclusion = function(s1, s2) {
    let n = s1.length, m = s2.length;
    if (n > m) return false;

    let count1 = Array(26).fill(0);
    let count2 = Array(26).fill(0);

    // Count frequency of characters in s1
    for (let i = 0; i < n; i++) {
        count1[s1.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i) - 97]++;
    }

    // Check if initial window is a permutation
    if (count1.join() === count2.join()) return true;

    // Sliding window: move right and update frequency counts
    for (let i = n; i < m; i++) {
        count2[s2.charCodeAt(i) - 97]++;  // Add new character
        count2[s2.charCodeAt(i - n) - 97]--; // Remove old character

        if (count1.join() === count2.join()) return true;
    }

    return false;
};
