class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {

         let sorted = false
        while(!sorted){
            let temp 
            let hogok = true
            for (let i = 0 ; i<nums.length ; ++i){
                if(nums[i] > nums[i+1]){
                    temp = nums[i]
                    nums[i] = nums[i + 1]
                    nums[i + 1] = temp
                    hogok = false
                }
            }
            sorted = hogok
        }
        return nums
    }
}
