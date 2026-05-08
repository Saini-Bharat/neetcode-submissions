class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {
        let map = {}
        let count = 0 
        for(let i = 0 ; i < chars.length ; ++i){
            map[chars[i]] = (map[chars[i]] || 0) + 1
        }
        for(let i = 0 ; i < words.length ; ++i){
            let test = structuredClone(map)

            for(let j = 0 ; j <= words[i].length ; ++j){
                if(j == words[i].length){
                    count = count + j
                }
                if(Object.hasOwn(test, words[i][j])){
                    if(test[words[i][j]] > 0){
                        test[words[i][j]] -= 1
                    }else{
                        break
                    }
                }else{
                    break
                }
            }
        }
        return count 
    }
}
