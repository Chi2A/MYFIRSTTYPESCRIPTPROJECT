let requiredSpeed: number = 15;  // km/h
let mySpeed: number = 12; 
console.log('Am I faster than required?' + (mySpeed > requiredSpeed));
console.log(' Am I slow? ' + (mySpeed <= requiredSpeed));
console.log(' Am I at least 10km/h ? ' + (mySpeed >= 10));

let areParentsAway: boolean = true;
let isRoomCleaned: boolean = false;
console.log(' Can I have the party? ' + ((areParentsAway) && (isRoomCleaned)));

let isBatteryLow: boolean = false;     // Battery is at 35%
let isGoingToBedSoon: boolean = true;
console.log('Should I charge my phone? ' + ((isBatteryLow) || (isGoingToBedSoon)));

let havePopcorn : boolean = true;
let isMovieGood: boolean = true;

console.log(' Will I  watch a movie ? ' + ((havePopcorn) && (isMovieGood)));

let amIHungry: boolean = true;
let amITooLazyToCook : boolean = true;

console.log(' Am I getting takeout? ' + ((amIHungry) || (amITooLazyToCook)));

let amISkilled: boolean = true;
let doIhavetime: boolean = true;
let amIAMember: boolean = false;

console.log(' Am I gonna enter a gaming tournament? ' + (amISkilled && doIhavetime || amIAMember));   

let expectedUsername: string = 'testuser123';
let actualUsername: string = 'testuser123';
if ( actualUsername === expectedUsername ) {
console.log( 'Usernames match'); 
} ;

if  ( actualUsername !== expectedUsername ) {
console.log( 'Usernames  do not match'); 
};

let expectedPassword: string = 'MySecurePassword';
let actualPassword: string = 'mysecurepassword';
if ( actualPassword === expectedPassword) {
console.log('Passwords match. You can Login'); };

 if ( actualPassword !== expectedPassword) {
    console.log('Passwords do not match. Try again');
};
 if ( actualPassword === expectedPassword) {
console.log('Passwords match. You can Login'); 
} else {
console.log('Passwords do not match. Try again') ; 
};

let expectedError: string = 'Username is required';
let actualError: string = 'Username is required';
let expectedError2: string = 'Password must be 8 characters';
let actualError2: string = 'Password must be 8 characters long';
if (actualError === expectedError  ) {
console.log( 'Great! Error Message 1  match ' ); 
} else {
console.log( 'Error Message 1 do not match ' ); 
};


 if (actualError2 !== expectedError2  ) {
console.log( 'Oops! Check your password' ); 
} else {
console.log( ' Successfully Logged In ' ); 
};

let serverOnline: boolean = true;
let databaseConnected: boolean = false;
console.log('Website works: ' + ( serverOnline && databaseConnected ));

let worksOnChrome: boolean = false;
let worksOnFirefox: boolean = true;
console.log('Test passes: ' + (worksOnChrome || worksOnFirefox));

let serverRunning: boolean = true;
let hasInternet: boolean = true;
let maintenanceMode: boolean = false;
console.log('System ready: ' + (serverRunning && hasInternet && !maintenanceMode));

let isAdmin: boolean = false;
let isManager: boolean = true;
let isLoggedIn: boolean = true;
console.log('Can I access admin panel ? : ' + ((isAdmin || isManager) && isLoggedIn));

let expectedUsername1: string = 'testuser123';
let actualUsername1: string = 'testuser123';
console.log('Usernames match : ' + (actualUsername1 === expectedUsername1));

let expectedPassword1: string = 'MySecurePassword';
let actualPassword1: string = 'mysecurepassword';

console.log('Passwords match. You can Login : ' + (actualPassword1 === expectedPassword1)); 
console.log('Passwords do not match. Try again : ' + (actualPassword1 !== expectedPassword1));

let testPassed: boolean = true;
if (testPassed ){
console.log('Test successful!');
} else {
console.log('est failed - needs debugging');
};

let isProduction: boolean = false;
if (isProduction ) {
console.log('Running in production - be careful!');
} else {
console.log('Safe to test - this is development');
};

let apiResponseCode: number = 200;
if ( apiResponseCode) {
console.log('API call successful');
} else {
console.log('API call failed');
};

let currentUsers: number = 150;
let serverCanHandle: number = 100;
if ( serverCanHandle < currentUsers ) {
console.log('Server overloaded!');
} else {
console.log('Server running smoothly');
};

let usernameCorrect: boolean = true;
let passwordCorrect: boolean = true;
let accountActive: boolean = true;
if ( usernameCorrect && passwordCorrect && accountActive   )  {
console.log('Login successful');
} else {
console.log('Login failed');
};


