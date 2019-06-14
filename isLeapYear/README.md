**Summary**

Determine whether or not the given year is a leap year. 

Leap years must meet the following criteria: 

- If a year is divisible by 400, it is always a leap year.

- If a year can be divided by 100 but not 400 evenly, it is not a leap year.

- Any year that does not fit the above criteria, but is divisible by 4, is a leap year. 

**Examples**

- isLeapYear(2000) = true
- isLeapYear(1500) = false
- isLeapYear(1104) = true

Input: year:number = integer value representing a year. 

*Guaranteed Constraints*
- 1 <= year <= 6000

Output: boolean

True if year is a leap year, false otherwise. 

**Notes**

Solved: *Yes*

The hardest part of this is remembering that a year that is divisible by 100 but not 400
isn't a leap year. 