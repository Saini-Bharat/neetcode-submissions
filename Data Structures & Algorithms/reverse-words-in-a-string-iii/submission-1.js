class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reverseWords(s) {
        return s.split(' ').map((char) => char.split("").reverse().join("")).join(" ")
    }
}