let bugSeverity: number = 3;
if ( bugSeverity > 4 ) {
console.log( 'Critical bug - fix immediately!' );
} else if ( bugSeverity > 2  ) {
console.log( 'High priority bug - fix today' );
} else {
console.log( 'Low priority - fix when possible' );
};

let responseTime: number = 1500;
if (responseTime > 3000 ) {
console.log('Unacceptable - over 3 seconds');
} else if ( responseTime > 1000 ) {
console.log( 'Slow - needs optimization');
} else {
console.log('Good performance');
};

let userRole: string = 'tester';
if ( userRole === 'admin' ) {
console.log('Full access granted ');
} else if (userRole === 'manager' ) {
console.log('Management access granted');
} else if (userRole === 'tester' ) {
console.log('Testing access granted');
} else {
console.log('Access denied"');
};

let environment: string = 'staging';
let databaseReady: boolean = true;
let testsAvailable: boolean = true;
if ( environment === 'production' ) {
console.log( 'Cannot run tests in production!' );
} else if ((environment === 'staging') && databaseReady && testsAvailable ) {
console.log( 'Ready to run staging tests' );
} else if ( environment === 'development' ) {
console.log( 'Development environment - safe to test' );
} else {
console.log( 'Environment not ready for testing' );
};

let browser: string = 'chrome';
let version: number = 95;
if ( browser === 'chrome'  && version >= 90 ) {
console.log( 'Fully supported' );
} else if ( browser === 'chrome' && version >= 80 && version < 90  ) {
console.log( 'Mostly supported' );
} else if ( browser === 'firefox' && version >= 85 ) {
console.log( 'Fully supported' );
} else if ( browser === 'firefox'  && version >= 75 && version < 85  ) {
console.log( 'Mostly supported' );
} else {
console.log( 'Not supported' );
};


let wirelessMicePrice: number = 25.99;
let wirelessMiceQuantity : number = 3;
let shippingCost : number = 5.99;
let totalCostOf3Mice: number = (wirelessMicePrice * wirelessMiceQuantity) + shippingCost;
console.log('The total price of 3 mice with delivery will be - $ ' + totalCostOf3Mice);

let availableStock : number = 150;
let minimumStockLevel: number = 20;

let updatedStock: number = availableStock - wirelessMiceQuantity;
console.log('Remaining Stock : ' + updatedStock);

if (updatedStock <= minimumStockLevel) {
    console.log('Attention! Stock is getting low. Order more units!');
} else { 
    console.log('Stock level is good');
};


//let availableUnits: number = 150;
//let requestedUnits:number = 25;
//console.log(' We do have enough units for the customer :  ', + availableUnits >= requestedUnits);

let availableUnits: number = 20;
let requestedUnits:number = 25;
console.log(' Warning! We do not have any units left:  ', + availableUnits >= requestedUnits);

let defeatedEnemies: number = 8;
let treasuresCollected: number = 12;
let lostLife: number = 1;
let timePlayed: number = 4.5;

let pointsPerEnemy: number = 100;
let pointsPerTreasure: number = 50;
let pointsPerLostLife: number = -200;
let bonusPoints: number = 500;

let finalScore: number = (defeatedEnemies * pointsPerEnemy) + (treasuresCollected * pointsPerTreasure) + ( lostLife * pointsPerLostLife );

// bonus  for completing level under 5 minutes

if (timePlayed < 5){
console.log( finalScore = finalScore + bonusPoints )
};


let finalScore1: number = 1700;

if(finalScore >= 1500){
console.log('Excellent Job!');
} else if (finalScore >= 1000 ){
console.log('Good Job!');
}else if (finalScore >= 500){
console.log ('Average Job!')
} else {
console.log( 'Poor Job!' );
};
let playerTime: number = 4.5;
if (playerTime < 5) {
console.log('You got the bonus!  ');
} else {
console.log(' No bonus for you ');
};


let homeworkWeight: number = 0.30;
let midtermWeight: number = 0.35;
let finalWeight: number = 0.35;
let homework: number = 85;
let midterm: number = 92;
let finalPoints: number = 88;

let weightedAverage: number = (homework * homeworkWeight) + (midterm * midtermWeight) + (finalPoints * finalWeight);

console.log('Weighted Average: ' + weightedAverage);
let passingGrade: number = 70;

if (weightedAverage >= passingGrade) {
    console.log('Congratulations! You passed.');
} else {
    console.log('Sorry, you did not pass.');
};

let myGrade: number = 90;

if (myGrade >= 90) {
    console.log("You got an 'A'");
} else if (myGrade >= 80) {
    console.log("You got a 'B'");
} else if (myGrade >= 70) {
    console.log("You got a 'C'");
} else if (myGrade >= 60) {
    console.log("You got a 'D'");
} else {
    console.log("You got an 'F'");
};