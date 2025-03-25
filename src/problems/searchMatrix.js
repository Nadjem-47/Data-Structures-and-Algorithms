const searchMatrix = function(matrix, target) {
    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let currentRow = matrix[middle];

        if (target >= currentRow[0] && target <= currentRow[currentRow.length - 1]) {
            let rowLeft = 0;
            let rowRight = currentRow.length - 1;

            while (rowLeft <= rowRight) {
                let mid = Math.floor((rowLeft + rowRight) / 2);
                let currentValue = currentRow[mid];

                if (currentValue === target) return true;
                if (currentValue < target) rowLeft = mid + 1;
                else rowRight = mid - 1;
            }
            return false;
        }

        if (target > currentRow[currentRow.length - 1]) left = middle + 1;
        else right = middle - 1;
    }

    return false;
};

searchMatrix([[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]], 10)
