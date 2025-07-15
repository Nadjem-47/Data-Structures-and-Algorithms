var findKthLargest = function(nums, k) {
    k = nums.length - k;

    function quickSelect(l, r) {
        const pivot = nums[r];
        let p = l;
        for (let i = l; i < r; i++) {
            if (nums[i] <= pivot) {
                [nums[i], nums[p]] = [nums[p], nums[i]];
                p++;
            }
        }

        // Put pivot in its correct position
        [nums[p], nums[r]] = [nums[r], nums[p]];

        if (p > k) {
            return quickSelect(l, p - 1);
        } else if (p < k) {
            return quickSelect(p + 1, r);
        } else {
            return nums[p];
        }
    }

    return quickSelect(0, nums.length - 1);
};
