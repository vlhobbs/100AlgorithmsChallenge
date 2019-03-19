function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maxDiff: number = 0; 
    for (let i = 0; i < inputArray.length; i++){
        if (maxDiff < Math.abs(Math.abs(inputArray[i]) - Math.abs(inputArray[i + 1]))) {
            maxDiff = Math.abs(Math.abs(inputArray[i]) - Math.abs(inputArray[i + 1]));
        }   
    }
    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

