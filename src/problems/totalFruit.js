/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = function(fruits) {
    const basket = {};
    let left = 0;
    let maxFruits = 0;

    for (let right = 0; right < fruits.length; right++) {
        const currentFruit = fruits[right];
        basket[currentFruit] = (basket[currentFruit] || 0) + 1;

        while (Object.keys(basket).length > 2) {
            const fruitCount = basket[fruits[left]];
            if (fruitCount === 1) {
                delete basket[fruits[left]];
            } else {
                basket[fruits[left]] = fruitCount - 1;
            }
            left++;
        }

        maxFruits = Math.max(maxFruits, right - left + 1);
    }

    return maxFruits;
};
