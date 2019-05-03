function firstDuplicate(a: number[]): number {
    if (a.length <= 1){
        return -1;
    }

    for (let i = 0; i < a.length; i++){
        let position:number = Math.abs(a[i]) - 1; 
        if (a[position] < 0){
            return position + 1;
        }
        else {
            a[position] = -(a[position]);
        }
    }
    return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
console.log(firstDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));
