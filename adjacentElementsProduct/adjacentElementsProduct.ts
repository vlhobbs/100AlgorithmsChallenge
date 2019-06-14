function adjacentElementsProduct(inputArray: number[]): number {
    //constraints - -1000 < value of any given item in array < 1000
    const min:number = -1000;
    const max:number = 1000;
    let largest:number = min * max - 1;
    for (let index = 0; index < inputArray.length - 1; index++){
        if (inputArray[index] * inputArray[index+1] > largest){
            largest = inputArray[index] * inputArray[index + 1];
        }
    }
    return largest;
}

console.log(adjacentElementsProduct([0, 1, 2]));
console.log(adjacentElementsProduct([1000, -1000]))
console.log(adjacentElementsProduct([-1,2,-3,4,-5,6]))