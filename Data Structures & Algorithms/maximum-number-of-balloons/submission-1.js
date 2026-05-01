class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        let map = {}
        let map2 = {}
        let check = 'balloon'

        for (let ch of text) {
            map[ch] = (map[ch] || 0) + 1
        }

        for (let ch of check) {
            map2[ch] = (map2[ch] || 0) + 1
        }

        let res = Infinity

     
        for (let ch in map2) {
            let available = map[ch] || 0  
            let needed = map2[ch]

            res = Math.min(res, Math.floor(available / needed))
        }

        return res
    }
}
