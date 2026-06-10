class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        const count = new Map<number, number>();
        let majority = 0;

        nums.forEach(num => {
            if(!count.has(num)) {
                count.set(num, 1);
                return;
            }

            count.set(num, count.get(num) + 1);
        })

        Array.from(count.keys()).forEach(key => {
            const value = count.get(key);

            if(value > nums.length / 2) {
                majority = key;
            }
        })

        return majority;
    }
}
