class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let total = 0 
        let leftSum = 0
        for(let i = 0 ; i < nums.length ; ++i){
            total = total + nums[i]
        }
        for(let i = 0 ; i < nums.length ; ++i){
            let rightSum = total - nums[i] - leftSum
            if(leftSum == rightSum){
                return i
            }
            leftSum = leftSum + nums[i]
        }
        return -1 
        
    }
}
