class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        let str = s.split(" ");
        if(pattern.length != str.length){
            return false
        }
        console.log("aage")
        let charToStr = {}
        let strToChar = {}
        

        for(let i = 0 ; i < pattern.length ; ++i){
            if(Object.hasOwn(charToStr, str[i]) && (charToStr[str[i]] != pattern[i])){
                return false
            }
            if(Object.hasOwn(strToChar, pattern[i]) && (strToChar[pattern[i]] != str[i])){
                return false
            }
            charToStr[str[i]] = pattern[i]
            strToChar[pattern[i]] = str[i]

        }

        return true
    }
}
