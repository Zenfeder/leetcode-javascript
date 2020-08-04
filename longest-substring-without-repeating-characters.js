// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s || !s.length) return 0;

    let maxSubstring = s[0];
    
    for (let i = 0; i < s.length - 1; i++) {
        let curSubLoopMaxSubString = s[i]; // 内循环遍历的最长子串
        for (let j = i + 1; j < s.length; j++) {
            // 如果当前最长字串中不包含当前字符
            if (curSubLoopMaxSubString.indexOf(s[j]) === -1) {
                curSubLoopMaxSubString = curSubLoopMaxSubString.concat(s[j]);
                continue;
            }
            break;
        }
        if (curSubLoopMaxSubString.length > maxSubstring.length) {
            maxSubstring = curSubLoopMaxSubString;
        }
        if ((s.length - i + 1) <= maxSubstring.length) {
            return maxSubstring.length;
        }
    }

    return maxSubstring.length;
};

console.log(lengthOfLongestSubstring(' '))

