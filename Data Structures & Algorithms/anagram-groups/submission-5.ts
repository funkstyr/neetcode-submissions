class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const grouped = new Map<string, string[]>;

        strs.forEach(word => {
            const sortedWord = [...word].sort().join();

            if(!grouped.has(sortedWord)) {
                grouped.set(sortedWord,[word])
                return;
            }

            grouped.set(sortedWord, [...grouped.get(sortedWord),word]);
        });

        return Array.from(grouped.values());
    }
}
