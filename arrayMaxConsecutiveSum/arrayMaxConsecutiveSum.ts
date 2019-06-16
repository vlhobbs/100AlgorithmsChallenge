function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sums:number[] = [];
    for (let i:number = 0; i < (inputArray.length - k + 1); i++){
        let thisSum:number = (inputArray.slice(i, i+k)).reduce((a,b) => a+b, 0);
        sums.push(thisSum);
    }
    sums.sort((a,b) => -(a-b));    
    return sums[0];
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));