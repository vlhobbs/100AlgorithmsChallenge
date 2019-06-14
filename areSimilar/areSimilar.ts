function areSimilar(a: number[], b: number[]): boolean {
    if (a.length != b.length){
        return false;
    }
    let aOrig:number[] = copy(a);
    let bOrig:number[] = copy(b);
    let aSort:number[] = a.sort((a,b)=>a-b);
    let bSort:number[] = b.sort((a,b)=>a-b);
    
    for (let i = 0; i < aSort.length; i++){
        if (aSort[i] != bSort[i]){
            return false;
        } 
    }
    let differences:number = 0;
    for (let j = 0; j < a.length; j++){
        if (aOrig[j] != bOrig[j]){
            differences++;
        }
        console.log(differences);
        if (differences > 2){
            return false;
        }
    }
    return true;
}

//this is included so that I could make a deep copy

function copy(o){
    let output, v, key;
    output = Array.isArray(o) ? [] : {};
    for (key in o) {
        v = o[key];
        output [key] = (typeof v === "object") ? copy(v) : v;
    }
    return output;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1,2,3,4,5], [2,1,3,5,4]));
console.log(areSimilar([1,2,3,4,5], [1,4,3,2,5]))

/*
Attempted to solve before watching solution

Case 1: Objects contain different numbers of different elements
(i.e. test case 3)
We can do a sort, test to see if the two are unequal, 
and then we would have a false if they were, because no amount of
swapping will make them equal if they cannot be sorted to
the same array. 

Again: this is the recommended way to sort in numerical order
arr.sort((a,b)=>a-b); 

I had to actually do some legwork on making a non-shallow copy
of the actual object... that was rough
Credit is in the README of this folder

Case 2: Objects would be equal but require more than one swap to fix.
(i.e. test case 4)
I could do an else case... If there are not more than two digits
of difference between a and aSort then it fails
Case 2 - actually Case 3 if you count unequal arrays, which I do
because I'm a mess about data verification - was easy once I figured
out that my sort algorithm was creating a shallow copy and how to fix it.

Instructor solution:

function areSimilar(a: number[], b: number[]): boolean{
    const c: number[] = []; //he didn't explain why this is const
    let d: number[] = [];

    if (a.toString() === b.toString()){
        return true;
        //I can see why this helps. They can be compared directly
    }

    for (let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) {
            c.push(a[i]);
            d.push(b[i]);
        }
    }
    d = d.reverse();

    if (c.length === 2 && (c.toString() === d.toString())){
        return true;
    }
    return false;
}

Part 1: Return if the two are exactly equal
Part 2: Compare original arrays, if they differ push them to
        two separate arrays
Part 3: Reverse one of the two arrays (the one that b goes to)
Part 4: Make sure c.length is 2 (if it were 1 or more than two
        then there is no way that they could be equal)
Part 5: See if C and D reversed are equal (are they an even swap?)

        
*/