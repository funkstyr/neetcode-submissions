class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Set()
        let firstIdx = 0;
        let maxLength = 0;
        
        for(let i = 0; i < s.length; i++) {
            while(charSet.has(s[i])) {
                charSet.delete(s[firstIdx]);
                firstIdx += 1;
            }

            charSet.add(s[i]);
            maxLength = Math.max(maxLength, i - firstIdx + 1);
        }

        return maxLength;
    }
}
