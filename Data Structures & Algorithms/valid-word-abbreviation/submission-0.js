class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let i = 0
        let j = 0 
        while(i < word.length && j < abbr.length){
            if(word[i] == abbr[j]){
                i = i +1
                j = j +1
            }else if(this.isAlpha(abbr[j]) || abbr[j] == "0"){
                return false
            }else{
                let sub = 0
                while(j < abbr.length && !this.isAlpha(abbr[j])){
                    sub = sub*10 + Number(abbr[j])
                    j = j +1
                }
                i = i + sub
            }
        }

        return i === word.length && j === abbr.length
    }

    isAlpha(char){
        return /^[a-zA-Z]$/.test(char)
    }
}
