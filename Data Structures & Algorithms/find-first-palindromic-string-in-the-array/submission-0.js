class Solution {
    /**
     * @param {string[]} words
     * @return {string}
     */
    firstPalindrome(words) {
        for(let i = 0 ; i <words.length ; ++i){
            if(this.isPal(words[i])){
                return words[i]
            }
        }
        return ""
    }

    isPal(word){
        let r = word.length - 1
        for(let i = 0 ; i < word.length ; ++i){
            if(word[i] != word[r]){
                return false
            }
            r--
        }
        return true
    }
}
