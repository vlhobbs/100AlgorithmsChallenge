function almostIncreasingSequence(sequence: number[]): boolean {
    let outOfSync = 0;
    for (let index = 0; index < sequence.length; index++) {
        console.log(sequence[index]);
        console.log(sequence[index-1]);
        if (sequence[index] <= sequence[index - 1]) {
            outOfSync++;
        if (sequence[index] <= sequence[index - 2] && sequence[index+ 1 ] <= sequence[index - 1]){
            return false;
            }
        }
    }
return (outOfSync <= 1);        
}

 console.log(almostIncreasingSequence([1, 3, 2, 1])) 
 console.log(almostIncreasingSequence([1, 3, 2])) 
 console.log(almostIncreasingSequence([0, 1, 2, 3, 4]))
 console.log(almostIncreasingSequence([0, 1, 5, 3, 4]))
 console.log(almostIncreasingSequence([0, 1, 5, 3, 4, 2]))
/* 
I can't think of a simpler way to do this
Count variable, find numbers that are out of sync
why is this not giving me out-of-bounds on lower indices?

*/