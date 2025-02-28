
// Sorted arr
const twoSum = function(numbers, target) {
    let p1 = 0;
    let p2 = numbers.length - 1;

    while (p2 > p1) {
        const sum = numbers[p1] + numbers[p2]

        if (sum > target) {
            p2--;
        } else if (sum < target) {
            p1++;
        } else {
            return [p1 + 1, p2 + 1]
        }

    }
};

twoSum([1, 2, 3, 4], 7)