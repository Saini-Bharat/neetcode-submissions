class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let budds = 0 ;
        for (let i =0 ; i<details.length ; ++i){
            let tenth = Number(details[i][11])*10
            let once = Number(details[i][12])*1
            let age = tenth + once
            if( age > 60){
                ++budds
            }
        }
        return budds
    }
}
