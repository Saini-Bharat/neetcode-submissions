class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let map = {}
        let res = []
        for(let i = 0 ; i< nums.length ; ++i){
            if(Object.hasOwn(map , nums[i])){
                map[nums[i]] += 1
            }else{
                map[nums[i]] = 1
            }
        }
        for(let i = 1 ; i<= nums.length ; ++i){
            if(!Object.hasOwn(map, i)){
                res.push(i)
            }
        }
        return res
    }
}
