class Solution {
    /**
     * @param {number[]} spells
     * @return {number[]}
     */
    mergeArrays(nums1, nums2) {
        let map = {}
        let res = []
        for(let i = 0 ; i < nums1.length ; ++i){
            map[nums1[i][0]] = (map[nums1[i][0]] || 0 ) + nums1[i][1]
        }
        for(let i = 0 ; i < nums2.length ; ++i){
            map[nums2[i][0]] = (map[nums2[i][0]] || 0 ) + nums2[i][1]
        }
        let key = Object.keys(map).sort((a,b) => a-b)
        for(let i = 0 ; i <key.length ; ++i){
            res.push([Number(key[i]),map[key[i]]])
        }
        return res
    }
}
