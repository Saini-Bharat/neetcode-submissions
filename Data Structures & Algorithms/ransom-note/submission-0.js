class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        let map = {}
        for(let i = 0 ; i < magazine.length ; ++i){
            map[magazine[i]] = (map[magazine[i]] || 0 ) + 1
        }
        for(let i = 0 ; i < ransomNote.length ; ++i){
            if(Object.hasOwn(map,ransomNote[i])){
                if(map[ransomNote[i]] <= 0){
                    return false
                }else{
                    map[ransomNote[i]]--
                }
            }else{
                return false
            }
        }
        return true
    }
}
