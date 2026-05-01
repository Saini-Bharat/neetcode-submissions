class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let hit = 0
        for (let i = 0 ; i< nums.length ; ++i){
            let sum = 0
            for (let j = i ; j < nums.length ; ++ j){
                
                sum = sum + nums[j]
                if(sum === k){
                    hit += 1
                }
            }
        }

        return hit 
            
        
        
    }
}
