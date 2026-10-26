class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let n = nums.length
        let p = 0 
        for(let i = 0 ; i < n ; ++i){
            if(nums[i] != 0 ){
                nums[p] = nums[i]
                p = p+1
            }
        }
        while( p < nums.length){
            nums[p] = 0 
            p = p+1
        }
        

    }
}
