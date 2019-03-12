function allLongestStrings(inputArray: string[]): string[] {
    //Two iterations? One to get longest count and second to push to new array
    //otherwise we will be changing largest in mid-stream 
    //I'll have to see if I can find a way to do it in one pass

    let largest: number = 0;
    //calculate largest
    for (let index = 0; index < inputArray.length; index++){
        if (inputArray[index].length > largest) {
            largest = inputArray[index].length;
            }
        }
    let resultArray:string[] = [];
    for (let index = 0; index < inputArray.length; index++){
        if (inputArray[index].length == largest){
            resultArray.push(inputArray[index]);
        }
    }
    return resultArray;

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["a", "b", "c", "d"]))