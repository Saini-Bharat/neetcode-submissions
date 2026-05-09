class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        let map = {}
        let count = 0 
        for(let i = 0 ; i < allowed.length ; ++i){
            map[allowed[i]] = (map[allowed[i]] || 0) + 1
        }
        for(let i = 0 ; i < words.length ; ++i ){
            let check = structuredClone(map);
            let stage = true
            for(let j = 0 ; j < words[i].length ; ++j){
                if(!Object.hasOwn(check, words[i][j])){
                    stage = false
                }

            }  
            if(stage){
                count++
            }
        }

        return count 
    }
}
