class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        // Brute force

        // let max =0 
        // for ( let i = 0 ; i< prices.length ; ++ i ){
        //     for (let j = i + 1 ; j< prices.length ; ++ j ){
        //         if(prices[j]-prices[i] > 0 ){
        //             max = prices[j] - prices[i] > max ? prices[j] - prices[i] : max
        //         }
        //     }
        // }
        // return max



        let max = 0 
        let buy = 0 
        let sell = 1
        for ( sell ;  sell < prices.length ; ++sell){
            if(prices[buy] < prices[sell]){
                max = prices[sell] - prices[buy] > max ? prices[sell] - prices[buy] : max
            }else{
                buy = sell
            }
        }
        return max
    }
}
