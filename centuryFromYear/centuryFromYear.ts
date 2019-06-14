function centuryFromYear(year: number): number {
    return Math.floor (year / 100) + 1;
 
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
console.log(centuryFromYear(1))
console.log(centuryFromYear(201));