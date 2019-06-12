function crossingSum(matrix: number[][], a: number, b: number): number {
    //get sum of row
    let rowSum:number = 0;
    for (let i = 0; i < matrix[a].length; i++){
        rowSum += matrix[a][i];
    }
    console.log(rowSum);
    //get sum of column, exclude ath object
    let colSum:number = 0;
    for (let j = 0; j < matrix.length; j++){
        if (j != a){
        colSum += matrix[j][b];
        }
    }
    console.log(colSum);
    return (rowSum + colSum);
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));


    /*
    What this wants: 1st row (2,2,2,2) and 3rd column (1, 2, 3) summed together.
    However, you have to exclude the one item that is in both
    Therefore, the 3nd (start from 0) item in 1st row and the 1st item in 3rd column
    I am sure there is an easier/faster way, look back at this one later
    */