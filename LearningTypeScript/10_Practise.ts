let myLuckyNumber: number = 4;
let actualNumber: number = 12;

console.log('Is the actual number my lucky number? = ' + (myLuckyNumber === actualNumber));


// expectedString -> 'Trop 2 status = true'
// actualString -> 'Trop 2 status = true'

let expectedSTring: string = 'Trop2 status';
let actualString: string = 'Trop2 status';
console.log(expectedSTring === actualString); //true
console.log(expectedSTring !== actualString); // false 

let isrestrauntOpen : boolean = true;
let amIhungry: boolean = true;

console.log(isrestrauntOpen && amIhungry);


let areHighlightsOff: boolean = true;
let doISpeed: boolean = true;

console.log('Will I get in a trouble ? - ' + areHighlightsOff || doISpeed);

//convert am I running from false to true
// convert is lights are on from true to false

let amIRunning: boolean = false;
console.log(!amIRunning); // true

let areLightsOff: boolean = true;
console.log(!areLightsOff);  // false

let expectedError: string = 'Username is required';
let actualError: string = 'Username is required';

let expectedError: string = 'Username is required';
let actualError: string = 'Username is required';
console.log( 'Great! Error Message 1  match ' + (actualError === expectedError ) ); 
console.log('Error Message 1 do not match ' + (actualError !== expectedError));

let expectedError2: string = 'Password must be 8 characters';
let actualError2: string = 'Password must be 8 characters long';
console.log( 'Oops! Check your password : ' + (actualError2 !== expectedError2) ); 
console.log( ' Successfully Logged In : ' + (actualError2 === expectedError2) ); 