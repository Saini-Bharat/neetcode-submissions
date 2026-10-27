class Solution {
    /**
     * @param {number[]} g
     * @param {number[]} s
     * @return {number}
     */
    findContentChildren(g, s) {
        let c = 0
        g.sort((a,b) => b-a)
        s.sort((a,b) => a-b)
        for(let i = 0 ; i < s.length ; ++i){
            console.log("g arr", g)
            for(let j = 0 ; j < g.length ; ++j){
                // console.log(s[i], "s", g[i] , "g", i, "i", j , "j")
                if(s[i] >= g[j]){
                    c++
                    g.splice(j , 1)
                    break
                }
            }
        }
        return c
    }
}
