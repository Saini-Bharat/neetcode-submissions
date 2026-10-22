class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let n = Math.max(word1.length, word2.length)
        let res = []

            for(let i = 0 ; i < n ; ++i){
                
                if( i < word1.length){
                    res.push(word1[i])
                }
                if( i < word2.length){
                    res.push(word2[i])
                }

            }
            
        return res.join('')
    }
}
