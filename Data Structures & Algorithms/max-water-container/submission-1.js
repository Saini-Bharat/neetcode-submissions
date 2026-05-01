class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        // brute force

        // const map = {}
        // for (let i = 1 ; i<=heights.length ; ++i){
        //     for (let j = i + 1 ; j <= heights.length ; ++j){
        //         let key = String(i) + "-" + String(j);
        //         let smaller = heights[i - 1] > heights[j - 1] ? j : i
        //         if(!Object.hasOwn(map,key)){
        //             map[key] = (j-i) * heights[smaller - 1 ]
        //         }
        //     }
        // }
        // const [key, value] = Object.entries(map)
        // .reduce((a, b) => (b[1] > a[1] ? b : a));
        // return value


        // linear time 

        let res = 0
        let left = 0
        let right = heights.length - 1; 
        while (left != right){
            let smaller = heights[left] > heights[right] ? right : left
            res = res > (heights[smaller] * (right - left)) ? res : (heights[smaller] * (right - left))
            if( heights[left] > heights[right]){
                right--
            }else{
                left++
            }
        }
        return res
    }
}
