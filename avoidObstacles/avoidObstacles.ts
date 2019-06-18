function avoidObstacles(inputArray: number[]): number { 
    inputArray.sort((a,b)=>a-b);
    if (inputArray.length == inputArray[inputArray.length - 1]){
        return inputArray[inputArray.length - 1] + 1;
    }
    for (let i:number = 2; i < inputArray[inputArray.length - 1]; i++){
        if (inputArray.every(x => !(x % i === 0))){
            return i;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([10, 1, 3, 4, 5, 7]))
console.log(avoidObstacles([1, 2, 3, 4]))