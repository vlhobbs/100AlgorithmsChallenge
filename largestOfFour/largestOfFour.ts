//the simplest and longest-running solution, would not scale for a larger square matrix
//certainly there are easier ways, I'm just doing stuff off the top of my head right now
//come back to it later b/c I am sure I can beat n^2

function largestOfFour(nums: number[][]): number[] {
    let results:number[] = []
    for (let j:number = 0; j < nums.length; j++){
        results.push(largestInArray(nums[j]));
    }
    return results;
}

function largestInArray(nums: number[]): number{
    let largest:number = -1000;
    for (let i:number = 0; i < nums.length; i++){
        if (nums[i] > largest){
            largest = nums[i];
        }
    }
    return largest;
}

console.log(largestInArray([4,5,1,3]));
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) );
//[5, 27, 39, 1001]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));

