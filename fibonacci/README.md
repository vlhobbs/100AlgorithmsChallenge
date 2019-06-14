Given an integer a, find its fibonacci value. The fibonacci value of a number is the sum of 
the two previous fibonacci values before it in sequence. 

The sequence, from 0th to nth, goes as follows: 

[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ... (F(n-2) + F(n-1)]

**Example**

fibonacci(6) = 8

fibonacci(10) = 55

**Hints**
- No builtin Hints
- Remember: You can do this recursively or iteratively

**Input/Output**

- **[input] integer a**
    An integer numeral.


    *Guaranteed constraints:*

    0 ≤ a ≤ 1000

-   **[output] integer**
    The ath number in the Fibonacci sequence.

**Notes**

Solved: *Yes*

I have an iterative and recursive solution. The recursive solution is naive
and could be improved by keeping track of previous values to add.