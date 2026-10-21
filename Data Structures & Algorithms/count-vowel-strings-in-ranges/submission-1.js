class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        let ans = []
        // for(let i = 0 ; i < queries.length ; ++i){
        //     let count = 0 
        //     for(let j = queries[i][0] ; j<= queries[i][1] ; ++j){
        //         if(this.isAns(words[j])){
        //             count = count + 1
        //         }
        //     }
        //     ans.push(count)
        // }

        // return ans
        let size = words.length
        let pre = new Array(size).fill(0)
        for(let i = 1 ; i <= words.length ; ++i){
            pre[i] = pre[i - 1]
            if(this.isAns(words[i - 1])){
                pre[i] = pre[i - 1] + 1
            }
        }
        for(let i = 0 ; i < queries.length ; ++i){
            ans.push(pre[queries[i][1] + 1] - pre[queries[i][0]])
        }

        return ans
        
        
    }
    
    isAns(word){
        let vowel = ['a','e','i','o','u']
        if(vowel.includes(word[0]) && vowel.includes(word[word.length -1])){
            return true
        }else{
            return false
        }
    }
}
