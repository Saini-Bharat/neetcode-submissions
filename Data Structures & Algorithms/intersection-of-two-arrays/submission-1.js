class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        let map = new Set(nums1)
        let common = new Set()
        for(let i = 0 ; i < nums2.length ; ++i){
            if(map.has(nums2[i])){
                common.add(nums2[i])
            }
        }
        return [...common]
    }
}
