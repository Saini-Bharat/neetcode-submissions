class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minOperations(s) {
     let min1 = 0;
        let min2 = 0;

        let s1 = structuredClone(s).split('');
        let s2 = structuredClone(s).split('');

        for (let i = 0; i < s.length; ++i) {

            // Pattern starting with 0 -> 010101...
            let expected1 = (i % 2 === 0) ? '0' : '1';

            if (s1[i] !== expected1) {
                s1[i] = expected1;
                min1++;
            }

            // Pattern starting with 1 -> 101010...
            let expected2 = (i % 2 === 0) ? '1' : '0';

            if (s2[i] !== expected2) {
                s2[i] = expected2;
                min2++;
            }
        }

        return Math.min(min1, min2);
    }
}
