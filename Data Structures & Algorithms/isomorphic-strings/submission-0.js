class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        const sGraph = new Map()
        const tGraph = new Map()
        // const tGraph = this.frequencyGraph(t)
        for( let i = 0 ; i<s.length ; ++i ){
            const c1 = s[i], c2 = t[i]
            if(
                (sGraph.has(c1) && sGraph.get(c1) !== c2) ||
                (tGraph.has(c2) && tGraph.get(c2) !== c1)
            ){
                return false
            }
            sGraph.set(c1, c2)
            tGraph.set(c2, c1)
        }
        return true
    }

    // frequencyGraph(line){
    //     const map = {}
    //     for(let i = 0 ; i < line.length ; ++i){
    //         if(Object.hasOwn(map, line[i])){
    //             ++map[line[i]]
    //         }else{
    //             map[line[i]] = 1
    //         }
    //     }
    //     return map
    // }
}
