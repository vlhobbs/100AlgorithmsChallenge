### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5)
---

You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

**Example**

For inputArray = [5, 3, 6, 7, 9], the output should be
avoidObstacles(inputArray) = 4.

This is what the inputArray above would look like on a number line. 

`|_|_|_3_|_5_6_7_|_9_|_|_|_`

**Hints**
-   sort()
-   every()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer inputArray**

Non-empty array of positive integers.

*Guaranteed constraints:*

2 ≤ inputArray.length ≤ 10,

1 ≤ inputArray[i] ≤ 40.

- **[output] integer**

The desired length.

**Notes**

Solved: *Yes*

What is this asking for? Basically, find some value of i within the range of values between 2 and the maximal value in the starting array, for which no multiples of i are contained within that range. (i=1 will always fail.)

For the array above, we test from i=2 moving up to i=9: 

- i=2: passes until you get to n*3 = 6, which exists. 
- i=3: Fails at n*1=3.
- i=4: Passes. The only values of i*x that could be in this range are 4 and 8; both are absent.

From the JS ref at Mozilla.org: 

- *The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.*

So we can ask, say, if all elements are not evenly divisible by four: 

inputArray.every(x => !(x % 4 === 0));

First, we sort the inputArray to make it easier to find the max value included in the range. (Above, that value would be 9.)

Test 1 (will make life easier for longer arrays): If the array is full of consecutive values, return the max value + 1. 

If that fails, continue to test each value between 2 and max to find the first value of the range where there are no multiples of that value in the array itself. Return that value. 