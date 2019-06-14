### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

---
Check whether the given string is a subsequence of the plaintext alphabet.

(IN OTHER WORDS: each letter appears only once and in ascending order to last ones.
So far easiest way seems to be to use charcodes to tell if any of the letters
are out of order. The next one should always be larger than the one behind it.)

**Example**

- For s = "effg" or s = "cdce", the output should be
alphabetSubsequence(s) = false

- For s = "ace" or s = "bxz", the output should be
alphabetSubsequence(s) = true.

**Hints**
-   size property
-   charCodeAt()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**
- **[input] string s**

*Guaranteed constraints:*

2 ≤ s.length ≤ 15.

**[output] boolean**

true if the given string is a subsequence of the alphabet, false otherwise.

**Notes**

Solved: *Yes*

Used ASCII codes