function alternatingSums(a: number[]): number[] {
    let result: number[] = ([0,0]);
    for (let i = 0; i < a.length; i++){
        result[i % 2] += a[i];
    }
    return result;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
console.log(alternatingSums([100,150,100,90,75,90]))