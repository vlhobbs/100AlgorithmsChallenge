### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/interview-practice/task/pMvymcahZ8dY4g75q)
---
Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

**Example**

-   For a = [2, 1, 3, 5, 3, 2], the output should be
firstDuplicate(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

-   For a = [2, 4, 3, 5, 1], the output should be
firstDuplicate(a) = -1.

**Hints**
-   hasOwnProperty()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**

- **[input] array.integer a**

A string containing at least one digit.

*Guaranteed constraints:*

1 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ a.length.

- **[output] integer**
The element in a that occurs in the array more than once and has the minimal index for its second occurrence. If there are no such elements, return -1.

***Solution notes***

I am not entirely sure that the answer in this would work on codefights,
because the final test has a thousand items in the array and that kept timing out. I used an adaptation of my Java answer from that question. 

- If array is one or zero items, return -1 (no possible duplicates)

- Otherwise, set a number value for position to the absolute value of the current number in the for loop + 1 (so for the first example, it would be 2 - 1 or 1.)

- Check to see if the value of a at index *position* is a positive or negative number. 

- If it is a positive number, then change the item in a at the position index to a negative number. 

- If it is already negative, that means we've found the number corresponding to this position in the array already! We can return position + 1 which will give us the position (counting up from 1) of that value in the array. 

- If that for loop returns no number, then return -1, as no duplicates were found.

The key to this is that all of the values must be between 1 and (max index of a) + 1. 
