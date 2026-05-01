class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
canPlaceFlowers(flowerbed, n) {
    let k = n;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const prev = (i === 0) ? 0 : flowerbed[i - 1];
            const next = (i === flowerbed.length - 1) ? 0 : flowerbed[i + 1];

            if (prev === 0 && next === 0) {
                flowerbed[i] = 1;
                k--;

                if (k === 0) return true;
            }
        }
    }

    return k <= 0;
}
}
