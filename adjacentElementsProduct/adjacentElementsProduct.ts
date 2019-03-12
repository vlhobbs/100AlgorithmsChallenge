function adjacentElementsProduct(inputArray: number[]): number {
    //constraints - -1000 < value of any given item in array < 1000
    const min:number = -1000;
    const max:number = 1000;
    let largest:number = min * max - 1 ;

    for (let index = 0; index < inputArray.length - 1; index++){
        if (inputArray[index] * inputArray[index+1] > largest){
            largest = inputArray[index] * inputArray[index + 1];
        }
    }
    return largest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([-1, 2, -3, 4, -5, 6]));
console.log(adjacentElementsProduct([1000, 1, 294, 423, 21, 500, 750]))
/*
NOTES
Going to go ahead and check all pairs for now, can figure out how to make it faster later
You have to make largest a very small negative number - smaller than 1,000,000 if we're
sticking with the README file's parameters. The smallest possible number we can get is 
1000 * -1000 = 1000000 - so using one less than that for initial value on largest. 
*/