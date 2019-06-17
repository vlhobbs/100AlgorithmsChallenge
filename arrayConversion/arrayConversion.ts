function arrayConversion(inputArray: number[]): number {
    let iteration:number = 1;
    let inputLength = inputArray.length;
    while (inputLength > 1){
        if (iteration % 2 === 1){
            inputArray = sum(inputArray);
            inputLength = inputArray.length;
            iteration++;
        }
        else {
            inputArray = product(inputArray);
            inputLength = inputArray.length;
            iteration++;
        }
    }
    return inputArray[0];    
}


function sum(inputArray: number[]): number[] {
    let resultArr:number[] = [];
    for (let i = 1; i <= inputArray.length; i += 2){
         resultArr.push(inputArray[i-1] + inputArray[i]);
    }
    return resultArr;
}

function product(inputArray: number[]): number[] {
    let resultArr:number[] = [];
    for (let i = 1; i <= inputArray.length; i += 2){
         resultArr.push(inputArray[i-1] * inputArray[i]);
    }
    return resultArr;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

console.log(arrayConversion([4, 6, 7, 1]));

console.log(arrayConversion([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]))