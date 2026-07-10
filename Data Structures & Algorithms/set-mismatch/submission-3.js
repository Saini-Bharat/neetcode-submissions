class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums) {
        let map = new Set()
        let map2 = new Set(nums)
        let res = []
        for (let i = 1 ; i <= nums.length ; ++i ){
            if(map.has(nums[i-1])){
                res[0] = nums[i-1]
            }else{
                map.add(nums[i-1])
            }
            if(!map2.has(i)){
                res[1] = i
            }
        }

        return res
    }
}
