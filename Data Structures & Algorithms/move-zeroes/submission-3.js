class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let n = nums.length
        let p = 0 
        for(let i = 0 ; i < n ; ++i){
            let temp = 0
            if(nums[i] !== 0 ){
                temp = nums[p]
                nums[p] = nums[i]
                nums[i] = temp
                p = p+1
            }
        }
    }
}
