function matrixElementsSum(matrix: any[][]): number {
    let excluded: number[] = []
    let total: number = 0;
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === 0){
                excluded.push(j);
            }
            else if (excluded.indexOf(j) === -1){
                total = total + matrix[i][j];
            }
        }
    }
return total;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));

