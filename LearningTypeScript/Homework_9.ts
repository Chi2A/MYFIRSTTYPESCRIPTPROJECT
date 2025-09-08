
// Your tasks:
// 1. Find the position of the first '[ERROR]' entry
// 2. Find the position of the last '[ERROR]' entry
// 3. Find the position of the first '[INFO]' entry
// 4. Print all positions with descriptive messages
// 5. Calculate how many characters are between first and last error

let logEntry: string = '[INFO] Test started [ERROR] Login failed [INFO] Retrying [ERROR] Timeout';
let firstPos: number = logEntry.indexOf('ERROR');
console.log('First ERROR was found at position : ' + firstPos);
let lastPos: number = logEntry.lastIndexOf('ERROR');
console.log('Last ERROR was found at position : ' + lastPos);
let firstInfoPos: number = logEntry.indexOf('INFO');
console.log('First Info  was found at position : ' + firstInfoPos);
let charBetween: number = lastPos - firstPos;
console.log(charBetween);

/////////////////////////////////////////////////////////////////////////

// Your tasks:
// 1. Find the position of the first '-' character
// 2. Find the position of the last '-' character
// 3. Extract the category (between first and last '-')
// 4. Extract the size (after the last '-')
// 5. Print the extracted information
let productCode1: string = 'PROD-ELEC-2024-SMART-XL';
let firstDashChar: number = productCode1.indexOf('-');
console.log(firstDashChar);
let lastDashChar:number=productCode1.lastIndexOf('-');
console.log(lastDashChar);
let betweenDash = productCode1.slice(firstDashChar+1,lastDashChar);
console.log(betweenDash);
let size = productCode1.slice(lastDashChar + 1);
console.log(size);
///////////////////////////////////////////////////////////////////////////

// Your tasks:
// 1. Remove all 'test_' prefixes using replaceAll()
// 2. Replace all commas with ' | ' separators
// 3. Replace all colons with ': ' for better readability
// 4. Print the original and cleaned data
// 5. Count how many replacements were made
     let messyData: string = 'test_id:001,test_name:login,test_status:pass,test_result:success';
let organizedData: string = messyData.replaceAll('test_', ' ');
console.log(organizedData);
let comasReplace: string = organizedData.replaceAll(',', ' | ');
console.log(comasReplace);
let colonsReplace: string = comasReplace.replaceAll(':', ': ');
console.log(colonsReplace);
//////////////////////////////////////////////////////////////////////



































////////////////////////////////////////////////////////////////
let myMattress: string = 'Purple Mattress';
let myMattressString: string = 'My dream mattress is &PurpleMattress&';
console.log(myMattress.indexOf('Purple '));
console.log(myMattress.lastIndexOf(' Mattress'));
console.log(myMattress.slice(0,15));


let myCity: string = 'Welcome to [New York City]!'
// slice() => return a piece of string
// first index of [
// last index of ]
// and these 2 indexes will go into my slice method.
let beginning: number = myCity.indexOf('[')

let end: number = myCity.lastIndexOf(']')
let cityName :string =(myCity.slice(beginning +1, end));
console.log(cityName)
///////////////////////////////////
let myEmail: string = 'Contact me at <hello@example.com>'
// slice() => return a piece of string
// first index of <
// last index of >
// and these 2 indexes will go into my slice method.
let myEmailBeginning: number = myEmail.indexOf('<')
let myEmailEnd: number = myEmail.lastIndexOf('>')
let myEmailName: string = myEmail.slice(myEmailBeginning + 1, myEmailEnd)
console.log(myEmailName) /// - hello@example.com
let myEmailLength: number = myEmailName.length
console.log(myEmailLength);
////////////////////////////////////////////////////////////////////////////

// we are on car.com
// and we see messages just like the example -> 'This car is (Mercedes)'
// if the car is Mercedes then 'we are going to dealer'
// otherwise 'we keep browsing'
// websiteMessage => 'This car is Mercedes'
// extract -> Mercedes
// check the car if it is Mercedes.
//let websiteMessage: string = 'This car is Mercedes '
//let car:number = websiteMessage.slice(12);
//console.log(car);
//if (car === Mercedes) {
  //  console.log('we are going to dealer');
//} else {
  ///  console.log('we keep browsing');
//}
/////////////////////////////////////////////////////////
// vacation
// we are on expedia.com
// and we see messages just like the example -> 'This vacation is at -Jamaica-'
// if the location spot is 'Jamaica' OR 'Singapore' then 'we are going to travel'
// otherwise 'we keep browsing'
// websiteMessage => 'This vacation is at -Jamaica-'
// extract -> Jamaica OR Singapore
// check if the vacation location is either Jamaica OR Singapore
let websiteMessage1: string = 'This vacation is at -Jamaica-'
let messageBeginning: number = websiteMessage1.indexOf('-')
let messageEnd: number = websiteMessage1.lastIndexOf('-')
let message: string = websiteMessage1.slice(messageBeginning + 1, messageEnd)

if (message === 'Jamaica' || message ==='Singapore') {
    console.log('we are going to travel');
} else { 
    console.log('we keep browsing');
}
//////////////////////////////////////////////////////////////
// grocery
// we are on a grocery website
// message: 'Fresh apples at |$3.49| per lb'
// if the price is lower or equal to $5 then 'buy the item'
// otherwise 'skip it'
let websiteMessage: string = 'Fresh apples at |$3.49| per lb'
// Tasks for the student:
// 1. Find the first and last index of |
// 2. Extract the price using slice()
// 3. Remove the $ sign and convert the string to a number
// 4. Check if the price is <= 5
// 5. Print 'buy the item' if true
// 6. Print 'skip it' if false
let messageStart: number = websiteMessage.indexOf('|')
let messageEnd1: number = websiteMessage.lastIndexOf('|')
let newMessage: string = websiteMessage.slice(messageStart + 2, messageEnd1)
let finalMessage: number = parseFloat(newMessage)
if (finalMessage <= 5) {
    console.log('buy the item');
} else { 
    console.log('skip it');
}
