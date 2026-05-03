class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        let sorted = [...heights]
        sorted.sort((a,b) =>  a - b)
        let count = 0 
        for(let i = 0 ; i < heights.length ; ++i){
            if(heights[i] != sorted[i]){
                count += 1
            }
        }
        return count 
    }
}
