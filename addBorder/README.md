### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)
---
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

**Example**

For

    picture = ["abc",
           "ded"]
the output should be

    addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]

**Hints**
-   concat()
-   unshift()
-   push()

**Input/Output**
- **[time limit] 4000ms (js)**
- **[input] array.string picture**

A non-empty array of non-empty equal-length strings.

*Guaranteed constraints:*

1 ≤ picture.length ≤ 5,

1 ≤ picture[i].length ≤ 5.

- **[output] array.string**

The same matrix of characters, framed with a border of asterisks of width 1.

Student note: I feel like this should be doable with a forEach loop on the array,
but for some reason I am having the worst time with the syntax. Even after
creating a helper function to do what it needs me to do I am still getting errors.
Will need to ask about how forEach works in this language and look for examples
besides just printing to console.