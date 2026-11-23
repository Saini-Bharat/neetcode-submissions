class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    backspaceCompare(s, t) {
        
        const process = (str) => {
            let stack = []
            for(let char of str ){
                if(char == '#'){
                    stack.pop()
                }else{
                    stack.push(char)
                }
                
            }
            return stack.join("")
        }

        return process(s) === process(t)
    }
}
