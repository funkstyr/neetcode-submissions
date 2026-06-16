class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let sum = 0;
        let firstIdx = 0;
        let minLen = Infinity;

        for(let i = 0; i < nums.length; i++) {
            sum += nums[i];

            while(sum >= target) {
                minLen = Math.min(i - firstIdx + 1, minLen);
                sum -= nums[firstIdx];
                firstIdx++;
            }
        }

        return minLen === Infinity ? 0 : minLen;
    }
}
