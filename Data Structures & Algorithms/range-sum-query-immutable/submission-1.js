class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums
        this.prefix = []
        let curr = 0 
        for(let i = 0 ; i < this.nums.length ; ++i){
            curr += this.nums[i]
            this.prefix.push(curr)
        }
        console.log("prefix", this.prefix)
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        if(left > 0){
            return (this.prefix[right] - this.prefix[left - 1]);
        }
        else {
            return this.prefix[right]
        }
    }
}
