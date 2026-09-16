class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let len = s.length;
        for(let i = 0 ; i < len/2 ; ++i){
            let temp = s[i]
            s[i] = s[len-1-i]
            s[len-1-i] = temp
        }
        return s
    }
}
