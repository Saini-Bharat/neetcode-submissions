class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        let res = 0
        let map = new Set()
        for(let i = 0 ; i < s.length ; ++i){
            if(map.has(s[i])){
                map.delete(s[i]);
                res += 2
            }else{
                map.add(s[i])
            }
        }

        return map.size == 0 ? res : res + 1    
    }
}
