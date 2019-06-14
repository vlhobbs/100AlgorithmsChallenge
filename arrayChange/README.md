### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/intro/level-4/xvkRbxYkdHdHNCKjg)
---

You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

**Example**

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer inputArray**

*Guaranteed constraints:*

3 ≤ inputArray.length ≤ 105,

-105 ≤ inputArray[i] ≤ 105.

- **[output] integer**

The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.


**Notes**

Solved: *Yes*

Relatively simple, can be done by editing array in-place. I started with a counter - add 1
to the current index until it was bigger than the previous. But that took a very long
time to calculate on the worst-case scenario, probably well over the minimum. Chose to
calculate the amount needed to make the next number greater ((input[i-i] - input[i]) + 1)
and add that to next moves, then to index i to advance so I could calculate next.