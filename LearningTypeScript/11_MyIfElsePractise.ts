// write a code which print out 'your expression was true' when the expression is true
// and it should print out 'your expression was false' when the exression was false

let amIHungry: boolean = false;
let amIThirsty: boolean = false; 
if (amIHungry) {
    console.log('I am gonna go on a break! ')
   
} else {
    console.log('Gonna keep studying'); 
    // Gonna keep studying
}

//let isRaining: boolean = true;

//if (isRaining) {
  //console.log("Take an umbrella!");
//} else {
//console.log("No umbrella needed.");
//}
//If isRaining is true → it shows "Take an umbrella!"
//If isRaining is false → it shows "No umbrella needed."


//let isSunny: boolean = true;
//let isWarm: boolean = false;

//if (isSunny || isWarm) {
  //console.log("Go outside and play!");
//} else {
  //console.log("Better stay inside.");
//}
//If either isSunny is true OR isWarm is true → it says "Go outside and play!"
//If both are false → it says "Better stay inside."

let didIWakeUpEarly: boolean = true;
let amIpresentAtTheClass: boolean = true;
let didIMissTheClass: boolean = false;

if (didIWakeUpEarly && amIpresentAtTheClass) {
    console.log('You did a good job!');
} else {
    console.log('Learn the material by youself ');
} 
// You did a good job!

let doIBuyATicket: boolean = true;
let myFriendGiveMeATicket: boolean = true;
let areTicketsSoldOut: boolean = false;

//  if wendy's is open -> create a variable a single variable
// true => we are eating dave's double.
// false => we are going to eat nothing.

let isWendysOpen: boolean = true;
let amIHungry1: boolean = true;

if (isWendysOpen ||amIHungry1 ) {
    console.log("we are eating dave's double");
} else {
    console.log('we are going to eat nothing')
};

//let isDealerOpen: boolean = true;
//let haveMoney: boolean = true;

//if (isDealerOpen && noMoney) {
  //  console.log('We are buying the car!');
//} else {
  //  console.log('We are not buying the car');
//};

let amITired: boolean = true;

if (amITired) {
    console.log('I am skipping the gym');
} else {
    console.log('I am going to the gym');
};

let isDealerOpen: boolean = true;
let haveMoney: boolean = false;

if (isDealerOpen && haveMoney) {
    console.log('We are buying the car!');
} else {
    console.log('We are not buying the car');
};

let hasDealerBmw: boolean = true;
let hasDealerPorsche: boolean = true;

// true -> 'I have a cool car now!'
// false -> 'I am still riding honda civic'
if (hasDealerBmw || hasDealerPorsche) {
    console.log('I have a cool car now!');
} else {
    console.log('I am still riding honda civic');
};

// I like burgers it's 2 am
// if the dennies is open OR
// Wendys is open
// I am going to eat burger
// I am eating the yogurt from the fridge

let isWendysOpen1: boolean = false;
let isDenniesOpen: boolean = false;
let isIt2Am: boolean = false;

if (isWendysOpen1 ||isDenniesOpen && isIt2Am) {
    console.log('I am going to eat burger');
} else {
    console.log('I am eating the yogurt from the fridge');
};

let amI21: boolean = false;
let haveAnId: boolean = false;

if (amI21 && haveAnId) {
    console.log('I will have a drink');
} else {
    console.log('I will drink milk in the corner');
};

// if I will solve this practice OR do the homework And at the same time
// I will be present at class
// then I am taking a lunch break
// otherwise
// I am coding at the lunch break

let isPractiseSolved: boolean = false;
let isHomeworkDone: boolean = false;
let amIPresentAtClass: boolean = false;

if ((isPractiseSolved || isHomeworkDone) && amIPresentAtClass ) {
    console.log('I am taking a lunch break');
} else {
    console.log('I am coding at the lunch break');
};

//if I am older or equal to 21
// 'I will drink a beer'
// otherwise
// 'I am drinking milk'
// number variable age
// myAge compare to 21 (<, >, <=, >=)

let myAge: number =  21;

if (myAge >= 21) {
    console.log('I will drink a beer');
} else {
    console.log('I am drinking milk');
};

let myAge1: number = 21;
let hasId: boolean = true;
if ((myAge1 >= 21) || hasId) {
    console.log('I will drink a beer');
} else {
    console.log('I am drinking milk');
};
