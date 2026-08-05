class Solution {
    /**
     * @param {number[]} tickets
     * @param {number} k
     * @return {number}
     */
    timeRequiredToBuy(tickets, k) {
        let res = 0 ;
        if(k==0 && tickets[k] ==1){
            return 1
        }
        for (let i = 0 ; i < tickets.length ; ++i){
            if(i <= k){
                res = res + Math.min(tickets[i], tickets[k])
            }else{
                if(tickets[i] > tickets[k]){
                    res = res + (tickets[k] - 1)
                }else{
                    res = res + Math.min(tickets[i], tickets[k])
                }
            }
        }
        return res
    }
}
