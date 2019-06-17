/*
function arrayPreviousLess(items: number[]): number[] {

    let arrResult:number[] = [];
    arrResult.push(-1);

    for (let i:number = 1; i < items.length; i++){
        let smallest:number = items[i];
        for (let j:number = i-1; j >= 0; j--){
            if (items[i] > items[j]){
                smallest = items[j]; 
                break;
            }
        }
        if (smallest === items[i]){
            smallest = -1;
        }
        arrResult.push(smallest);
    }
return arrResult;
}
*/

function arrayPreviousLess(items: number[]): number[] {

    let arrResult:number[] = [];
    arrResult.push(-1);

    for (let i:number = 1; i < items.length; i++){
        let smallest:number = items[i];
        let j:number = i-1;
        while (j >= 0 && smallest == items[i]){
            if (items[i] > items[j]){
                smallest = items[j];
            }
            j--;
        }
        if (smallest === items[i]){
            smallest = -1;
        }
        arrResult.push(smallest);
    }
return arrResult;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));

console.log(arrayPreviousLess([0, 1, 2, 3, 4, 5]));