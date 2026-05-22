class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        let map = {}
        let res = 0
        for(let i = 0 ; i < s.length ; ++i){
            map[s[i]] = (map[s[i]] || 0) + 1
            if(map[s[i]] % 2 == 0){
                res = res + 2
            }
        }

        if(res < s.length){
            res = res + 1
        }

        return res    
    }
}
