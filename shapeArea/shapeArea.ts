function shapeArea(n: number): number {
    if (n == 1){
        return 1;
    }
    else{
        return (n-1)*4 + shapeArea(n-1); 
    }

}

console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));
console.log(shapeArea(5));