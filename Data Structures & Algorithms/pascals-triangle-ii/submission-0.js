class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        let last = [1];
        let str = [[1]];
        for(let i = 0 ; i < rowIndex ; ++i){
            let next = new Array(last.length + 1).fill(0)
            for(let j = 0 ; j < last.length ; ++j){
                next[j] += last[j];
                next[j+1] += last[j]
            }
            str.push(next);
            last = next
        }

        return last
    }
}
