class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const map = {}
        for (let i = 1 ; i<=heights.length ; ++i){
            for (let j = i + 1 ; j <= heights.length ; ++j){
                let key = String(i) + "-" + String(j);
                let smaller = heights[i - 1] > heights[j - 1] ? j : i
                if(!Object.hasOwn(map,key)){
                    map[key] = (j-i) * heights[smaller - 1 ]
                }
            }
        }
        const [key, value] = Object.entries(map)
        .reduce((a, b) => (b[1] > a[1] ? b : a));
        return value
    }
}
