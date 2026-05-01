class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length != 0){
            const sortedArray = [...new Set([...nums].sort((a, b) => b - a))];
        let largest = 1
        let currentlarge = 1
        for (let i = 0 ; i<nums.length ; ++ i ){
            
                if(sortedArray[i] - sortedArray[i + 1] == 1){
                    currentlarge += 1
                    largest = largest > currentlarge ? largest : currentlarge
                }else{
                    currentlarge = 1
                }
            
        }
        return largest
        }else{
            return 0
        }
    }
}
