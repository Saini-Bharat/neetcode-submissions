class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums) {
        let inc = true
        let dec = true
        for(let i=1 ; i < nums.length ; ++i){
            if((nums[i] < nums[i - 1])){
                inc = false
            }
        }

        if(inc){
            return inc
        }

        for(let i=1 ; i < nums.length ; ++i){
            if((nums[i] > nums[i - 1])){
                dec = false
            }
        }

        return dec
    }
}
