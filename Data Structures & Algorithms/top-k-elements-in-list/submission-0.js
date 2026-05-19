class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}
        for(let i = 0 ; i < nums.length ; ++i){
            map[nums[i]] = (map[nums[i]] || 0) + 1
        }
        let res = Object.entries(map).sort(([,a],[,b]) => b-a).slice(0,k).map((arr, index) => {
            let [key , val] = arr
            return key
        })
        // let values = Object.values(map).sort((a,b) => b-a).slice(0,k)
        return res
    }
}
