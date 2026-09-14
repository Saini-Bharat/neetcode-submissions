class Solution {
    /**
     * @param {string[]} names
     * @param {number[]} heights
     * @return {string[]}
     */
    sortPeople(names, heights) {
        let map = {}
        let res = []
        for(let i = 0 ; i < heights.length ; ++i){
            map[heights[i]] = names[i]
        }
        heights.sort((a,b) => b-a);
        for(let i = 0 ; i < heights.length ; ++i){
            res.push(map[heights[i]])
        }

        return res
    }
}
