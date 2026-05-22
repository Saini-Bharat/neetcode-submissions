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
        let keys = Object.keys(map)
        for(let i = 0 ; i < keys.length ; ++i){
            if(map[keys[i]] % 2 == 1){
                res = res + 1
                break;
            }
        }

        return res    
    }
}
