class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        let n = nums.length
        let arr = new Array(n).fill(0);
        let p = 0 

        for(let i  = 0 ; i < n ; ++i){
            if(nums[i] != 0 ){
                arr[p] = nums[i]
                p++
            }
        }

        for(let i = 0 ; i < n ; ++i){
            nums[i] = arr[i]
        } 

    }
}
