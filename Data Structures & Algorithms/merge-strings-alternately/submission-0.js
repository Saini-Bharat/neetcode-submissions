class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let o = word1.length
        let t = word2.length
        let n = o > t ? o : t
        let res = ''

            for(let i = 0 ; i < n ; ++i){
                let one = ''
                let two = ''
                if(word1[i]){
                    one = word1[i]
                }
                if(word2[i]){
                    two = word2[i]
                }
                res = res + one + two
            }
            
        return res
    }
}
