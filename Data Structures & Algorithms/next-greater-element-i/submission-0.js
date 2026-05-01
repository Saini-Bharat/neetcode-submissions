class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let map = {}
        let result = []
        for (let i = 0 ; i < nums1.length ; ++i){
            map[nums1[i]] = i
        }

        for (let i = 0 ; i , i < nums2.length ; ++i){
            if(Object.hasOwn(map , nums2[i])){
                for(let j = i+1 ; j <= nums2.length ; ++j){
                    if(nums2[j] > nums2[i]){
                        result[map[nums2[i]]] = nums2[j]
                        break
                    }
                    if(j === nums2.length){
                        result[map[nums2[i]]] = -1
                    }
                }
            }
        }

        return result

    }
}
