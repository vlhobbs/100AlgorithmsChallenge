function alphabeticShift(inputString: string): string {

    let stringArray: string[] = inputString.split("");
    for (let index = 0; index < stringArray.length; index++){
        if (stringArray[index].charCodeAt(0) == 90) {  //z
            stringArray[index] = String.fromCharCode(65);
        }
        else if (stringArray[index].charCodeAt(0) == 122){
            stringArray[index] = String.fromCharCode(97);
        }
        else { 
            stringArray[index] = String.fromCharCode(stringArray[index].charCodeAt(0) + 1);
        }
    }
    return stringArray.join("");
}




/*
    fromCharCode gives the unicode character that relates to a given number
    For letters: A-Z is 65 through 90
    Lowercase:   a-z is 97-122
    So if the code returns 90 (Z) we have to add logic to move it to 65
    If it returns 122 (z) we have to add logic to make it 97

-   split() str.split([separator[, limit]]) 
-   indexOf() method returns the index within the calling String
    object of the first occurrence of the specified value, starting
    the search at fromIndex. Returns -1 if the value is not found.
-   join()

*/

console.log(alphabeticShift("crazy"))
console.log(alphabeticShift("afsrabcdatarfalsihrtaelr"))
    