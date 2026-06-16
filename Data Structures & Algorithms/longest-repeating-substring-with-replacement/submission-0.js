class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let counts = new Map();
        let firstIndex = 0;
        let maxLength = 0;
        let maxFreq = 0;


        for(let i = 0; i < s.length; i++) {
            counts.set(s[i], 1 + (counts.get(s[i]) ?? 0));
            maxFreq = Math.max(maxFreq, counts.get(s[i]));

            while((i - firstIndex + 1) - maxFreq > k) {
                counts.set(s[firstIndex], counts.get(s[firstIndex]) - 1);
                firstIndex += 1;
            }

            maxLength = Math.max(maxLength, i - firstIndex + 1)
        }

        return maxLength;
    }
}
