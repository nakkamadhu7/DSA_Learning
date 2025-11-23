var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        buyPrice = Math.min(buyPrice, prices[i]);
        profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit, buyPrice;    
};

// console.log(maxProfit([7,6,4,3,1]));

var productExceptSelf = function(nums) {
    const output = Array(nums.length).fill(1);

    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] *= left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }

    return output;    
};

// console.log(productExceptSelf([1,2,3,4]));

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbSteps(n)
{
    if(n <= 3) return n;

    let prev1 = 3;
    let prev2 = 2;
    let cur = 0;

    for(let i = 3; i < n; i++)
    {
        cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }

    return cur;
}

// console.log(climbSteps(11));

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

var coinChange = function(coins, amount) {
    let minCoins = new Array(amount + 1).fill(amount + 1);

    minCoins[0] = 0;


    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {

            if (i - coins[j] >= 0) {
                minCoins[i] = Math.min(minCoins[i], 1 + minCoins[i - coins[j]]);
            }
        }
    }

    return minCoins[amount] !== amount + 1 ? minCoins[amount] : -1;    
};

// console.log(coinChange([1,2,5], 11));˜

// Given an integer array nums, return the length of the longest strictly increasing subsequence.



var lengthOfLIS = function(nums) {
    const res = [];

    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };

    for (const n of nums) {
        if (!res.length || res[res.length - 1] < n) {
            res.push(n);

        } else {
            const idx = binarySearch(res, n);
            res[idx] = n;
        }
    }

    return res.length;    
};

// console.log(lengthOfLIS(([10,9,2,5,3,7,101,18])));

// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

function longestCommonSubsequence(text1, text2)
{
    let dp = Array(text1.length).fill(0);
    let longest = 0;

    for(let char of text2)
    {
        let currentTarget = 0;
        for(let i = 0; i < text1.length; i++)
        {
            if(currentTarget < dp[i])
            {
                currentTarget = dp[i];
            }
            else if(char == text1[i])
            {
                dp[i] = currentTarget + 1;
                longest = Math.max(longest, currentTarget + 1);
            }
        }
    }

    return longest;


}

// console.log(longestCommonSubsequence('ace', 'abcde'));

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= s.length; i++) {
        for (let w of wordDict) {
            let start = i - w.length;s
            if (start >= 0 && dp[start] && s.substring(start, i) === w) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];    
};

// console.log(wordBreak('leetcode', ['leet', 'code']));


// Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

// The test cases are generated so that the answer can fit in a 32-bit integer.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    const dp = Array(target + 1).fill(0);

    console.log('--------', dp);
    dp[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (const n of nums) { 
            if (n <= i) {
                dp[i] += dp[i - n];
            }
        }
    }

    console.log('-----end---', dp);


    return dp[target];    
};

// console.log(combinationSum4([1,2,3], 4));

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

var rob = function(nums) {
    const n = nums.length;

    if (n === 1) {
        return nums[0];
    }

    const dp = Array(n).fill(0);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
    }

    console.log('dp', dp);

    return dp[n - 1];    
};

// console.log(rob([1,2,3,1]));

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
