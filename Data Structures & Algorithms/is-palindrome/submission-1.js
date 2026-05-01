class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0
        let right = s.length - 1
        while (left < right) {
            while (left < right && !this.isValidChar(s[left])){
                left++
            }
            while (left < right && !this.isValidChar(s[right])){
                right--
            }
            if(s[left].toLowerCase() != s[right].toLowerCase()){
                return false
            }
            left++
            right--
        }
        return true
    }

    isValidChar (c) {
        const aski = c.charCodeAt(0)
        return (
            (aski >= 48 && aski <= 57) ||   
            (aski >= 65 && aski <= 90) ||   
            (aski >= 97 && aski <= 122)  
        )
    }
}
