class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = {}
        for (let i =1 ; i<=numbers.length; ++i ){
            const required = target - numbers[i-1];
            if(Object.hasOwn(map, String(required))){
                if (map[required] < i) {
                    return [map[required], i];
                } else {
                    return [i, map[required]];
                }
            }else{
                map[numbers[i-1]] = i
            }
        }
    }
}
