class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let maxSum = nums[0] , streakSum = nums[0];
        if(nums.length ==1){
            return nums[0]
        }
        for(let i = 1 ; i< nums.length ; ++i){
            if(nums[i-1] < nums[i]){
                streakSum = streakSum + nums[i]
            }else{
                streakSum = nums[i]
            }
            maxSum = maxSum > streakSum ? maxSum : streakSum
        }

        return maxSum
    }
}
