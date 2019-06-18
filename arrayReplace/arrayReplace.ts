function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
    for (let i:number = 0; i < inputArray.length; i++){
        if (inputArray[i] === elemToReplace){
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;  
}

console.log(arrayReplace([1, 2, 1], 1, 3));

/*
This can also be done using an arrow function
Replace the for loop with this:
    inputArray.forEach(num, i) => {
        if(num === elemToReplace){
            inputArray[i] = substitutionElem;
        }
    }

*/