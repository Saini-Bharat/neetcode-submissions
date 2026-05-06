class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        let map = {}
        for(let i = 0 ; i < nums.length ; ++i){
            if(Object.hasOwn(map , nums[i])){
                map[nums[i]] += 1
            }else{
                map[nums[i]] = 1
            }
        }
        let values = Object.values(map);
        for(let i = 0 ; i < values.length ; ++i){
            if(values[i] % 2 != 0){
                return false
            }
        }
        return true
    }
}
