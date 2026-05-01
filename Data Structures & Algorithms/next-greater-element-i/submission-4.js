class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let map = {}
        let result = new Array(nums1.length).fill(-1)
        let stack = []
        for (let i = 0 ; i < nums1.length ; ++i){
            map[nums1[i]] = i
        }

        for (let i = 0 ; i < nums2.length ; ++i){
            if(Object.hasOwn(map , nums2[i])){
                if(stack.length > 0){
                    if(nums2[i] > stack[stack.length - 1]){
                        while(nums2[i] > stack[stack.length -1]){
                            let ele = stack.pop()
                            result[map[ele]] = nums2[i]  
                        }
                    }
                }
                stack.push(nums2[i]);
                
            }else{
                if(nums2[i] > stack[stack.length - 1]){
                        while(nums2[i] > stack[stack.length -1]){
                            let ele = stack.pop()
                            result[map[ele]] = nums2[i]  
                        }
                    }
            }

        }

        return result

    }
}
