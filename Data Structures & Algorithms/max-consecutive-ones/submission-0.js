class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let max = 0 ;
        let streak = true ;
        let streakCount = 0
        for (let i =0 ; i<=nums.length ; ++i){
            if(nums[i] === 1){
                streak = true;
            }else{
                streak = false
            }
            if(streak){
                ++streakCount
            }else{
                max = max > streakCount ? max : streakCount ;
                streakCount = 0 ;
            }
        }
        return max
    }
}
