### Check Out My [YouTube Channel](https://www.YouTube.com/CodingTutorials360)

##### Algorithm Challenge Available At [CodeFights](https://codefights.com/arcade/code-arcade/book-market/TXFLopNcCNbJLQivP
---
An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").

The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.

Given a valid email address, find its domain part.

**Example**

-   For address = "prettyandsimple@example.com", the output should be
findEmailDomain(address) = "example.com";

-   For address = "<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org", the output should be
findEmailDomain(address) = "example.org".

**Hints**
-   lastIndexOf()
-   slice()

**Input/Output**

- **[execution time limit] 5 seconds (ts)**

- **[input] string address**

*Guaranteed constraints:*

10 ≤ address.length ≤ 50.

- **[output] string**

The domain portion of the e-mail.

**Notes**

Solved: *Yes*

Only requires the index of the last @, then a slice of that index + 1 to 
create. Only works if e-mail is valid, would need additional logic for possibility 
of invalid e-mail. I am fairly sure an actual e-mail with multiple @ symbols would
be rejected anyway.
