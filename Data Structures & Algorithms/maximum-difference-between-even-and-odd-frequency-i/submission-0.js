class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let map = {}
        let maxOdd = 0
        let minEven = s.length
        for (let i = 0 ; i<s.length ; ++i){
            if(Object.hasOwn(map, s[i])){
                map[s[i]] += 1
            }else{
                map[s[i]] = 1
            }
        }

        console.log("map", map)

        for (let i = 0 ; i < s.length ; ++i){
            console.log("i", i ,"s[i]", s[i], "(s[i] % 2))", !(map[s[i]] % 2))
            maxOdd = ((maxOdd < map[s[i]]) && !!(map[s[i]] % 2)) ? map[s[i]] : maxOdd
            minEven = ((minEven > map[s[i]]) && !(map[s[i]] % 2))  ? map[s[i]] : minEven
            console.log("((maxOdd < map[s[i]])", (maxOdd < map[s[i]]))
            console.log("maxOdd", maxOdd, "minEven", minEven)
        }

        return maxOdd - minEven
    }
}
