class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
       let map = new Set();
        let max = 0;
        let start = 0;

        for (let i = 0; i < s.length; i++) {
            while (map.has(s[i]) ){
                map.delete(s[start]);
                start++
            }
            map.add(s[i]);
            max = Math.max(max, i - start + 1)
        }

        return max;
    }
}
