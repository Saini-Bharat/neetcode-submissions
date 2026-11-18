class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        let i =0
        let j = nums.length - 1 
        while (i < j){
            if(nums[i] % 2 != 0 ){
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
                j--
            }else{
                i++
            }
        }
        return nums
    }
}
