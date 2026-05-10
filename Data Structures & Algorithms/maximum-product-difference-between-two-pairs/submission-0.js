class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        let f = 1;
        let s = 1
        let t = 10000
        let v = 10000 
        for(let i = 0 ; i < nums.length ; ++i){

                    if(nums[i] > s){
                        if(nums[i] > f){
                            s=f
                            f = nums[i]
                        }else{
                            s = nums[i]
                        }
                    }

                    if(nums[i] < v){
                        if(nums[i] < t){
                            v=t
                            t = nums[i]
                        }else{
                            v = nums[i]
                        }
                    }

        }
        return (f*s) - (t*v)
    }
}
