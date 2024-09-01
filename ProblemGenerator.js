export const generateAProblem = async (event) => {
    const startDate = new Date('2024-09-01');
    const currentDate = new Date();
    const problemList = [
      "1 - Arrays & Hashing - Contains Duplicate - Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.",
      "2 - Arrays & Hashing - Valid Anagram - Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false. An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.",
      "3 - Arrays & Hashing - Two Sum - Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j. You may assume that every input has exactly one pair of indices i and j that satisfy the condition. Return the answer with the smaller index first. ",
      "4 - Arrays & Hashing - Group Anagrams - Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order. An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.",
      "5 - Arrays & Hashing - Top K Frequent Elements - Given an integer array nums and an integer k, return the k most frequent elements within the array. The test cases are generated such that the answer is always unique. You may return the output in any order.",
      "6 - Arrays & Hashing - Encode and Decode Strings - Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings. Please implement encode and decode",
      "7 - Arrays & Hashing - Product of Array Except Self - Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i]. Each product is guaranteed to fit in a 32-bit integer. Follow-up: Could you solve it in O(n)O(n) time without using the division operation?",
      "8 - Arrays & Hashing - Valid Sudoku - You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed: Each row must contain the digits 1-9 without duplicates. Each column must contain the digits 1-9 without duplicates. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates. Return true if the Sudoku board is valid, otherwise return false. Note: A board does not need to be full or be solvable to be valid.",
      "9 - Arrays & Hashing - Longest Consecutive Sequence - Given an array of integers nums, return the length of the longest consecutive sequence of elements. A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. You must write an algorithm that runs in O(n) time.",
      "10 - Two Pointers - Valid Palindrome - Given a string s, return true if it is a palindrome, otherwise return false. A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.",
      "11 - Two Pointers - Two Sum II Input Array Is Sorted - Given an array of integers numbers that is sorted in non-decreasing order. Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice. There will always be exactly one valid solution. Your solution must use O(1)O(1) additional space.",
      "12 - Two Pointers - 3Sum - Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct. The output should not contain any duplicate triplets. You may return the output and the triplets in any order.",
      "13 - Two Pointers - Container With Most Water - You are given an integer array heights where heights[i] represents the height of the ithith bar. You may choose any two bars to form a container. Return the maximum amount of water a container can store.",
      "14 - Two Pointers - Trapping Rain Water - You are given an array non-negative integers heights which represent an elevation map. Each value heights[i] represents the height of a bar, which has a width of 1. Return the maximum area of water that can be trapped between the bars.",
      "15 - Stack - Valid Parentheses - You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'. The input string s is valid if and only if: (1) Every open bracket is closed by the same type of close bracket, (2) Open brackets are closed in the correct order, and (3) Every close bracket has a corresponding open bracket of the same type. Return true if s is a valid string, and false otherwise.",
      "16 - Stack - Min Stack - Design a stack class that supports the push, pop, top, and getMin operations. (1) MinStack() initializes the stack object, (2) push(int val) pushes the element val onto the stack, (3) pop() removes the element on the top of the stack, (4) top() gets the top element of the stack, (5) getMin() retrieves the minimum element in the stack. Each function should run in O(1)time.",
      "17 - Stack - Evaluate Reverse Polish Notation - You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation. Return the integer that represents the evaluation of the expression. The operands may be integers or the results of other operations. The operators include '+', '-', '*', and '/'. Assume that division between integers always truncates toward zero.",
      "18 - Stack - Generate Parentheses - You are given an integer n. Return all well-formed parentheses strings that you can generate with n pairs of parentheses.",
      "19 - Stack - Daily Temperatures - You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day. Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.",
      "20 - Stack - Car Fleet - There are n cars traveling to the same destination on a one-lane highway. You are given two arrays of integers position and speed, both of length n. (1) position[i] is the position of the ith car (in miles), and (2) speed[i] is the speed of the ith car (in miles per hour) The destination is at position target miles. A car can not pass another car ahead of it. It can only catch up to another car and then drive at the same speed as the car ahead of it. A car fleet is a non-empty set of cars driving at the same position and same speed. A single car is also considered a car fleet. If a car catches up to a car fleet the moment the fleet reaches the destination, then the car is considered to be part of the fleet. Return the number of different car fleets that will arrive at the destination.",
      "21 - Stack - Largest Rectangle In Histogram - You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1. Return the area of the largest rectangle that can be formed among the bars.",
  ]
    
    const daysSinceStart = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    const problemIndex = daysSinceStart % problemList.length;
    return problemList[problemIndex];
    
    
    const test_method = () => {
      const startDate = new Date('2024-08-01');
      const getNextProblemIndex = (problemList, startDate, currentDate) => {
        const daysSinceStart = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
        return daysSinceStart % problemList.length;
      };
      // Tests
      const threeProblems = ['Problem 1', 'Problem 2', 'Problem 3'];
      const fiveProblems = ['Problem 1', 'Problem 2', 'Problem 3', 'Problem 4', 'Problem 5'];
      threeProblems.forEach((value, index) => {
        const newDay = new Date(startDate.getTime() + (index * 24 * 60 * 60 * 1000));
        console.log(`Three problem index: ${getNextProblemIndex(threeProblems, startDate, newDay)}`);
      });
      fiveProblems.forEach((value, index) => {
        const newDay = new Date(startDate.getTime() + (index * 24 * 60 * 60 * 1000));
        console.log(`Five problem index: ${getNextProblemIndex(fiveProblems, startDate, newDay)}`);
      });
      console.log(`Start with three problems: ${getNextProblemIndex(threeProblems, startDate, new Date('2024-08-03'))}`);
      console.log(`Switch to with five problems: ${getNextProblemIndex(fiveProblems, startDate, new Date('2024-08-04'))}`);
      }
    
  };