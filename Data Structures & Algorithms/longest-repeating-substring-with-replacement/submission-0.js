class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {}
        let left = 0 
        let max = 0 
        for (let right = 0; right < s.length ; ++right){
            if(map[s[right]]){
                map[s[right]] = map[s[right]] + 1
            }else{
                map[s[right]] = 1
            }
            while (((right - left + 1) - Math.max(...Object.values(map))) > k ){
                map[s[left]] = map[s[left]] - 1;
                left = left + 1
            }
            max = Math.max(right - left + 1 , max);
        }
        return max

    }
}
