/**
 * @param {character[][]} board
 * @return {boolean}
 */

// TODO: Refcatore this
const isValidSudoku = function(board) {
    const colMap = new Map();
    const squareMap = new Map();

    for (let r = 0; r < board.length; r++) {
        const row = board[r];
        const rowSet = new Set();

        for (let i = 0; i < row.length; i++) {
            const rowValue = row[i];
            const squareKey = Math.floor(r / 3) * 3 + Math.floor(i / 3);

            if (rowValue === ".") continue; 

            if (!validateCol(rowValue, colMap, i)) return false;
            if (!validateSquare(rowValue, squareMap, squareKey)) return false;
            if (rowSet.has(rowValue)) return false;
            
            rowSet.add(rowValue);
        }
    }

    return true;
};

function validateCol(rowValue, colMap, i) {
    if (colMap.has(i)) {
        const colSet = colMap.get(i);
        if (colSet.has(rowValue)) return false;
        colSet.add(rowValue);
    } else {
        colMap.set(i, new Set([rowValue]));
    }
    return true;
}

function validateSquare(rowValue, squareMap, squareKey) {
    if (squareMap.has(squareKey)) {
        const squareSet = squareMap.get(squareKey);
        if (squareSet.has(rowValue)) return false;
        squareSet.add(rowValue);
    } else {
        squareMap.set(squareKey, new Set([rowValue])); 
    }
    return true;
}
