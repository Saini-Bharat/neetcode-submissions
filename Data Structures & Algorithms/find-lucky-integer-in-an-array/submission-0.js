class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let map = {}
        let res = -1
        for (let i = 0 ; i < arr.length ; ++i){
            if(Object.hasOwn(map, arr[i])){
                map[arr[i]] += 1
            }else{
                map[arr[i]] = 1
            }
        }
        let key = Object.keys(map)
        for(let i = 0 ; i < key.length ; ++i){
            if(map[key[i]] == key[i]){
                res = res > map[key[i]] ? res : map[key[i]]
            }
        }
        return res 
    }
}
