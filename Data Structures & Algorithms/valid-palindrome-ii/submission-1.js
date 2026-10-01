class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let left = 0
        let right = s.length -1
        let flag = true
        for (let i = 0 ; i < s.length/2 ; ++i){
            if(s[left] != s[right]){
                flag = false;
                break;
            }
            left++
            right--
        }
        if(flag){
            return flag
        }

        for(let i = 0 ; i <s.length ; ++i){
            flag = true
            left = 0
            right = s.length - 2
            let arr = s.slice(0,i) + s.slice(i+1)
            for(let j = 0 ; j < s.length/2 ; ++j){
                if(arr[left] != arr[right]){
                    flag = false
                    continue;
                }
                left++
                right--
            }
            if(flag){
                return flag
            }
        }
        return flag
    }
}
