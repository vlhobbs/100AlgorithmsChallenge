### Check Out The Instructor's [YouTube Channel](https://www.YouTube.com/CodingTutorials360)
---

**Problem Statement**

Given a sorted array of integers a, find an integer x from a such that the value of

    abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.

**Added by VH**

The examples below are not sorted. When they are sorted, we get different answers. I
included a sort statement in the code that I've uploaded for this algorithm, and
a full calculation of the sums for the four-, five- and six-item arrays, which
show which answer is correct for the test cases. 


**Example**

For a = [2, 4, 7], the output should be
absoluteValuesSumMinimization(a) = 4.

For a = [2, 4, 7, 6], the output should be
absoluteValuesSumMinimization(a) = 4.

For a = [2, 4, 7, 6, 6], the output should be
absoluteValuesSumMinimization(a) = 7. 

(VH: When sorted the output is 6.)


For a = [2, 4, 7, 6, 6, 8], the output should be
absoluteValuesSumMinimization(a) = 7.

(VH: When sorted the output is 6.)

**Hints**
-   Math.floor()

**Input/Output**

- **[time limit] 4000ms (js)**
- **[input] array.integer a**

A non-empty array of integers, *sorted in ascending order.*

(VH: I think that might be why there's some confusion. Emphasis mine.)

*Guaranteed constraints:*

1 ≤ a.length ≤ 200,

-106 ≤ a[i] ≤ 106.

- **[output] integer**