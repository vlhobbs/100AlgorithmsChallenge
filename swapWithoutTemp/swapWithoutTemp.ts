function swapWithoutTemp(a: number, b: number): number[] {
    console.log("a = " + a + " and b = " + b);
    //a = sum of a and b
    a = a + b; 
    //b = subtract current b from sum a
    b = a - b; 
    //b now equals former value of a
    //a = subtract former value of a from sum
    a = a - b; 
    //a now equals former value of b
    
    console.log("a = " + a + " and b = " + b);
    return [a,b];
}

console.log (swapWithoutTemp(4,5));