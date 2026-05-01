class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let start = 1
        let end = 1
        let latest = [1,2,1]
        let res = [[1], [1,1], [1,2,1]];
        if(numRows < 4){
            res.splice(numRows)
            return res
        }
        for(let i = 4 ; i <= numRows ; ++i){
            let number 
            let item = []
            let left = 0 
            let right = 1
            for(let j = 0 ; j< latest.length - 1 ; ++j){
                let sum = latest[left] + latest[right];
                item.push(sum);
                left++
                right++
            }
            latest = item
            item.unshift(start)
            item.push(end)
            res.push(item)
        }

        return res
    }
}
