class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        nums.sort((a, b) => a - b);

        return nums[Math.trunc(nums.length / 2)];
    }
}
