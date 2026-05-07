class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        let count = 0 
        let map = {};
        for (let i = 0 ; i < nums.length ; ++i){
            count += map[nums[i]] || 0 
            if(Object.hasOwn(map, nums[i])){
                map[nums[i]] += 1
            }else{
                map[nums[i]] = 1
            }       
        } 
        return count 
    }
}
