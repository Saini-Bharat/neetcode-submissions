class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let arr = []
        for(let i =0 ; i < nums.length; ++i){
            arr.push(nums[i]*nums[i])
        }
        return arr.sort((a,b) => a-b)
    }
}
