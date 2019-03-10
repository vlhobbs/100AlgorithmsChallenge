function addBorder(picture: string[]): string[] {
    for (let index=0; index<picture.length; index++){
        picture[index] = addBorderCharsToLine(picture[index], "*");
    }
    let topAndBottom = (makeTopAndBottomString("*", picture[0].length));
    picture.unshift(topAndBottom);
    picture.push(topAndBottom);
    return picture;
}
function makeTopAndBottomString(borderChar: string, borderLength: number): string { 
    let lineWithBorder: string = "";
    for (let len=0; len<borderLength; len++){
        lineWithBorder = lineWithBorder.concat(borderChar);
    }
    return lineWithBorder;
}
function addBorderCharsToLine(line: string, borderChar: string): string {
    let newLine = borderChar;
    newLine = newLine.concat(line);
    newLine = newLine.concat(borderChar);
    return newLine;
}
console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["g"]));
console.log(addBorder(["", "", "", ""]));
console.log(addBorder(["dogs","cats","bats","wolf"]))

/*picture.forEach(function: line)
1. First add the asterisks to the substrings, one in front and one behind.
2. Push two new substrings of the new length, both made up of asterisks-
   one at the front of the array and the other at the end.

-   concat()
string.concat(string2, string3[, ..., stringN]); adds strings to return new string
-   unshift()
array.unshift( element1, ..., elementN ); - adds element(s) to front of array, returns arr.length
-   push()
array.push( element1, ..., elementN ); adds element(s) to end of array, returns arr.length
*/
