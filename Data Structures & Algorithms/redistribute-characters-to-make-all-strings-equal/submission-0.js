class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    makeEqual(words) {
        let map = {}
        for(let i = 0 ; i < words.length ; ++i){         
            for(let j = 0 ; j < words[i].length ; ++j){
                map[words[i][j]] = (map[words[i][j]] || 0) + 1
            }
        }
        let values = Object.values(map);
        for(let i = 0 ; i < values.length ; ++i){
            if(values[i] % words.length != 0){
                return false
            }
        }
        return true        
    }
}
