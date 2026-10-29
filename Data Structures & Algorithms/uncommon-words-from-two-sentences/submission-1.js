class Solution {
    /**
     * @param {string} s1
     * @return {string[]}
     */
    uncommonFromSentences(s1, s2) {
        let map1 = {}
        let map2 = {}
        let word = ''
        for (let i = 0 ; i <s1.length ; ++i){
                        if(s1[i] !== ' '){
                word = word + s1[i]

            }
            if(s1[i] == ' ' || i == s1.length - 1){
                map1[word] = (map1[word] || 0) + 1
                word = ''
            }
            
        }
        word =''
        for (let i = 0 ; i <s2.length ; ++i){
            if(s2[i] !== ' '){
                word = word + s2[i]

            }
            if(s2[i] == ' ' || i == s2.length - 1){
                map2[word] = (map2[word] || 0) + 1
                word = ''
            }
            
        }
        let unique = [];
        let key1 = Object.keys(map1)
        let key2 = Object.keys(map2)
        for(let i = 0 ; i < key1.length ; ++i){
            if(map1[key1[i]] == 1 && !Object.hasOwn(map2, key1[i])){
                unique.push(key1[i])
            }
        }
        for(let i = 0 ; i < key2.length ; ++i){
            if(map2[key2[i]] == 1 && !Object.hasOwn(map1, key2[i])){
                unique.push(key2[i])
            }
        }

        return unique
    }
}
