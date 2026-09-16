class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[][]}
     */
    findDifference(nums1, nums2) {
        let map1 = {}
        let map2 = {}
        let res1 = []
        let res2 = []
        let n1 = nums1.length
        let n2 = nums2.length
        let larger = n1>n2 ? n1 : n2

        for(let i = 0 ; i <nums1.length ; ++i){
            map1[nums1[i]] = 1
        }

        for(let i = 0 ; i <nums2.length ; ++i){
            map2[nums2[i]] = 1
        }

        for(let i = 0 ; i<larger ; ++i){
            if(!Object.hasOwn(map1,nums2[i]) && !res2.includes(nums2[i]) && nums2[i] != undefined){
                res2.push(nums2[i])
            }
            if(!Object.hasOwn(map2,nums1[i]) && !res1.includes(nums1[i]) && nums1[i] != undefined){
                res1.push(nums1[i])
            }
        }

        return [res1,res2]
    }
}
