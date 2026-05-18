class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        let map = {}
        let res = ''
        for(let i = 0 ; i < s.length ; ++i){
            map[s[i]] = (map[s[i]] || 0 ) + 1
        }
        for(let i  = 0 ; i < order.length ; ++i){
            if(Object.hasOwn(map,order[i]) && (map[order[i]] != 0)){
                for(let j = 0 ; j < map[order[i]] ; ++j){
                res = res + order[i]
                }
                map[order[i]] = -1
            }
        }
        for(let i = 0 ; i < s.length ; ++i){
            if(map[s[i]] != -1){
                res = res + s[i]
            }
        }

        return res
    }
}
