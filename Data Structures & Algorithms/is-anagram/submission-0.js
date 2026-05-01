class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false
        }
        let sMap =  {}

        // Object.hasOwn(sMap,s[i])
        for(let i = 0 ; i < s.length ; ++i ){
            if(Object.hasOwn(sMap,s[i])){
                ++sMap[s[i]]
            }else{
                sMap[s[i]] = 1
            }
        }
        for(let i = 0 ; i<t.length ; ++i){
            if(Object.hasOwn(sMap,t[i])){
                if(sMap[t[i]] == 0){
                    return false
                }
                --sMap[t[i]]
            }else{
                return false
            }
        }
        return true
    }
}
