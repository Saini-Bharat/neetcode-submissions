class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        let map = {}
        let min = s.length;
        for(let i = 0 ; i < s.length ; ++i){
            map[s[i]] = (map[s[i]] || 0) + 1
        }
        console.log("map", map)
        let keys = Object.keys(map);
        console.log("keys", keys)


        for(let i = 0 ; i < keys.length ; ++i){
            console.log("map[keys[i]]",map[keys[i]])
            if(map[keys[i]] == 1){
                return s.indexOf(keys[i])
            }
        }
        return -1
    }
}
