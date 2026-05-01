class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
    let hit = 0;
        let sum = 0;
        let map = {
            0: 1
        };

        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];

            let req = sum - k;

            if (Object.hasOwn(map, req)) {
                hit += map[req];
            }

            map[sum] = (map[sum] || 0) + 1;
        }

        return hit;
            
        
        
    }
}
