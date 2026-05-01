class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ''
        strs.map((str, index)=> {
            const codedWord = []
            for (let i=0 ; i< str.length ; ++i)
             {
                codedWord.push(str[i].charCodeAt(0))
            }
            encoded += codedWord.length + ":" + codedWord.join(",") + "|";
        })
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decoded = []
        const part = str.split("|")
        part.map((word, index) => {
            if (word != "") {
            const [len , data] = word.split(":")

             if (data != "") {
                let decodedWord = data.split(",").map(ch => String.fromCharCode(ch));
                decoded.push(decodedWord.join(""))
                }else{
                    decoded.push("");
                }   

            }
        })
        
        return decoded
    }
}
