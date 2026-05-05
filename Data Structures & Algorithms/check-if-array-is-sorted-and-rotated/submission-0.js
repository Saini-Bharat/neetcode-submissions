class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums) {
        const L = nums.length;
        let count = 1;
        for(let i = 1 ; i <= 2*L ; ++i){
            if(nums[(i - 1) % L] <= nums[i%L]){
                count++
            }else{
                count = 1 
            }
            if(count == L){
                return true
            }
        }
        return L === 1
    }
}
