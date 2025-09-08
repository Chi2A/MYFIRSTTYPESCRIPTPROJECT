let myProfit: number = 2900;
if (myProfit > 2500) {
    console.log('I Will survive!');
};

// I am a cop
// speed limit is 45
// if you drive over 55 mph you will get a ticket
// if you drive between 45 and 55, you will get a warning
// if you drive less than 45 mph then you will not be pulled over

let speedLimit: number = 45;
 
if (speedLimit > 55) {
    console.log('you will get a ticket')
};
if (speedLimit < 45) {
    console.log('you will not be pulled over');
};
if ((speedLimit < 55) && (speedLimit > 45)) {
    console.log('you will get a warning');
};

// I am going to party
// and if I am older than 21 I can drink and have driver's license
//if I am older than 18 AND at the same time younger than 21,
//     I can have drivers license but I can't drink
//if I am younger than 18, I can have nothing.


//let myAge5: number = 25;

//if (myAge5 > 21) {
  //  console.log("I can drink and have driver's license");
//};
//if ((myAge5 >18) && (myAge < 21)) {
  //  console.log("I can have drivers license but I can't drink");
//};
//if (myAge5 < 18) {
  //  console.log("I can have nothing");
//};


// if you drive over 55 mph you will get a ticket
// if you drive between 45 and 55, you will get a warning
// if you drive less than 45 mph then you will not be pulled over

let speedLimit2: number = 60;

if (speedLimit2 > 55) {
    console.log('you will get a ticket');
} else if (speedLimit2 > 45) {
    console.log('you will get a warning');
} else {
    console.log('you will not be pulled over');
};

let currentTemperature = 100;
//  0-67
//67 - 80
// 80 - 101 

//if (currentTemperature > 80 ) {
  //  console.log('It is hot');
//} else if (currentTemperature < 67 ) {
   // console.log('It is cold');
//} else {
   // console.log('It is perfect');
//};


//  I am going to a dealer.
//  if my name is 'Zelensky' AND if I want at the same time "BMW"
//          I will have a %100 discount
//  if my name is 'Salih' and any car is fine
//          I will get %50 discount
//  if I want 'Tesla'
//          You can have government credit
//  Everything else
//          You will have the full price

let myName: string = 'Zelensky';
let myCar: string = 'BMW';
if(( myName === 'Zelensky') && (myCar === 'BMW')) {
    console.log('I will have a %100 discount');
} else if (myName === 'Salih' ) {
    console.log('I will get %50 discount');
} else if (myCar === 'Tesla' ) {
    console.log('  You can have government credit');
} else { 
    console.log(' You will have the full price');
}


// name and dish variables:
// If the guest is "Anna" AND she orders "Borshch"
//        → It’s free, with extra pampushky
//
// If the guest is "Vova" AND (he orders "Varenyky" OR "Holubtsi")
//        → 50% discount, because he’s a VIP regular
//
// If the guest is "Alina" AND it is "Friday"
//        → Free kompot drink
//
// If the dish is "Varenyky" OR "Deruny"
//        → Free sour cream
//
// Everything else
//        → Normal price

let customer: string = 'Dima';
let favouriteFood: string = 'Deruny';
let dayOfTheWeek: string = 'Monday';


if(( customer === 'Anna') &&  (favouriteFood=== 'Borshch')) {
    console.log('It’s free, with extra pampushky');
} else if ((customer === 'Vova')  && (favouriteFood=== 'Varenyky') || (favouriteFood==='Holubtsi'))  {
    console.log('50% discount, because hes a VIP regular');
} else if ((customer === 'Alina') && (dayOfTheWeek === 'Friday')) 
    console.log('  Free kompot drink');
else if ((customer === 'Dima') && (favouriteFood === 'Deruny') && (dayOfTheWeek === 'Monday') ) { 
    console.log('He gets free deruny and sour cream');
} else if (favouriteFood === 'Varenyky' || favouriteFood === 'Deruny') { 
    console.log('Free sour cream');
} else if ((customer === 'Tania') && (favouriteFood=== 'Baklava') ) { 
    console.log('Free coffee with a dessert');
} else { 
    console.log(' Normal price');
}
