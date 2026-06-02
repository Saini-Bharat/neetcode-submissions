class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxLengthBetweenEqualCharacters(s) {
        let map = {}
        let res = 0
        let found = false
        for(let i = 0 ; i < s.length ; ++i){
            // if(Object.hasOwn(map , s[i] )){
            //     res = res < map[s[i]] ? map[s[i]] : res
            // }else{
            //     Object.keys(map).forEach(key => {
            //         map[key] += 1;
            //     });
            //     map[s[i]] = 1
            // }


            if(Object.hasOwn(map , s[i] )){
                res = res < i - map[s[i]] - 1 ? i - map[s[i]] - 1 : res
                found = true
            }else{
                map[s[i]] = i
            }
        }

        return found ? res : -1
    }
}
