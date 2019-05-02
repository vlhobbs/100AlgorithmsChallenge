/*
Leap Years are any year that can be exactly divided by 4 (such as 2012, 2016, etc)
except if it can be exactly divided by 100, then it isn't (such as 2100, 2200, etc)
except if it can be exactly divided by 400, then it is (such as 2000, 2400)
*/

//First: true if year%400 = 0
//else true if year%4 = 0 and year%100 != 0

function isLeapYear(year: number): boolean{
    if (year % 400 == 0){
        return true;
    }
    else if (year % 4 == 0 && year % 100 != 0){
        return true;
    }
    return false;
}
 
console.log(isLeapYear(2000));
console.log(isLeapYear(2001));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(1988));
