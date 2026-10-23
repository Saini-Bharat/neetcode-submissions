class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        // let a = m - 1
        // let b = n - 1
        // let end = m+n -1
        // while (a > 0 && b > 0){
        //     if(nums1[a] > nums2[b]){
        //         nums1[end] = nums1[a]
        //         a--
        //     }else{
        //         nums1[end] = nums2[b]
        //         b--
        //     }
        //     end--
        // }
        // while (b > 0){
        //     nums1[end] = nums2[b]
        //     end--
        //     b--
        // }
        nums1.unshift(...nums2)
        nums1.splice(nums1.length - n , n)
        nums1.sort((a,b) => a-b)
        

    }
}
