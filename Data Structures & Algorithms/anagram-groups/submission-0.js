class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for (let i = 0 ; i<strs.length ; ++i){
            let count = new Array(26).fill(0)

            for (let j = 0 ; j < strs[i].length ; ++j){
                count[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }

            const key = count.join(',');
            if(!map[key]){
                map[key] = []
            }
            map[key].push(strs[i])
        }
        return Object.values(map);
    }
}
