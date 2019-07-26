function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    let results:number[] = []
    for (let j = 0; j < ratings.length; j++){
        if (arrayMean(ratings[j]) < threshold){
            results.push(j);
        }
    }
    return results;
}

console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4], [2,3]]));

function arrayMean(arr: number[]): number {
    let sum:number = 0;
    for (let i:number = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}