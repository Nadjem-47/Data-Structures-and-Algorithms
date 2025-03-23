const searchMatrix = function(matrix, target) {

    let n = matrix.length;
    let m = matrix[0].length

    let low = 0
    let height = n * m - 1;

    while (low <= height) {
        let mid = Math.floor((low + height) / 2);

        let row = Math.floor(mid / m)
        let col = mid % m;

        if (matrix[row][col] === target)
            return true

        if (matrix[row][col] < target) {

            low = mid + 1;

        } else {
            height = mid - 1
        }

    }

    return false
};

searchMatrix([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 10)
