class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        // sorting approach

        // if(nums.length != 0){
        //     const sortedArray = [...new Set([...nums].sort((a, b) => b - a))];
        // let largest = 1
        // let currentlarge = 1
        // for (let i = 0 ; i<nums.length ; ++ i ){
            
        //         if(sortedArray[i] - sortedArray[i + 1] == 1){
        //             currentlarge += 1
        //             largest = largest > currentlarge ? largest : currentlarge
        //         }else{
        //             currentlarge = 1
        //         }
            
        // }
        // return largest
        // }else{
        //     return 0
        // }




        // Map approach

        let largest = 0 
        const Nums = new Set(nums)

        for ( const num of Nums) {
            if(!Nums.has(num - 1)){
                let curr = num;
                let seq = 1 ;
                while(Nums.has(curr + 1)){
                    curr++
                    seq++
                }
                largest = Math.max(largest, seq);
            }
        }
        return largest
    }
}
