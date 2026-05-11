class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {
        let map = new Set();
        let x = 0, y = 0 
        map.add('0,0')
        for(let i = 0 ; i < path.length ; ++i){
            if(path[i] == 'N'){
                x++
            }else if(path[i] == 'S'){
                x--
            }else if(path[i] == 'E'){
                y++
            }else {
                y--
            }
            let key = x + "," + y 
            if(map.has(key)){
                return true
            }
            map.add(key)
        }
        return false

    }
}
