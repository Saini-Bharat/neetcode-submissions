class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let i = 0;
        let j = s.length - 1;
        while(s[j] === " " && j >= 0){
            --j
        }
        while (s[j] != " " && j >= 0){
            --j
            ++i
        }
        return i 
    }
}
