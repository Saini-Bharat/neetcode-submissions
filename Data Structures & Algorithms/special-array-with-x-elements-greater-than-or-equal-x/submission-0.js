class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    specialArray(nums) {
        for(let i = 1 ; i <= nums.length ; ++i){
            let eligible = 0 
            for(let j = 0 ; j < nums.length ; ++j){
                if(nums[j] >= i){
                    eligible++
                }
            }
            if(eligible == i){
                return i
            }
        }
        return -1
    }
}
