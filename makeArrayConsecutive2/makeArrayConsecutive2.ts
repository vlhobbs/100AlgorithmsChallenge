function makeArrayConsecutive2(statues: number[]): number {
    let statCount: number = 0;
    statues.sort((a,b)=>a-b);
    for (let i = (statues[0]) + 1; i < statues[statues.length - 1]; i++){
        if (statues.indexOf(i) == -1){
            statCount++;
        }
    }
    return statCount;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([1,10]));