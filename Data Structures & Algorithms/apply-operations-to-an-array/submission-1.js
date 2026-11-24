class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    applyOperations(nums) {
        let temp = []
        for(let i = 0 ;i< nums.length ; ++i){
            if(nums[i] == nums[i+1]){
                nums[i+1] = 0
                nums[i] = nums[i]*2
            }
        }

        for(let i = 0 ; i < nums.length ; ++i){
            if(nums[i] != 0 ){
                temp.push(nums[i])
            }
        }

        for(let i = 0 ; i < nums.length ; ++i){
            nums[i] = i < temp.length ?  temp[i] : 0  
        }
        return nums
    }
}
