function chunkyMonkey(arr: any[], size: number): any[][] {
    let first:number = 0;
    let result = [];
    while (first < arr.length){
        result.push(arr.slice(first, first + size));
        first = first + size;
    }
    return result;

}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));

