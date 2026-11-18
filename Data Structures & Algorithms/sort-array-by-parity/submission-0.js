class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        let arr = []
        console.log("unms", nums)
        for(let i = 0 ; i < nums.length ; ++i){
            if(nums[i] % 2 === 0){
                arr.unshift(nums[i])
            }else{
                arr.push(nums[i])
            }
        }

        for(let i = 0 ; i < nums.length ; ++i){
            nums[i] = arr[i]
        }
        return nums
    }
}
