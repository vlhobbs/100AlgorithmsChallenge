function addTwoDigits(n: any): number {

    let numToStr: string = n.toString();
    let digit1: string = numToStr.slice(0,1);
    let digit2: string = numToStr.slice(1);
    let sum: number = parseInt(digit1) + parseInt(digit2);
    return sum;
}

console.log(addTwoDigits(29));

function addTwoDigitsOneLine(n: any): number {
    return parseInt(n.toString().slice(0,1)) + parseInt(n.toString().slice(1));
}

console.log(addTwoDigitsOneLine(11))
console.log(addTwoDigitsOneLine(96))

//which of these responses would be considered cleaner?
//Because I find the top one much easier to read, less
//cluttered, and much easier to understand by a new guy,
//but fewer lines seem to be better in general.