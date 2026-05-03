class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        let check = new Array(101).fill(0)
        let sorted = []
        for(let i = 0 ; i < heights.length; ++i){
            check[heights[i]] += 1
        }
        for(let i = 1 ; i<= 100 ; ++i){
            let freq = check[i]
            for(let j = 0 ; j < freq ; ++j){
                sorted.push(i)
            }
        }
        let count = 0 
        for(let i = 0 ; i < heights.length ; ++i){
            if(heights[i] != sorted[i]){
                count += 1
            }
        }
        return count 
    }
}
