class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}
        for( let i = 0 ; i < nums.length ; ++i){
            let req = target - nums[i]
            if(Object.hasOwn(map , req)){
                return map[req] > i ? [map[req], i] : [i , map[req]]
            }else{
                map[nums[i]] = i
            }
        }
    }
}
