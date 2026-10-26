class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let map = {}
        for(let i = 0 ; i < nums.length ; ++i){
            console.log(map,"map", nums[i],"nums[i]")
            if(Object.hasOwn(map,nums[i])){
                console.log("inside")
                nums.splice(i , 1)
                i--
            }else{
                console.log("outside")
                map[nums[i]] = 1
            }
            console.log(map,"map", nums[i],"nums[i]")
        }
        console.log(map, Object.keys(map).length )
        return Object.keys(map).length
    }
}
