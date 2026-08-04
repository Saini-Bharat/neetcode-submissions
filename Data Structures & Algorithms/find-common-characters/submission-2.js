class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    commonChars(words) {
    //     let map = {}
    //     let res = []
    //     for(let i = 0 ; i < words.length ; ++i){
    //         for(let j = 0 ; j < words[i].length ; ++j){
    //             map[words[i][j]] = (map[words[i][j]] || 0) + 1
    //         }
    //     }
    //     console.log(map , "amp")
    //     let keys = Object.keys(map)
    //     for(let i = 0 ; i < keys.length ; ++i){
    //         if(map[keys[i]] >= words.length){
    //             if(map[keys[i]] % words.length == 0){
    //                 for(let j = 0 ; j < map[keys[i]] / words.length ; ++j){
    //                     res.push(keys[i])
    //                 }
    //             }else{
    //                 console.log("map[keys[i]] % words.length",map[keys[i]] % words.length)
    //                 map[keys[i]] = map[keys[i]] - (map[keys[i]] % words.length)
    //                 for(let j = 0 ; j < map[keys[i]] / words.length ; ++j){
    //                     res.push(keys[i])
    //                 }
    //             }
    //         }
    //     }
    //     return res
    // }

        let map = {}
        let res = []
        for(let j = 0 ; j < words[0].length ; ++j){
            map[words[0][j]] = (map[words[0][j]] || 0) + 1
        }
        console.log(map , "amp")
        let keys = Object.keys(map)

        for (let i = 0 ; i < words.length ; ++i){
            let currentMap = {}
            for (let j = 0 ; j < words[i].length ; ++j){
                currentMap[words[i][j]] = (currentMap[words[i][j]] || 0) + 1 
            }

            for (let j = 0 ; j < keys.length ; ++j){
                if(Object.hasOwn(currentMap, keys[j])){
                    map[keys[j]] = Math.min(map[keys[j]] , currentMap[keys[j]])
                }else{
                    map[keys[j]] = 0
                }
            }
        }

        for (let i = 0 ; i < keys.length ; ++i){
            if(map[keys[i]] > 0) {
                for(let j = 0 ; j < map[keys[i]] ; ++j){
                    res.push(keys[i])
                }
            }
        }
    
        return res

    }
}
