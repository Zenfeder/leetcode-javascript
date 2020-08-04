// https://leetcode-cn.com/problems/two-sum/
// 时间复杂度和空间复杂度都比较高，可以再优化

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let start = 0; start < nums.length - 1; start ++) {
        for (let end = start + 1; end < nums.length; end ++) {
            if (nums[start] + nums[end] === target) {
                return [start, end];
            }
        }
    }
    return -1;
};

console.log(twoSum([1, 2, 3, 4, 5, 6], 5));