class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = []
        let right = []
        let min = []
        let total = 0
        let max = 0
        for (let i = 0 ; i < height.length ; ++i){
            if(i != 0 ){
               max = max > height[i - 1] ? max : height[i - 1];
               left.push(max);
            }else{
                left.push(0);
            }
        }
        max = 0
        for (let i = height.length - 1 ; i >= 0  ; --i){
            if(i != height.length - 1 ){
               max = max > height[i + 1 ] ? max : height[i + 1];
               right.unshift(max);
            }else{
                right.push(0);
            }
        }
        for (let i = 0 ; i < height.length ; ++i){
            min.push(Math.min(left[i],right[i]))
        }
        for (let i = 0 ; i < height.length ; ++i){
            if(min[i] - height[i] > 0){
                total = total + min[i] - height[i]
            }
        }
        return total
    }
}
