class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num) {
        let streak = 1
        let max = 0 
        for(let i = 1 ; i < num.length ; ++i){
            if(num[i] === num[i -1]){
                streak++
            }else{
                streak = 1;
            }
            if(streak == 3){
                max = max > num[i] ? max : num[i]
            }
        }
        return max != 0 || typeof max == 'string' ? String(max) + String(max) + String(max) : ""
    }
}
