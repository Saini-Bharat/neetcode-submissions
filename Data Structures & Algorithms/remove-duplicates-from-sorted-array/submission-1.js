class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let map = {}
        for(let i = 0 ; i < nums.length ; ++i){
            if(Object.hasOwn(map,nums[i])){
                nums.splice(i , 1)
                i--
            }else{
                map[nums[i]] = 1
            }
        }
        return Object.keys(map).length
    }
}
