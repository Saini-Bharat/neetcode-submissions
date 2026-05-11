class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        let left = new Array(s.length).fill(0)
        let right = new Array(s.length).fill(0)
        let sum = 0 
        for(let i = 0 ; i < s.length ; ++i){
            
            if(s[i] == '0'){
                sum++
            }
            left[i] = sum
        }
        sum = 0
        for(let i = s.length - 1 ; i >= 0 ; --i){
            if(s[i] == '1'){
                sum++
            }
            right[i] = sum
        }
        console.log("left", left)
        console.log("right", right)

        let max = 0
        for(let i = 0 ; i < s.length - 1 ; ++i){
            max = max > left[i] + right[i + 1] ? max : left[i] + right[i + 1]
        }

        return max

    }
}
