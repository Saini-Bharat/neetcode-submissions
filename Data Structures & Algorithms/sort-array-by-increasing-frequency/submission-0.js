class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {

        let map = {}
        for(let i = 0 ; i < nums.length; ++i){
            map[nums[i]] = (map[nums[i]] || 0) + 1
        }
        nums.sort((a,b) => {
            if(map[a] !== map[b]){
                return map[a] - map[b]
            }
            return b - a
        })

        return nums


    }
}
