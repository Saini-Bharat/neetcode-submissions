class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let map = {}
        for (let i = 0 ; i < arr.length ; ++i){
            if(Object.hasOwn(map , arr[i])){
                map[arr[i]] += 1
            }else{
                map[arr[i]] = 1
            }
        }
        let ans = Object.keys(map);
        let final = []
        for(let i = 0 ; i < ans.length ; ++i){
            if(map[ans[i]] == 1){
                final.push(ans[i])
            }
        }
        if( k > final.length){
            return ""
        }
        return final[k - 1]
    }
}
