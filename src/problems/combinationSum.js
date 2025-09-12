/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
    

    const result = [];



    function backtrack(start , path) {

        const sum = path.reduce((a, v) => a + v, 0);

        if (sum === target) {
            result.push([...path])
            return;
        }

        if (sum > target) return;


        for (let i = start ; i < candidates.length ; i++) {
            path.push(candidates[i])
            backtrack(i, path)
            path.pop()
        }

    }

backtrack(0, [])

return result;

};
