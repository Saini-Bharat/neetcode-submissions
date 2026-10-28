class Solution {
    /**
     * @param {string} sentence
     * @return {boolean}
     */
    isCircularSentence(sentence) {
        
        for(let i = 0 ; i < sentence.length ; ++i){
            if(i == sentence.length - 1){
                if(sentence[0]!== sentence[i]){
                    return false
                }
            }
            if(sentence[i] == " "){
                if(sentence[i-1] !== sentence[i + 1]){
                    return false
                }
            }
        }
        return true
    }
}
