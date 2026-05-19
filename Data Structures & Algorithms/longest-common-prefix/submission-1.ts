class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let prefix = "";

        const sorted = [...strs].sort((a, b) => a.length - b.length);
        const shortest = sorted[0] ?? "";

        for (let i = 0; i < shortest.length; i++) {
            const char = shortest[i];
            for (const word of strs) {
                if (word[i] !== char) {
                    return prefix;
                }
            }
            prefix += char;
        }

        return prefix;
    }
}