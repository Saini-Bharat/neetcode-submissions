class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let map = {}
        let req = nums.length / 3
        let res = []
        if(nums.length < 3 ){
            return nums
        }
        for( let i = 0 ; i< nums.length ; ++i){
            if(Object.hasOwn(map , nums[i])){
                map[nums[i]] += 1
                if(map[nums[i]] > req){
                    res.push(nums[i])
                }
            }else{
                map[nums[i]] = 1
            }
        }
        let final = new Set(res)
        return [...final]
    }
}
