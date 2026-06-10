class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        var count = 0;

        for(var i = 0; i < nums.length; i++) {
            const num = nums[i];
            if(num !== val) {
                nums[count] = num;
                count++;
            }
        }

        return count;
    }
}
