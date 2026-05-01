class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let result = 0 
        for (let i = 1 ; i < s.length ; ++i) {
            result = result + Math.abs(s[i].charCodeAt(0) - s[i - 1].charCodeAt(0))
        }
        return result
    }
}
