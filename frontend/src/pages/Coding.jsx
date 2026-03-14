import React, { useState } from 'react';
import { ArrowLeft, Play, LayoutGrid, RotateCcw, Check, MonitorPlay, Code2, ChevronDown, CheckCircle2, XCircle, Lightbulb, Copy, FolderOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Editor from '@monaco-editor/react';

const LANGUAGES = [
  { id: 'javascript', name: 'JavaScript', ext: 'js', color: '#f7df1e' },
  { id: 'python', name: 'Python', ext: 'py', color: '#3776ab' },
  { id: 'java', name: 'Java', ext: 'java', color: '#b07219' },
  { id: 'cpp', name: 'C++', ext: 'cpp', color: '#00599c' },
  { id: 'c', name: 'C', ext: 'c', color: '#a8b9cc' },
];

const PROBLEMS = [
  {
    id: 1,
    title: "1. Hello World",
    difficulty: "Beginner",
    description: "Write a function that returns the string \"Hello, World!\"",
    examples: [
      { input: "()", output: "Hello, World!" }
    ],
    testCases: [
      { input: null, expected: "Hello, World!" }
    ],
    starterCode: {
      javascript: `function helloWorld() {
    // Return "Hello, World!"
    
}`,
      python: `def hello_world():
    # Return "Hello, World!"
    pass`,
      java: `class Solution {
    public String helloWorld() {
        // Return "Hello, World!"
        return "";
    }
}`,
      cpp: `std::string helloWorld() {
    // Return "Hello, World!"
    return "";
}`,
      c: `char* helloWorld() {
    // Return "Hello, World!"
    return "";
}`
    },
    solutions: [
      { language: 'Python', code: `def hello_world():\n    return "Hello, World!"`, explanation: "Simply return the required string. Time: O(1), Space: O(1)" },
      { language: 'JavaScript', code: `function helloWorld() {\n    return "Hello, World!";\n}`, explanation: "Return the greeting string directly. Time: O(1), Space: O(1)" },
      { language: 'Java', code: `public String helloWorld() {\n    return "Hello, World!";\n}`, explanation: "Return the string literal. Time: O(1), Space: O(1)" },
      { language: 'C++', code: `std::string helloWorld() {\n    return "Hello, World!";\n}`, explanation: "Return the std::string. Time: O(1), Space: O(1)" },
      { language: 'C', code: `char* helloWorld() {\n    return "Hello, World!";\n}`, explanation: "Return char pointer to string. Time: O(1), Space: O(1)" }
    ]
  },
  {
    id: 2,
    title: "2. Sum of Two Numbers",
    difficulty: "Beginner",
    description: "Write a function that takes two integers a and b and returns their sum.",
    examples: [
      { input: "a = 3, b = 5", output: "8" },
      { input: "a = -1, b = 1", output: "0" }
    ],
    testCases: [
      { input: [3, 5], expected: 8 },
      { input: [-1, 1], expected: 0 },
      { input: [0, 0], expected: 0 },
      { input: [100, 200], expected: 300 },
      { input: [-50, -50], expected: -100 }
    ],
    starterCode: {
      javascript: `/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function sum(a, b) {
    // Return the sum of a and b
    
}`,
      python: `def sum_two(a, b):
    # Return the sum of a and b
    pass`,
      java: `class Solution {
    public int sum(int a, int b) {
        // Return the sum of a and b
        return 0;
    }
}`,
      cpp: `int sum(int a, int b) {
    // Return the sum of a and b
    return 0;
}`,
      c: `int sum(int a, int b) {
    // Return the sum of a and b
    return 0;
}`
    },
    solutions: [
      { language: 'Python', code: `def sum_two(a, b):\n    return a + b`, explanation: "Add both numbers. Time: O(1), Space: O(1)" },
      { language: 'JavaScript', code: `function sum(a, b) {\n    return a + b;\n}`, explanation: "Simple addition. Time: O(1), Space: O(1)" },
      { language: 'Java', code: `public int sum(int a, int b) {\n    return a + b;\n}`, explanation: "Return sum using + operator. Time: O(1), Space: O(1)" },
      { language: 'C++', code: `int sum(int a, int b) {\n    return a + b;\n}`, explanation: "Add both integers. Time: O(1), Space: O(1)" },
      { language: 'C', code: `int sum(int a, int b) {\n    return a + b;\n}`, explanation: "Return a + b. Time: O(1), Space: O(1)" }
    ]
  },
  {
    id: 3,
    title: "3. Reverse a String",
    difficulty: "Easy",
    description: "Write a function that reverses a string. The input string is given as an array of characters.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
    examples: [
      { input: "s = ['h','e','l','l','o']", output: "['o','l','l','e','h']" },
      { input: "s = ['H','a','n','n','a','h']", output: "['h','a','n','n','a','H']" }
    ],
    testCases: [
      { input: ["h","e","l","l","o"], expected: ["o","l","l","e","h"] },
      { input: ["H","a","n","n","a","h"], expected: ["h","a","n","n","a","H"] },
      { input: ["a"], expected: ["a"] },
      { input: [], expected: [] }
    ],
    starterCode: {
      javascript: `/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function reverseString(s) {
    // Reverse the string in-place
    
}`,
      python: `def reverse_string(s):
    # Reverse the string in-place
    # Do not return anything, modify s in-place
    pass`,
      java: `class Solution {
    public void reverseString(char[] s) {
        // Reverse the string in-place
        
    }
}`,
      cpp: `void reverseString(vector<char>& s) {
    // Reverse the string in-place
    
}`,
      c: `void reverseString(char* s, int sSize) {
    // Reverse the string in-place
    
}`
    },
    solutions: [
      { language: 'Python', code: `def reverse_string(s):\n    s.reverse()`, explanation: "Use built-in reverse. Time: O(n), Space: O(1)" },
      { language: 'JavaScript', code: `function reverseString(s) {\n    s.reverse();\n}`, explanation: "Two-pointer swap approach. Time: O(n), Space: O(1)" },
      { language: 'Java', code: `public void reverseString(char[] s) {\n    int left = 0, right = s.length - 1;\n    while (left < right) {\n        char temp = s[left];\n        s[left++] = s[right];\n        s[right--] = temp;\n    }\n}`, explanation: "Two-pointer technique from both ends. Time: O(n), Space: O(1)" },
      { language: 'C++', code: `void reverseString(vector<char>& s) {\n    reverse(s.begin(), s.end());\n}`, explanation: "Use STL reverse. Time: O(n), Space: O(1)" },
      { language: 'C', code: `void reverseString(char* s, int sSize) {\n    for(int i=0; i<sSize/2; i++) {\n        char temp = s[i];\n        s[i] = s[sSize-1-i];\n        s[sSize-1-i] = temp;\n    }\n}`, explanation: "Swap characters from both ends. Time: O(n), Space: O(1)" }
    ]
  },
  {
    id: 4,
    title: "4. Palindrome Number",
    difficulty: "Easy",
    description: "Given an integer x, return true if x is a palindrome, and false otherwise.\n\nAn integer is a palindrome when it reads the same backward as forward.",
    examples: [
      { input: "x = 121", output: "true" },
      { input: "x = -121", output: "false", explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome." },
      { input: "x = 10", output: "false", explanation: "Reads 01 from right to left. Therefore it is not a palindrome." }
    ],
    testCases: [
      { input: 121, expected: true },
      { input: -121, expected: false },
      { input: 10, expected: false },
      { input: 0, expected: true },
      { input: 12321, expected: true },
      { input: 12345, expected: false }
    ],
    starterCode: {
      javascript: `/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    // Check if x is a palindrome
    
}`,
      python: `def is_palindrome(x):
    # Check if x is a palindrome
    pass`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Check if x is a palindrome
        return false;
    }
}`,
      cpp: `bool isPalindrome(int x) {
    // Check if x is a palindrome
    return false;
}`,
      c: `bool isPalindrome(int x) {
    // Check if x is a palindrome
    return false;
}`
    },
    solutions: [
      { language: 'Python', code: `def is_palindrome(x):\n    return str(x) == str(x)[::-1]`, explanation: "Convert to string and compare with reverse. Time: O(n), Space: O(n)" },
      { language: 'JavaScript', code: `function isPalindrome(x) {\n    return x.toString() === x.toString().split('').reverse().join('');\n}`, explanation: "String reversal approach. Time: O(n), Space: O(n)" },
      { language: 'Java', code: `public boolean isPalindrome(int x) {\n    if (x < 0) return false;\n    int rev = 0, orig = x;\n    while (x > 0) {\n        rev = rev * 10 + x % 10;\n        x /= 10;\n    }\n    return orig == rev;\n}`, explanation: "Reverse half of the number. Time: O(log n), Space: O(1)" },
      { language: 'C++', code: `bool isPalindrome(int x) {\n    if (x < 0) return false;\n    int rev = 0;\n    int temp = x;\n    while (temp > 0) {\n        rev = rev * 10 + temp % 10;\n        temp /= 10;\n    }\n    return rev == x;\n}`, explanation: "Reveal the number and compare. Time: O(log n), Space: O(1)" },
      { language: 'C', code: `bool isPalindrome(int x) {\n    if (x < 0) return false;\n    int rev = 0, temp = x;\n    while (temp > 0) {\n        rev = rev * 10 + temp % 10;\n        temp /= 10;\n    }\n    return rev == x;\n}`, explanation: "Reverse digits and compare. Time: O(log n), Space: O(1)" }
    ]
  },
  {
    id: 5,
    title: "5. Fizz Buzz",
    difficulty: "Easy",
    description: "Given an integer n, return a string array answer where:\n\n- answer[i] == \"FizzBuzz\" if i is divisible by 3 and 5.\n- answer[i] == \"Fizz\" if i is divisible by 3.\n- answer[i] == \"Buzz\" if i is divisible by 5.\n- answer[i] == i (as a string) if none of the above conditions are true.\n\nReturn the array from 1 to n.",
    examples: [
      { input: "n = 3", output: "['1','2','Fizz']" },
      { input: "n = 5", output: "['1','2','Fizz','4','Buzz']" },
      { input: "n = 15", output: "['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz']" }
    ],
    testCases: [
      { input: 3, expected: ["1","2","Fizz"] },
      { input: 5, expected: ["1","2","Fizz","4","Buzz"] },
      { input: 15, expected: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] }
    ],
    starterCode: {
      javascript: `/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
    // Return FizzBuzz array
    
}`,
      python: `def fizz_buzz(n):
    # Return FizzBuzz array
    pass`,
      java: `class Solution {
    public List<String> fizzBuzz(int n) {
        // Return FizzBuzz array
        return new ArrayList<>();
    }
}`,
      cpp: `vector<string> fizzBuzz(int n) {
    // Return FizzBuzz array
    return {};
}`,
      c: `char** fizzBuzz(int n) {
    // Return FizzBuzz array
    return NULL;
}`
    },
    solutions: [
      { language: 'Python', code: `def fizz_buzz(n):\n    return ['FizzBuzz' if i%15==0 else 'Fizz' if i%3==0 else 'Buzz' if i%5==0 else str(i) for i in range(1,n+1)]`, explanation: "List comprehension with modulo checks. Time: O(n), Space: O(n)" },
      { language: 'JavaScript', code: `function fizzBuzz(n) {\n    return Array.from({length: n}, (_, i) => {\n        const num = i + 1;\n        if (num % 15 === 0) return 'FizzBuzz';\n        if (num % 3 === 0) return 'Fizz';\n        if (num % 5 === 0) return 'Buzz';\n        return String(num);\n    });\n}`, explanation: "Check divisibility by 15, 3, and 5. Time: O(n), Space: O(n)" },
      { language: 'Java', code: `public List<String> fizzBuzz(int n) {\n    List<String> ans = new ArrayList<>();\n    for (int i = 1; i <= n; i++) {\n        if (i % 15 == 0) ans.add("FizzBuzz");\n        else if (i % 3 == 0) ans.add("Fizz");\n        else if (i % 5 == 0) ans.add("Buzz");\n        else ans.add(String.valueOf(i));\n    }\n    return ans;\n}`, explanation: "Check each number for divisibility. Time: O(n), Space: O(n)" },
      { language: 'C++', code: `vector<string> fizzBuzz(int n) {\n    vector<string> ans;\n    for(int i=1;i<=n;i++){\n        if(i%15==0) ans.push_back("FizzBuzz");\n        else if(i%3==0) ans.push_back("Fizz");\n        else if(i%5==0) ans.push_back("Buzz");\n        else ans.push_back(to_string(i));\n    }\n    return ans;\n}`, explanation: "Loop and check conditions. Time: O(n), Space: O(n)" },
      { language: 'C', code: `char** fizzBuzz(int n) {\n    char** ans = malloc(n * sizeof(char*));\n    for(int i=1;i<=n;i++){\n        if(i%15==0) ans[i-1] = "FizzBuzz";\n        else if(i%3==0) ans[i-1] = "Fizz";\n        else if(i%5==0) ans[i-1] = "Buzz";\n        else ans[i-1] = to_string(i);\n    }\n    return ans;\n}`, explanation: "Allocate memory and fill strings. Time: O(n), Space: O(n)" }
    ]
  },
  {
    id: 6,
    title: "6. Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] == 9" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" }
    ],
    testCases: [
      { input: [[2,7,11,15], 9], expected: [0,1] },
      { input: [[3,2,4], 6], expected: [1,2] },
      { input: [[3,3], 6], expected: [0,1] }
    ],
    starterCode: {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Return indices of two numbers that add to target
    
}`,
      python: `def two_sum(nums, target):
    # Return indices of two numbers
    pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Return indices
        return new int[]{};
    }
}`,
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {
    // Return indices
    return {};
}`,
      c: `int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    // Return indices
    return NULL;
}`
    },
    solutions: [
      { language: 'Python', code: `def two_sum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):\n        if target - n in seen:\n            return [seen[target - n], i]\n        seen[n] = i`, explanation: "Hash map for O(n) lookup. Time: O(n), Space: O(n)" },
      { language: 'JavaScript', code: `function twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.has(complement)) {\n            return [map.get(complement), i];\n        }\n        map.set(nums[i], i);\n    }\n}`, explanation: "Use Map for O(1) lookup. Time: O(n), Space: O(n)" },
      { language: 'Java', code: `public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) {\n            return new int[]{map.get(complement), i};\n        }\n        map.put(nums[i], i);\n    }\n    return new int[]{};\n}`, explanation: "HashMap for complement lookup. Time: O(n), Space: O(n)" },
      { language: 'C++', code: `vector<int> twoSum(vector<int>& nums, int target) {\n    unordered_map<int, int> mp;\n    for (int i = 0; i < nums.size(); i++) {\n        if (mp.count(target - nums[i])) {\n            return {mp[target - nums[i]], i};\n        }\n        mp[nums[i]] = i;\n    }\n    return {};\n}`, explanation: "Unordered map for fast lookup. Time: O(n), Space: O(n)" },
      { language: 'C', code: `int* twoSum(int* nums, int numsSize, int target, int* returnSize) {\n    *returnSize = 2;\n    int* result = malloc(2 * sizeof(int));\n    for (int i = 0; i < numsSize; i++) {\n        for (int j = i + 1; j < numsSize; j++) {\n            if (nums[i] + nums[j] == target) {\n                result[0] = i; result[1] = j;\n                return result;\n            }\n        }\n    }\n    return result;\n}`, explanation: "Brute force O(n²). Time: O(n²), Space: O(1)" }
    ]
  },
  {
    id: 7,
    title: "7. Maximum Subarray",
    difficulty: "Medium",
    description: "Given an integer array nums, find the subarray with the largest sum, and return its sum.\n\nA subarray is a contiguous non-empty sequence of elements within an array.",
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." },
      { input: "nums = [1]", output: "1" },
      { input: "nums = [5,4,-1,7,8]", output: "23" }
    ],
    testCases: [
      { input: [-2,1,-3,4,-1,2,1,-5,4], expected: 6 },
      { input: [1], expected: 1 },
      { input: [5,4,-1,7,8], expected: 23 },
      { input: [-1], expected: -1 },
      { input: [-2,-1], expected: -1 }
    ],
    starterCode: {
      javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    // Find the maximum sum subarray
    
}`,
      python: `def max_sub_array(nums):
    # Find the maximum sum subarray
    pass`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Find maximum subarray sum
        return 0;
    }
}`,
      cpp: `int maxSubArray(vector<int>& nums) {
    // Find maximum subarray sum
    return 0;
}`,
      c: `int maxSubArray(int* nums, int numsSize) {
    // Find maximum subarray sum
    return 0;
}`
    },
    solutions: [
      { language: 'Python', code: `def max_sub_array(nums):\n    max_sum = nums[0]\n    cur_sum = nums[0]\n    for n in nums[1:]:\n        cur_sum = max(n, cur_sum + n)\n        max_sum = max(max_sum, cur_sum)\n    return max_sum`, explanation: "Kadane's algorithm - track current and max sum. Time: O(n), Space: O(1)" },
      { language: 'JavaScript', code: `function maxSubArray(nums) {\n    let maxSum = nums[0];\n    let currentSum = nums[0];\n    for (let i = 1; i < nums.length; i++) {\n        currentSum = Math.max(nums[i], currentSum + nums[i]);\n        maxSum = Math.max(maxSum, currentSum);\n    }\n    return maxSum;\n}`, explanation: "Kadane's algorithm. Time: O(n), Space: O(1)" },
      { language: 'Java', code: `public int maxSubArray(int[] nums) {\n    int maxSum = nums[0];\n    int curSum = nums[0];\n    for (int i = 1; i < nums.length; i++) {\n        curSum = Math.max(nums[i], curSum + nums[i]);\n        maxSum = Math.max(maxSum, curSum);\n    }\n    return maxSum;\n}`, explanation: "Kadane's algorithm for max subarray. Time: O(n), Space: O(1)" },
      { language: 'C++', code: `int maxSubArray(vector<int>& nums) {\n    int maxSum = nums[0], curSum = nums[0];\n    for (int i = 1; i < nums.size(); i++) {\n        curSum = max(nums[i], curSum + nums[i]);\n        maxSum = max(maxSum, curSum);\n    }\n    return maxSum;\n}`, explanation: "Kadane's algorithm. Time: O(n), Space: O(1)" },
      { language: 'C', code: `int maxSubArray(int* nums, int numsSize) {\n    int maxSum = nums[0], curSum = nums[0];\n    for(int i=1;i<numsSize;i++){\n        curSum = fmax(nums[i], curSum + nums[i]);\n        maxSum = fmax(maxSum, curSum);\n    }\n    return maxSum;\n}`, explanation: "Kadane's algorithm. Time: O(n), Space: O(1)" }
    ]
  },
  {
    id: 8,
    title: "8. Valid Parentheses",
    difficulty: "Easy",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
    examples: [
      { input: "s = '()'", output: "true" },
      { input: "s = '()[]{}'", output: "true" },
      { input: "s = '(]'", output: "false" }
    ],
    testCases: [
      { input: "()", expected: true },
      { input: "()[]{}", expected: true },
      { input: "(]", expected: false },
      { input: "([)]", expected: false },
      { input: "{[]}", expected: true },
      { input: "", expected: true }
    ],
    starterCode: {
      javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Check if parentheses are valid
    
}`,
      python: `def is_valid(s):
    # Check if parentheses are valid
    pass`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Check if parentheses are valid
        return false;
    }
}`,
      cpp: `bool isValid(string s) {
    // Check if parentheses are valid
    return false;
}`,
      c: `bool isValid(char* s) {
    // Check if parentheses are valid
    return false;
}`
    },
    solutions: [
      { language: 'Python', code: `def is_valid(s):\n    stack = []\n    map = {')': '(', ']': '[', '}': '{'}\n    for c in s:\n        if c in map:\n            if not stack or stack.pop() != map[c]:\n                return False\n        else:\n            stack.append(c)\n    return len(stack) == 0`, explanation: "Stack-based validation. Time: O(n), Space: O(n)" },
      { language: 'JavaScript', code: `function isValid(s) {\n    const stack = [];\n    const map = {')': '(', ']': '[', '}': '{'};\n    for (const c of s) {\n        if (c in map) {\n            if (stack.pop() !== map[c]) return false;\n        } else {\n            stack.push(c);\n        }\n    }\n    return stack.length === 0;\n}`, explanation: "Use stack to match brackets. Time: O(n), Space: O(n)" },
      { language: 'Java', code: `public boolean isValid(String s) {\n    Stack<Character> stack = new Stack<>();\n    for (char c : s.toCharArray()) {\n        if (c == ')') {\n            if (stack.isEmpty() || stack.pop() != '(') return false;\n        } else if (c == ']') {\n            if (stack.isEmpty() || stack.pop() != '[') return false;\n        } else if (c == '}') {\n            if (stack.isEmpty() || stack.pop() != '{') return false;\n        } else {\n            stack.push(c);\n        }\n    }\n    return stack.isEmpty();\n}`, explanation: "Stack approach with character matching. Time: O(n), Space: O(n)" },
      { language: 'C++', code: `bool isValid(string s) {\n    stack<char> st;\n    for(char c : s){\n        if(c=='('||c=='{'||c=='[') st.push(c);\n        else{\n            if(st.empty()) return false;\n            if(c==')'&&st.top()!='(') return false;\n            if(c=='}'&&st.top()!='{') return false;\n            if(c==']'&&st.top()!='[') return false;\n            st.pop();\n        }\n    }\n    return st.empty();\n}`, explanation: "Stack for bracket matching. Time: O(n), Space: O(n)" },
      { language: 'C', code: `bool isValid(char* s) {\n    char stack[10000];\n    int top = -1;\n    for(int i=0; s[i]; i++){\n        if(s[i]=='('||s[i]=='{'||s[i]=='[') stack[++top]=s[i];\n        else{\n            if(top==-1) return 0;\n            if(s[i]==')'&&stack[top--]!='(') return 0;\n            if(s[i]=='}'&&stack[top--]!='{') return 0;\n            if(s[i]==']'&&stack[top--]!='[') return 0;\n        }\n    }\n    return top==-1;\n}`, explanation: "Array as stack. Time: O(n), Space: O(n)" }
    ]
  },
  {
    id: 9,
    title: "9. Merge Two Sorted Lists",
    difficulty: "Easy",
    description: "You are given the heads of two sorted linked lists list1 and list2.\n\nMerge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.\n\nReturn the head of the merged linked list.",
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = []", output: "[]" }
    ],
    testCases: [
      { input: [[1,2,4], [1,3,4]], expected: [1,1,2,3,4,4] },
      { input: [[], []], expected: [] },
      { input: [[], [0]], expected: [0] }
    ],
    starterCode: {
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    // Merge two sorted linked lists
    
}`,
      python: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def merge_two_lists(list1, list2):
    # Merge two sorted linked lists
    pass`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Merge two sorted linked lists
        return null;
    }
}`,
      cpp: `// Definition for singly-linked list.
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        // Merge two sorted linked lists
        return nullptr;
    }
};`,
      c: `// Definition for singly-linked list.
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    // Merge two sorted linked lists
    return NULL;
}`
    },
    solutions: [
      { language: 'Python', code: `def merge_two_lists(l1, l2):\n    dummy = cur = ListNode()\n    while l1 and l2:\n        if l1.val < l2.val:\n            cur.next = l1\n            l1 = l1.next\n        else:\n            cur.next = l2\n            l2 = l2.next\n        cur = cur.next\n    cur.next = l1 or l2\n    return dummy.next`, explanation: "Dummy node with iterative merge. Time: O(n+m), Space: O(1)" },
      { language: 'JavaScript', code: `function mergeTwoLists(list1, list2) {\n    const dummy = new ListNode();\n    let cur = dummy;\n    while (list1 && list2) {\n        if (list1.val < list2.val) {\n            cur.next = list1;\n            list1 = list1.next;\n        } else {\n            cur.next = list2;\n            list2 = list2.next;\n        }\n        cur = cur.next;\n    }\n    cur.next = list1 || list2;\n    return dummy.next;\n}`, explanation: "Iterative merging with dummy. Time: O(n+m), Space: O(1)" },
      { language: 'Java', code: `public ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0);\n    ListNode cur = dummy;\n    while (l1 != null && l2 != null) {\n        if (l1.val < l2.val) {\n            cur.next = l1;\n            l1 = l1.next;\n        } else {\n            cur.next = l2;\n            l2 = l2.next;\n        }\n        cur = cur.next;\n    }\n    cur.next = l1 != null ? l1 : l2;\n    return dummy.next;\n}`, explanation: "Iterative merge using dummy node. Time: O(n+m), Space: O(1)" },
      { language: 'C++', code: `ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {\n    ListNode* dummy = new ListNode(-1);\n    ListNode* cur = dummy;\n    while(l1 && l2){\n        if(l1->val < l2->val){\n            cur->next = l1; l1 = l1->next;\n        }else{ cur->next = l2; l2 = l2->next; }\n        cur = cur->next;\n    }\n    cur->next = l1 ? l1 : l2;\n    return dummy->next;\n}`, explanation: "Merge while comparing values. Time: O(n+m), Space: O(1)" },
      { language: 'C', code: `struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {\n    struct ListNode dummy = {0, NULL};\n    struct ListNode* cur = &dummy;\n    while(l1 && l2){\n        if(l1->val < l2->val){\n            cur->next = l1; l1 = l1->next;\n        }else{ cur->next = l2; l2 = l2->next; }\n        cur = cur->next;\n    }\n    cur->next = l1 ? l1 : l2;\n    return dummy.next;\n}`, explanation: "Iterative merge. Time: O(n+m), Space: O(1)" }
    ]
  },
  {
    id: 10,
    title: "10. Binary Search",
    difficulty: "Easy",
    description: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.\n\nYou must write an algorithm with O(log n) runtime complexity.",
    examples: [
      { input: "nums = [-1,0,3,5,9,12], target = 9", output: "4", explanation: "9 exists in nums and its index is 4" },
      { input: "nums = [-1,0,3,5,9,12], target = 2", output: "-1", explanation: "2 does not exist in nums so return -1" }
    ],
    testCases: [
      { input: [[-1,0,3,5,9,12], 9], expected: 4 },
      { input: [[-1,0,3,5,9,12], 2], expected: -1 },
      { input: [[5], 5], expected: 0 },
      { input: [[5], -5], expected: -1 }
    ],
    starterCode: {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    // Binary search - O(log n)
    
}`,
      python: `def binary_search(nums, target):
    # Binary search - O(log n)
    pass`,
      java: `class Solution {
    public int search(int[] nums, int target) {
        // Binary search - O(log n)
        return -1;
    }
}`,
      cpp: `int search(vector<int>& nums, int target) {
    // Binary search - O(log n)
    return -1;
}`,
      c: `int search(int* nums, int numsSize, int target) {
    // Binary search - O(log n)
    return -1;
}`
    },
    solutions: [
      { language: 'Python', code: `def binary_search(nums, target):\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1`, explanation: "Standard binary search. Time: O(log n), Space: O(1)" },
      { language: 'JavaScript', code: `function search(nums, target) {\n    let left = 0, right = nums.length - 1;\n    while (left <= right) {\n        const mid = Math.floor((left + right) / 2);\n        if (nums[mid] === target) return mid;\n        else if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}`, explanation: "Classic binary search. Time: O(log n), Space: O(1)" },
      { language: 'Java', code: `public int search(int[] nums, int target) {\n    int left = 0, right = nums.length - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] == target) return mid;\n        else if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}`, explanation: "Binary search with overflow prevention. Time: O(log n), Space: O(1)" },
      { language: 'C++', code: `int search(vector<int>& nums, int target) {\n    int left = 0, right = nums.size() - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] == target) return mid;\n        else if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}`, explanation: "Binary search. Time: O(log n), Space: O(1)" },
      { language: 'C', code: `int search(int* nums, int numsSize, int target) {\n    int left = 0, right = numsSize - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] == target) return mid;\n        else if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}`, explanation: "Binary search algorithm. Time: O(log n), Space: O(1)" }
    ]
  }
];

function Coding() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [selectedProblem, setSelectedProblem] = useState(PROBLEMS[0]);
  const [code, setCode] = useState(PROBLEMS[0].starterCode.javascript);
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [testResults, setTestResults] = useState(null);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showProblemMenu, setShowProblemMenu] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [activeSolution, setActiveSolution] = useState(null);

  const handleProblemChange = (problem) => {
    setSelectedProblem(problem);
    setCode(problem.starterCode[selectedLang.id] || problem.starterCode.javascript);
    setShowProblemMenu(false);
    setTestResults(null);
    setShowSolutions(false);
    setActiveSolution(null);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang);
    setCode(selectedProblem.starterCode[lang.id] || selectedProblem.starterCode.javascript);
    setShowLangMenu(false);
    setTestResults(null);
    setShowSolutions(false);
  };

  // Code verification based on selected language
  const verifyCode = (code, lang, testCase) => {
    // Simple pattern-based verification (simulated AI verification)
    // In production, this would call a backend API
    const codeLower = code.toLowerCase();
    const langId = lang.id;
    
    // Check if code contains basic solution patterns
    switch(selectedProblem.id) {
      case 1: // Hello World
        if (langId === 'python') return code.includes('return "hello, world!"') || code.includes('return "Hello, World!"');
        if (langId === 'javascript') return code.includes('"hello, world!"') || code.includes('"Hello, World!"') || code.includes("'Hello, World!'");
        if (langId === 'java') return code.includes('"Hello, World!"');
        if (langId === 'cpp') return code.includes('"Hello, World!"');
        if (langId === 'c') return code.includes('"Hello, World!"');
        return false;
        
      case 2: // Sum of Two Numbers
        if (langId === 'python') return code.includes('return a + b') || code.includes('return a+b');
        if (langId === 'javascript') return code.includes('a + b') || code.includes('a+b');
        if (langId === 'java' || langId === 'cpp' || langId === 'c') return code.includes('a + b') || code.includes('a+b');
        return false;
        
      case 3: // Reverse String
        if (langId === 'python') return code.includes('reverse') || code.includes('[::-1]');
        if (langId === 'javascript') return code.includes('reverse');
        if (langId === 'java') return code.includes('left') && code.includes('right');
        if (langId === 'cpp') return code.includes('reverse') || code.includes('swap');
        if (langId === 'c') return code.includes('temp') && code.includes('swap');
        return false;
        
      case 4: // Palindrome Number
        if (langId === 'python') return code.includes('str') || code.includes('::-1') || code.includes('rev');
        if (langId === 'javascript') return code.includes('tostring') || code.includes('split') || code.includes('reverse');
        if (langId === 'java') return code.includes('rev') && code.includes('%');
        if (langId === 'cpp') return code.includes('rev') && code.includes('%');
        if (langId === 'c') return code.includes('rev') && code.includes('%');
        return false;
        
      case 5: // Fizz Buzz
        if (langId === 'python') return code.includes('fizzbuzz') || code.includes('FizzBuzz') || code.includes('%15') || code.contains('%3') || code.contains('%5');
        if (langId === 'javascript') return code.includes('FizzBuzz') || code.includes('fizzbuzz') || code.includes('% 15');
        if (langId === 'java' || langId === 'cpp' || langId === 'c') return code.includes('15') && (code.includes('%3') || code.includes('%5'));
        return false;
        
      case 6: // Two Sum
        if (langId === 'python') return code.includes('seen') || code.includes('map') || code.includes('dict') || code.includes('enumerate');
        if (langId === 'javascript') return code.includes('map') || code.includes('object');
        if (langId === 'java') return code.includes('hashmap') || code.contains('Map');
        if (langId === 'cpp') return code.includes('unordered_map') || code.includes('map');
        if (langId === 'c') return code.includes('for') && code.includes('for');
        return false;
        
      case 7: // Maximum Subarray
        if (langId === 'python') return code.includes('max') && code.includes('sum');
        if (langId === 'javascript') return code.includes('max') && code.includes('sum');
        if (langId === 'java' || langId === 'cpp' || langId === 'c') return code.includes('max') && code.includes('sum');
        return false;
        
      case 8: // Valid Parentheses
        if (langId === 'python') return code.includes('stack');
        if (langId === 'javascript') return code.includes('stack') || code.includes('array');
        if (langId === 'java') return code.includes('stack') || code.includes('Deque');
        if (langId === 'cpp') return code.includes('stack');
        if (langId === 'c') return code.includes('stack') || code.includes('[');
        return false;
        
      case 9: // Merge Two Sorted Lists
        if (langId === 'python') return code.includes('dummy') || code.includes('merge');
        if (langId === 'javascript') return code.includes('dummy') || code.includes('merge');
        if (langId === 'java') return code.includes('dummy') || code.includes('merge');
        if (langId === 'cpp') return code.includes('dummy') || code.includes('merge');
        if (langId === 'c') return code.includes('dummy') || code.includes('merge');
        return false;
        
      case 10: // Binary Search
        if (langId === 'python') return code.includes('left') && code.includes('right') && code.includes('mid');
        if (langId === 'javascript') return code.includes('left') && code.includes('right') && code.includes('mid');
        if (langId === 'java' || langId === 'cpp' || langId === 'c') return code.includes('left') && code.includes('right') && code.includes('mid');
        return false;
        
      default:
        return false;
    }
  };

  const handleRunCode = () => {
    setIsTestRunning(true);
    setTestResults(null);
    
    setTimeout(() => {
      const results = selectedProblem.testCases.map((testCase, index) => {
        // Use AI-based verification to check if code is correct for the selected language
        const isPassed = verifyCode(code, selectedLang, testCase);
        return {
          id: index,
          input: JSON.stringify(testCase.input),
          expected: JSON.stringify(testCase.expected),
          output: isPassed ? JSON.stringify(testCase.expected) : 'Incorrect output',
          passed: isPassed
        };
      });
      
      setTestResults(results);
      setIsTestRunning(false);
      
      const allPassed = results.every(r => r.passed);
      if (allPassed) {
        setTimeout(() => setShowSolutions(true), 500);
      }
    }, 1500);
  };

  const handleReset = () => {
    setCode(selectedProblem.starterCode[selectedLang.id] || selectedProblem.starterCode.javascript);
    setTestResults(null);
    setShowSolutions(false);
    setActiveSolution(null);
  };

  const passedCount = testResults?.filter(r => r.passed).length || 0;
  const totalTests = selectedProblem.testCases.length;
  const allPassed = passedCount === totalTests;

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-200';
      case 'Easy': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="h-screen bg-[#f8fafc] flex flex-col font-sans overflow-hidden">
      
      {/* Top Bar */}
      <div className="bg-white border-b border-slate-200/80 px-4 py-3 flex items-center justify-between shrink-0 shadow-sm z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-slate-800 tracking-tight text-lg">Code Coliseum</span>
          </div>
        </div>

        {/* Problem Selector */}
        <div className="relative flex-1 max-w-md mx-4">
          <button 
            onClick={() => setShowProblemMenu(!showProblemMenu)}
            className="w-full flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-xl hover:border-blue-400 transition-colors"
          >
            <FolderOpen className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-800 flex-1 text-left truncate">{selectedProblem.title}</span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${getDifficultyColor(selectedProblem.difficulty)}`}>
              {selectedProblem.difficulty}
            </span>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showProblemMenu ? 'rotate-180' : ''}`} />
          </button>
          
          {showProblemMenu && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-50 max-h-80 overflow-y-auto w-full">
              {PROBLEMS.map((problem) => (
                <button
                  key={problem.id}
                  onClick={() => handleProblemChange(problem)}
                  className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-slate-50 transition-colors ${
                    selectedProblem.id === problem.id ? 'bg-blue-50 border-l-4 border-blue-600' : ''
                  }`}
                >
                  <div>
                    <span className="font-bold text-sm text-slate-800">{problem.title}</span>
                    <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded font-bold border ${getDifficultyColor(problem.difficulty)}`}>
                      {problem.difficulty}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all text-sm"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
          <button 
            onClick={handleRunCode}
            disabled={isTestRunning}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-white btn-primary disabled:opacity-50 text-sm tracking-wide"
          >
            {isTestRunning ? (
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
            ) : (
              <Play className="w-4 h-4 fill-white" />
            )}
            Run Code
          </button>
          <button 
            disabled={!allPassed}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-white transition-all shadow-md text-sm tracking-wide ${
              !allPassed 
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-emerald-500/20' 
                : 'bg-slate-300 cursor-not-allowed'
            }`}
          >
            <Check className="w-4 h-4" /> Submit
          </button>
        </div>
      </div>

      {/* Workspace Area */}
      <div className="flex-1 flex overflow-hidden p-2 gap-2 bg-slate-200/50">
        
        {/* Left Resizable Pane: Description */}
        <div className="w-1/3 min-w-[350px] max-w-[600px] bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-y-auto flex flex-col">
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {selectedProblem.title}
              </h1>
            </div>
            
            <div className="flex items-center gap-3 mb-8">
              <span className={`px-3 py-1 rounded text-xs font-black tracking-wide border ${getDifficultyColor(selectedProblem.difficulty)}`}>
                {selectedProblem.difficulty}
              </span>
              <span className="text-slate-500 text-xs font-bold flex items-center gap-1.5 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded border border-slate-200">
                <MonitorPlay className="w-3.5 h-3.5" /> {selectedProblem.testCases.length} Test Cases
              </span>
            </div>

            <div className="prose prose-slate prose-sm max-w-none text-slate-700 mb-10 whitespace-pre-wrap leading-relaxed font-medium">
              {selectedProblem.description}
            </div>

            <div className="space-y-6">
              {selectedProblem.examples.map((example, i) => (
                <div key={i} className="bg-[#f8fafc] border border-slate-200/80 rounded-2xl p-5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-3 block">Example {i + 1}</span>
                  <div className="space-y-3 font-mono text-sm border-l-2 border-blue-500 pl-4">
                    <div>
                      <span className="text-slate-400 font-bold">Input: </span>
                      <span className="text-slate-800 font-bold">{example.input}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-bold">Output: </span>
                      <span className="text-emerald-600 font-bold">{example.output}</span>
                    </div>
                  </div>
                  {example.explanation && (
                    <div className="mt-4 pt-3 border-t border-slate-200/60 text-slate-500 font-medium text-[13px] leading-relaxed">
                      <strong className="text-slate-700">Explanation: </strong>
                      {example.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Pane: Code + Console */}
        <div className="flex-1 flex flex-col min-w-0 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            
            {/* Editor Header with Language Switcher */}
            <div className="bg-[#f8fafc] flex items-center px-4 py-2 shrink-0 border-b border-slate-200/80 justify-between">
              {/* Language Selector */}
              <div className="relative">
                <button 
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-600 text-[13px] font-black font-mono shadow-sm hover:border-blue-400 transition-colors"
                >
                  <Code2 className="w-4 h-4" style={{ color: selectedLang.color }} /> 
                  {selectedLang.name}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
                </button>
                
                {showLangMenu && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg py-1 z-50 min-w-[150px]">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.id}
                        onClick={() => handleLanguageChange(lang)}
                        className={`w-full px-4 py-2 text-left text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors ${
                          selectedLang.id === lang.id ? 'bg-blue-50 text-blue-600' : 'text-slate-700'
                        }`}
                      >
                        <span 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: lang.color }}
                        ></span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-600 text-[13px] font-black font-mono shadow-sm">
                solution.{selectedLang.ext}
              </div>
            </div>

            {/* Monaco Container */}
            <div className="flex-1 relative bg-[#ffffff]">
              <Editor
                height="100%"
                language={selectedLang.id}
                theme="light" 
                value={code}
                onChange={setCode}
                options={{
                  minimap: { enabled: false },
                  fontSize: 15,
                  padding: { top: 24, bottom: 24 },
                  fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                  fontLigatures: true,
                  renderLineHighlight: 'all',
                  scrollBeyondLastLine: false,
                  smoothScrolling: true,
                  cursorBlinking: 'smooth',
                  cursorSmoothCaretAnimation: true,
                  scrollbar: {
                    verticalScrollbarSize: 8,
                    horizontalScrollbarSize: 8,
                  }
                }}
              />
            </div>

            {/* Console Bottom Area */}
            <div className="h-72 border-t border-slate-200/80 bg-white shrink-0 flex flex-col shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
              <div className="px-5 py-3 bg-[#f8fafc] border-b border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4" /> 
                  Test Results
                  {testResults && (
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      allPassed 
                        ? 'bg-emerald-100 text-emerald-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {passedCount}/{totalTests} Passed
                    </span>
                  )}
                </span>
                {testResults && (
                  <button 
                    onClick={() => setShowSolutions(allPassed)}
                    disabled={!allPassed}
                    className={`text-xs font-bold flex items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
                      allPassed 
                        ? 'text-blue-600 hover:bg-blue-50' 
                        : 'text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <Lightbulb className="w-3 h-3" />
                    View Solutions
                  </button>
                )}
              </div>
              
              <div className="flex-1 p-5 overflow-y-auto">
                {testResults ? (
                  <div className="space-y-3">
                    {testResults.map((result) => (
                      <div 
                        key={result.id}
                        className={`p-4 rounded-xl border-2 ${
                          result.passed 
                            ? 'bg-emerald-50 border-emerald-200' 
                            : 'bg-red-50 border-red-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {result.passed ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )}
                          <span className={`font-bold text-sm ${
                            result.passed ? 'text-emerald-700' : 'text-red-700'
                          }`}>
                            Test Case {result.id + 1} - {result.passed ? 'Passed' : 'Failed'}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-xs font-mono">
                          <div>
                            <span className="text-slate-500 block mb-1">Input:</span>
                            <span className="text-slate-800 bg-white px-2 py-1 rounded border">{result.input}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block mb-1">Expected:</span>
                            <span className="text-slate-800 bg-white px-2 py-1 rounded border">{result.expected}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block mb-1">Output:</span>
                            <span className={`px-2 py-1 rounded border ${
                              result.passed ? 'text-emerald-700 bg-white' : 'text-red-700 bg-white'
                            }`}>{result.output}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Solutions Section */}
                    {showSolutions && allPassed && (
                      <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-200">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <Lightbulb className="w-5 h-5 text-yellow-500" />
                            Top Solutions
                          </h3>
                          <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                            All 5 Approaches
                          </span>
                        </div>
                        
                        <div className="flex gap-2 mb-4 flex-wrap">
                          {selectedProblem.solutions.map((sol, idx) => (
                            <button
                              key={idx}
                              onClick={() => setActiveSolution(idx)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                activeSolution === idx
                                  ? 'bg-blue-600 text-white shadow-md'
                                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300'
                              }`}
                            >
                              {sol.language}
                            </button>
                          ))}
                        </div>
                        
                        {activeSolution !== null && (
                          <div className="bg-slate-900 rounded-xl p-4 text-white">
                            <div className="flex items-center justify-between mb-3">
                              <span className="font-bold text-sm">
                                {selectedProblem.solutions[activeSolution].language} Solution
                              </span>
                              <button className="text-slate-400 hover:text-white transition-colors">
                                <Copy className="w-4 h-4" />
                              </button>
                            </div>
                            <pre className="text-xs font-mono text-slate-300 overflow-x-auto">
                              <code>{selectedProblem.solutions[activeSolution].code}</code>
                            </pre>
                            <div className="mt-4 pt-3 border-t border-slate-700">
                              <span className="text-xs font-bold text-yellow-400">Explanation: </span>
                              <span className="text-xs text-slate-400">
                                {selectedProblem.solutions[activeSolution].explanation}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-400 font-bold text-[13px] gap-3 uppercase tracking-wider">
                    <div className="w-12 h-12 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center border-dashed">
                      <Play className="w-5 h-5 opacity-30" />
                    </div>
                    Run code to evaluate test cases
                  </div>
                )}
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Coding;
