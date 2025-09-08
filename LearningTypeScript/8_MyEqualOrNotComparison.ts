// ===   Equal
// !==   NotEqual

// 20 ===20 - true


let myLuckyNumber: number = 4;
let actualNumber: number = 12;

console.log( 'Is the actual number my lucky number? = ' + (myLuckyNumber === actualNumber) ); // 

//let lastLotteryNumber: number = 30;
//let actualNumber2: number = 25;

//console.log('Did I win? = ' + (actualNumber2 === lastLotteryNumber));

let lastLotteryNumber: number = 30;
let actualNumber2: number = 25;

console.log('Did I lose? = ' + (actualNumber2 !== lastLotteryNumber));