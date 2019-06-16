### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/code-arcade/spring-of-integration/dwA8RtDF86WucuoaQ)
---
Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

-   On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
-   On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
After the algorithm has finished, there will be a single element left in the array. Return that element.

**Example**

For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be
arrayConversion(inputArray) = 186. 

We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

**Hints**
-   push()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**
- **[input] array.integer inputArray**

*Guaranteed constraints:*

1 ≤ inputArray.length ≤ 32,

-9 ≤ inputArray[i] ≤ 99.

- **[output] integer**

**Notes**

Solved: *Yes*

There are always (2^k) elements in the array. Otherwise, you end up with NaN. It would be possible to 
write code to "pad" the original array to a workable value with 0s and 1s, I think, so that the result would not change, but
that's going to be a lot more challenging and is probably a good project for another day. Also, I edited the inputArray.length
for the simple reason that a length of 20 would not work for this, 20 is not a power of 2. The closest number after 20 that 
works is 32.

I'm embarrassed to say it, but this one took me a very long time to solve because I forgot an important operator. When I 
was trying to write this code, I couldn't figure out why Quokka was not showing me any answers (even a test console log at the top
of the file that should have just showed "test" in the console was not working.) After a while, I eventually searched for the 
problem and realized that the function was not completing; I had an endless loop somewhere.

It took some debugging, but eventually I realized that the problem was in my sum and product subfunctions. I had written "i + 2"
in the for loops instead of "i += 2" - I usually just use "i++" because I usually only step through one at a time, and that 
threw me off. So the loops were never completing and the program was never rendering anything. 

