/*
***Problem Statement***
Given a sorted array of integers a, find an integer x from a such that the value of

    abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.
(Mathematically x is the median value - the smaller of the two median
values if the array is of even length.)

***Note***
I was running into issues with the arrays not being sorted (namely that they needed to
be sorted so that the median values would be correct.) So I added a sort statement
to the solution and retested all of the possible answers.
*/

function absoluteValuesSumMinimization(a: number[]): number {
    let sortedArray = a.sort((a,b)=>a-b);
    const isEven = sortedArray.length % 2 === 0;  
    return isEven ? sortedArray[sortedArray.length/2 -1] : sortedArray[Math.floor(sortedArray.length / 2)];
}


//Test cases from README.md
 console.log(absoluteValuesSumMinimization([2, 4, 7]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));

 //testing answers for the four-item array.

 console.log(Math.abs(2-2) + Math.abs(4-2) + Math.abs(7-2) + Math.abs(6-2));
 console.log(Math.abs(2-4) + Math.abs(4-4) + Math.abs(7-4) + Math.abs(6-4));
 console.log(Math.abs(2-6) + Math.abs(4-6) + Math.abs(7-6) + Math.abs(6-6));
 console.log(Math.abs(2-7) + Math.abs(4-7) + Math.abs(7-7) + Math.abs(6-7));

 //Conclusion: Both 4 and 6 give the minimum value; 4 is the lower value and is rightly returned

 console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
 
 //testing the answers for the five-item array

 console.log(Math.abs(2-2) + Math.abs(4-2) + Math.abs(7-2) + Math.abs(6-2) + Math.abs(6-2));
 console.log(Math.abs(2-4) + Math.abs(4-4) + Math.abs(7-4) + Math.abs(6-4) + Math.abs(6-4));
 console.log(Math.abs(2-6) + Math.abs(4-6) + Math.abs(7-6) + Math.abs(6-6) + Math.abs(6-6));
 console.log(Math.abs(2-7) + Math.abs(4-7) + Math.abs(7-7) + Math.abs(6-7) + Math.abs(6-7));

// By the wording of the actual question, 6 is the answer.

 console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
 
 //testing the answers for the six-item array

 console.log(Math.abs(2-2) + Math.abs(4-2) + Math.abs(7-2) + Math.abs(6-2) + Math.abs(6-2) + Math.abs(8-2));
 console.log(Math.abs(2-4) + Math.abs(4-4) + Math.abs(7-4) + Math.abs(6-4) + Math.abs(6-4) + Math.abs(8-4));
 console.log(Math.abs(2-6) + Math.abs(4-6) + Math.abs(7-6) + Math.abs(6-6) + Math.abs(6-6) + Math.abs(8-6));
 console.log(Math.abs(2-7) + Math.abs(4-7) + Math.abs(7-7) + Math.abs(6-7) + Math.abs(6-7) + Math.abs(8-7));
 console.log(Math.abs(2-8) + Math.abs(4-8) + Math.abs(7-8) + Math.abs(6-8) + Math.abs(6-8) + Math.abs(8-8));
 
 //As above: By the question asked in the readme, 6 is the answer.
