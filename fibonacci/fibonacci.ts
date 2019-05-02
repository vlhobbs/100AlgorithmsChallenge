function fibonacci(a: number): number{
    if (a < 2){
        return a;
    }
    else {
        return (fibonacci(a - 1) + fibonacci(a - 2));
    }
}

console.log(fibonacci(9));

//This is the simple recursive solution
//It can be made faster at the cost of
//storing previous values on a stack
//so they don't have to be rerun every time

//time complexity is 2^n

function iter_fib(n: number){
    if (n == 0 || n == 1){
        return n;
    }
    else {
        let zeroth:number = 0;
        let first:number = 1;
        let result:number = 0;

        for (let i=2; i<=n; i++){
            result = zeroth + first;
            zeroth = first; 
            first = result;
        }
        return result;
    }
}

console.log(iter_fib(9))