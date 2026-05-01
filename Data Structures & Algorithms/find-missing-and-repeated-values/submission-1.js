class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        let map = {}
        let ans = []
        let n = grid.length
        for(let i = 0 ; i < n ; ++i ){
            for(let j = 0 ; j < grid[i].length ; ++j){
                if(Object.hasOwn(map, grid[i][j])){
                    map[grid[i][j]] += 1
                }else{
                    map[grid[i][j]] = 1
                }
            }
        }
        for(let i = 1 ; i <= n*n ; ++i){
            if(Object.hasOwn(map, i)){
                    if(map[i] ==2){
                        ans[0] = i
                    }
                }else{
                    ans[1] = i
                }
        }

        return ans
    }
}
