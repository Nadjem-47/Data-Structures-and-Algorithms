//TODO: Resolve
const climbStairs = function(n) {

    let cache = new Map();

    function recursion(n) {
        if (n === 1)
            return 1;
        if (n === 2)
            return 2;

        if (cache.has(n)) {
            return cache.get(n);
        }

        let result = recursion(n - 1) + recursion(n - 2);
        cache.set(n, result);

        return result;
    }

    return recursion(n)
};
