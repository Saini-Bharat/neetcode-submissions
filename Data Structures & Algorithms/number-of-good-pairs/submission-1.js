class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums) {
        let count = 0 
        let map = {};
        for (let i = 0 ; i < nums.length ; ++i){
            if(Object.hasOwn(map, nums[i])){
                map[nums[i]] += 1
            }else{
                map[nums[i]] = 1
            }       
        } 
        let values = Object.values(map);
        for(let i = 0 ; i< values.length ; ++i){
            count = count + (values[i] * (values[i] - 1)) / 2 
        }
        return count 
    }
}
