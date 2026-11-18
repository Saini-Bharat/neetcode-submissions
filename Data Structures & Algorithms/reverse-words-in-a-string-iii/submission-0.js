class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reverseWords(s) {
        // let start = 0
        // let end = 0 
        // for(let i = 0 ; i < s.length ; ++i){
        //     if(s[i] == " "){
        //         for(let j = start ; j< end/2 ; ++j){
        //             let temp = s[j]
        //             s[j] = s[end]
        //             s[end] = temp
        //             end--
        //         }
        //         start =i+1
        //         end=i + 1
        //     }else if(i == s.length - 1){
        //         end = i
        //         for(let j = start ; j< end/2 ; ++j){
        //             let temp = s[j]
        //             s[j] = s[end]
        //             s[end] = temp
        //             end--
        //         }
        //     }else{
        //         end++
        //     }
        // }
        return s.split(' ').map((char) => char.split("").reverse().join("")).join(" ")
    }
}
