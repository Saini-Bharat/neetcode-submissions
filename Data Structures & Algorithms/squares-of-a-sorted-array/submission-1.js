class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let arr = []
        let l = 0
        let r = nums.length - 1
        while(l <= r){
            if(nums[l] * nums[l] > nums[r] *nums[r]){
                arr.unshift(nums[l]*nums[l])
                l++
            }else{
                arr.unshift(nums[r]*nums[r])
                r--
            }
        }
        return arr
    }
}
