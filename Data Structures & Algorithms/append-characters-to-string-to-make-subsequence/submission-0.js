class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0;
        let j = 0;
        for(i ; i < s.length; ++i){
            if(j >= t.length){
                return t.length - j
            }
            if(s[i] === t[j]){
                ++j
            }
        }
        return t.length - j

    }
}
