function arrayChange(inputArray: number[]): number {
    let totalMoves:number = 0;
    for (let i:number = 1; i < inputArray.length; i++){
        if (inputArray[i] <= inputArray[i-1]){
            let difference:number = (inputArray[i-1] - inputArray[i] + 1);
            totalMoves += difference;
            inputArray[i] += difference;
        }
    }
    return totalMoves;
}

//constraints say that min length of array = 3
//normally I would add logic for length <= 1

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([7, 1, 2]));
console.log(arrayChange
    ([105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105,
    -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105,
    -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105,
    -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105,
    -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105, -105,
    -105, -105, -105, -105, -105, -105]));