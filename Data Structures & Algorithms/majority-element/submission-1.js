class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const req = nums.length/2
        const map = {}
        if(nums.length == 1){
            return nums[0]
        }
        for(let i = 0 ; i < nums.length ; ++i){
            if(Object.hasOwn(map, nums[i])){
                ++map[nums[i]]
                if(map[nums[i]] > req){
                    return nums[i]
                } 
            }else{
                map[nums[i]] = 1
            }
        }
    }
}
