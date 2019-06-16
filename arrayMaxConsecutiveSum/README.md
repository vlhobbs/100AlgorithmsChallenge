### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg)
---
Given array of integers, find the maximal possible sum of some of its k consecutive elements.

**Example**

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:
-   2 + 3 = 5;
-   3 + 5 = 8;
-   5 + 1 = 6;
-   1 + 6 = 7.

   Thus, the answer is 8

**Input/Output**

- **[execution time limit] 4 seconds (js)**
- **[input] array.integer inputArray** Array of positive integers.

*Guaranteed constraints:*

3 ≤ inputArray.length ≤ 105,

1 ≤ inputArray[i] ≤ 1000.

- **[input] integer k**

An integer (not greater than the length of inputArray).

*Guaranteed constraints:*
1 ≤ k ≤ inputArray.length.

-   **[output] integer**

The maximal possible sum.

**Notes**

Solved: *Yes*

I am still trying to understand the sort builtin for typescript. This line will sort from greatest to least: 

-arr.sort(a,b => -(a-b));

For the non-negated version, it sorts least to greatest, and you want a negative if a is less than b, a positive
if a is greater than b, and a 0 if they are equal. (Is this a stable sort? I'm going to have to look that up.)
Obviously negating it will reverse the order.

I just used the add function for #2 that could take any number of parameters, then found out that I needed to modify it 
to use an array for slice. After some research I figured out that I could use arr.reduce((a,b) => a+b) just as easily.
Although I did add the default value, just to be safe in case of a bounds error.

