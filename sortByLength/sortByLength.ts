function sortByLength(inputArray: string[]): string[] {
    //sort by string.length
    //Can just use a simple sort
    //I am too tired to mess w/ a faster one

    for (let i:number = 1; i < inputArray.length; i++){
        let currentString:string = inputArray[i];
        let currentLength:number = currentString.length;
        let j:number = i-1;
        while (j >= 0 && inputArray[j].length > currentLength){
            inputArray[j+1] = inputArray[j];
            j--;
        }
        inputArray[j+1] = currentString;        
    }
    return inputArray;
}

console.log(sortByLength(["abc", "", "aaa", "a", "zz"]));
