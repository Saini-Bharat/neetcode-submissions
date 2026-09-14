class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {
        // let start = 0 ;
        // let found = 0 
        // for(let i = 0 ; i < haystack.length ; ++i){
        //     if (haystack[i] == needle[start]) {
        //         start++;
        //         if (start == needle.length) {
        //             return i - needle.length + 1;
        //         }

        //     } else {
        //         start = 0;
        //         if (haystack[i] == needle[start]) {
        //             start++;
        //         }
        //     }
            
        // }
        // return -1

        // for(let i = 0 ; i < haystack.length ; ++i){
        //     let start = 0
        //     for(let j = 0 ; j < needle.length ; ++j){
        //         if(haystack[start] === needle[j]){
        //             start++
        //             if(start == needle.length){
        //                 return i 
        //             }
        //         }else{
        //             break
        //         }
        //     }
        // }

        // return -1

        let h = haystack.length
        let n = needle.length

        for(let i = 0 ; i < h-n + 1 ; ++i){
            let j = 0 
            while(j < n){
                if(haystack[i + j] != needle[j]){
                    break
                }
                j++;
            }
            if(j === n){
                return i
            }
        }

        return -1

    }
}
