console.log(12 + 12 + '12'); // 2412
console.log('12' + 12 + 12); // 121212
console.log(12 + '12' + 12 + 12); // 12121212
console.log(12 + 12 + '12' + 12) // 241212

// typescript as soon as it sees a string , everything else is a CONCATINATION (злиття )

let totalNumberOfTestCase: number = 50;
let totalNumberOfPassesTestCases: number = 47;
console.log('                                           ');
console.log(totalNumberOfTestCase - totalNumberOfPassesTestCases) //3 

//First way of printing the failed test cases 

let totalNumberOfFailedTestCases: number = totalNumberOfTestCase - totalNumberOfPassesTestCases;
console.log('The number of failes test cases is ' + totalNumberOfFailedTestCases);



// monthly paycheck = 5567.40
// monthly expenses = 4012.20
// free money = 1555.20

let myMonthlyBudget: number = 5567.40;
let myExpenses : number = 4012.20;
let myMonthlyPocketMoney: number = myMonthlyBudget - myExpenses;

console.log('This month I was lucky my expenses were not so high, so I can spent $ ' + myMonthlyPocketMoney + ' for whatever I need ');


let fullTankGas: number = 13.7;
let leftTankGas: number = 4.2;
let usedTankGas: number = fullTankGas - leftTankGas;


console.log('Used gas = ' + usedTankGas); // 1st way
console.log('used gas = ' + (fullTankGas - leftTankGas));  // 2nd way 
