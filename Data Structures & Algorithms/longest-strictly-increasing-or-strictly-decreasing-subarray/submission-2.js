class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let maxInc = 0 , maxDec = 0 , streakInc = 1 , streakDec = 1
        if(nums.length == 1){
            return 1
        }
        for(let i = 1 ; i< nums.length ; ++i){
            if(nums[i-1] > nums[i]){
                streakDec += 1
                streakInc = 1
            }else if (nums[i-1] < nums[i]){
                streakInc += 1
                streakDec = 1
            }else{
             
                streakInc = 1
                streakDec = 1
            }
               maxDec = maxDec > streakDec ? maxDec : streakDec
                maxInc = maxInc > streakInc ? maxInc : streakInc
        }

        return maxInc > maxDec ? maxInc : maxDec
    }
}
