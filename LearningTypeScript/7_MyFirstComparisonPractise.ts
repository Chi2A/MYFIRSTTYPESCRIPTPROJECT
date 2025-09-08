// <, >, ===, !== , <= , >= 

// <=     Less than or equal         4 <= 4 
// >=     Greater than or equal      9 >= 10
// !=     Not equal (value only)     5 != '6'
// !==    Not equal (value or type)  5 !== '5'

//compare my age with my brothers age

console.log(99 > 17); // true
console.log(43 > 57); //false

/////////////////////////////////////////////////////////
let myZeroToSixty: number = 12;
let acceptableFastSeconds: number = 4;

console.log( acceptableFastSeconds > myZeroToSixty ); // true
/////////////////////////////////////////////////////////////

let restaurantName : string = 'The Cozy Corner'; 
let mainDishPrice : number = 18.50;
let drinkPrice : number = 4.25;
let dessertPrice : number = 7.80;

let mainDishQuantity : number = 1;
let drinkQuantity : number = 2;
let dessertQuantity : number = 1;
let totalDinnerPrice : number = (mainDishPrice * mainDishQuantity ) + (drinkPrice * drinkQuantity) + (dessertPrice * dessertQuantity); 

console.log('At restaurant " ' + restaurantName + ' " dinner price is $ ' + totalDinnerPrice);

let dailyStepGoal: number = 10000;


let mondaySteps: number = 8500;
let tuesdaySteps: number = 11200;
let wednesdaySteps: number = 9800;

let totalSteps: number = mondaySteps + tuesdaySteps + wednesdaySteps;

let mondayMetGoal: boolean = mondaySteps >= dailyStepGoal;
let tuesdayMetGoal: boolean = tuesdaySteps >= dailyStepGoal;
let wednesdayMetGoal: boolean = wednesdaySteps >= dailyStepGoal;

console.log("Weekly Fitness Progress (Steps):");
console.log("Monday: " + mondaySteps + " steps (Did you meet your goal ? " + mondayMetGoal + ")");
console.log("Tuesday: " + tuesdaySteps + " steps (Did you meet your goal ? " + tuesdayMetGoal + ")");
console.log("Wednesday: " + wednesdaySteps + " steps (Did you meet your goal ? " + wednesdayMetGoal + ")");
console.log("Total steps : " + totalSteps);


let dailyStepGoal1: number = 10000;
let dailyWaterGoal1 : number = 8;
let weeklyWorkoutGoal1 : number = 5;
let todaysSteps : number = 12500;
let todaysWater : number = 6;
let todaysWorkout : number = 1;

let metStepGoal : boolean = todaysSteps >= dailyStepGoal1;
let metWaterGoal : boolean = todaysWater >=dailyWaterGoal1;
let metWorkout : boolean = todaysWorkout >= 1;

console.log('Daily Fitness Goal: ');
console.log('Did you meet your steps goal ? ' + metStepGoal + ' ( ' + todaysSteps + 'steps) ' );
console.log( 'Did you meet a water goal ? ' + metWaterGoal + ' ( ' + todaysWater + ' glasses)' );
console.log('Did you meet your workout goal ? ' + metWorkout + ' ('+ todaysWorkout + ' session)' );


console.log(111111111111111111111111111111);
let myFriendName : string = 'Eva';
let friendshipDuration : string = 'for ages';
let dreamCity : string = 'Chicago';
let yearsOfHoping : number = 2 ;
let gotVisaApproved : boolean = false;
let visaAttempts : number = 5;
let disappointedChances : string ='never gave up';
let desireToWin : string = 'one last time';
let wasSheBrave : boolean = true;
let finalResult : string = 'got the visa!';
let moralOfTheStory : string = 'never stop dreaming!';
let age1 : number = 20;
let age2 : number = 60;
let theEnd : string = 'THE END';


console.log('My story!');

console.log( 'My friends name is ' + myFriendName + '. We have been friends ' + friendshipDuration + '. She has been dreaming for the last ' + yearsOfHoping + ' years about her dream city - ' + dreamCity + '. Eva was trying to get a visa. Do you think she did? ' + gotVisaApproved + '. She has been trying for at least ' + visaAttempts + ' times. But Eva ' + disappointedChances + '. She decided to try ' + desireToWin + '. Was she brave? ' + wasSheBrave + '. And finally after years of trying, she ' + finalResult + '! She was so happy. Eva told me: "' + moralOfTheStory + '" No matter if you are ' + age1 + ' or ' + age2 + ' years old. ' + theEnd );


let myMonthlyIncome: number = 2345.2;
let monthsInAYear: number = 12;
console.log('My yearly income is $ ' + (myMonthlyIncome * monthsInAYear));


let myDailyIncome1: number = 123.2;
let daysInAMonth: number  = 30;
let monthsInAYear1: number = 12;
let myMonthlyIncome1: number = myDailyIncome1 * daysInAMonth;
let myYearlyIncome: number = myMonthlyIncome * monthsInAYear1;

console.log('My monthly income is $' + myMonthlyIncome1 + ', and my yearly income is $'
    + myYearlyIncome
);

let acceptablePullUp: number = 25;
let actualPullUp: number = 5;
let isPassed: boolean = acceptablePullUp <= actualPullUp;
console.log('I passed the army test : ' + isPassed);

console.log((20 > 12));
console.log((20 > 20));
console.log((20 >= 20));


let acceptableHeat: number = 80 //80F
let midDayHeat: number = 84 // 84F
let morningHeat: number = 70 // 70F
let nightHeat: number = 60 // 60F
//
console.log('is outside cool enough? = ' + (acceptableHeat > nightHeat)) // true
console.log('is outside cool enough? = ' + (acceptableHeat > morningHeat)) // true


