class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1
        let zero = 0
        for (let i =0 ; i < nums.length ; ++i){
            if(nums[i] == 0){
                zero++ 
            }else{
                product *= nums[i]
            }
        }
        if(zero > 1){ return Array(nums.length).fill(0);}

        const output = new Array(nums.length)
        for (let i =0 ; i < nums.length ; ++ i ){
            if(zero > 0){
                output[i] = nums[i] === 0 ? product : 0
            }else{
                output[i] = product / nums[i]
            }
        }
        return output
    }
}
