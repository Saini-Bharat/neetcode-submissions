class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        let ans = []
        for(let i = 0 ; i < queries.length ; ++i){
            let count = 0 
            for(let j = queries[i][0] ; j<= queries[i][1] ; ++j){
                if(this.isAns(words[j])){
                    count = count + 1
                }
            }
            ans.push(count)
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
