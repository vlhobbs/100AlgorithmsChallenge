### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/code-arcade/spring-of-integration/MQg7s3dKrP4caN42A)
---
Given array of integers, for each position i, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position i in the answer. If no such value can be found, store -1 instead.

**Example**

For items = [3, 5, 2, 4, 5], the output should be
arrayPreviousLess(items) = [-1, 3, -1, 2, 4].

**Hints**
-   unshift()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**
- **[input] array.integer items**

    Non-empty array of positive integers.

*Guaranteed constraints:*

3 ≤ items.length ≤ 15,

1 ≤ items[i] ≤ 200.

- **[output] array.integer**

    Array containing answer values computed as described above.

**Notes**

Solved: *Yes*

Both the commented solution and the uncommented solution work, but I was taught not to use break statements unless absolutely necessary so figured out how to do the same thing with a while loop instead. I did not end up using unshift(). It appears that if you wanted to use that solution, you would have to add the values to the original array, then stop the iteration from going all the way to the start and return the first half of the array. Might try it later.