let myLowerCaseString: string = ('Its a great evening to study');
let myFreeTime: string = myLowerCaseString.toUpperCase();
console.log(myFreeTime);
//////////////////////////////////////

//Because spaces are invisible, when you console.log() the string, 
// you can’t “see” the difference unless you add something around it.
let expectedString: string = '  We are going on a hike     ';
let cleanedString: string = expectedString.trim();
console.log(cleanedString);
/////////////////////////////////////

let feedback: string = '     Great pics!      ';
let cleanedFeedback: string = feedback.trim();
console.log(cleanedFeedback);
//////////////////////////////////////////////////
// if my sentebce includes words 
let longSentence: string = 'Hello I am learning string methods today';
let myWord: string = 'earning'
console.log(longSentence.includes(myWord))
////////////////////////////////////////////////

let myVacationDestination: string = 'Miami beach';
let myWord1: string = 'beach';
console.log(myVacationDestination.includes(myWord1));
/////////////////////////////////////////////////////
let myName2: string = 'Alina';

console.log(myName2.startsWith('Alina'));

let food: string = 'I really love apples';
let dessert: string = ' In my favourite restraunt I always have apple pie'
console.log(dessert.startsWith('In'));
//////////////////////
let food1: string = 'I really love apples';
let dessert2: string = ' In my favourite restraunt I always have apple pie'
console.log(dessert.endsWith('apple pie')) // true
///////////////////////////////////
// As an engineer at Phillips
// we are creating a search engine
// if the customer will search 'TV'
// and the product will include the 'TV' inside the name.
// then we should print 'We have a match'
// otherwise 'There was no match'
let tvName = 'Phillips TV'
if (tvName.includes('TV')) {

    console.log('We have a match');
    
} else { 
    console.log('There was no match');
}
////////////////////////////////////////////
// At the airport system
// we are checking flights
// if the flight number starts with "UA"
// that then "This is a United Airlines flight "
// otherwise it's another airline "This is a different airline"
let flightNumber: string = "UA345";
let airlineCode: string = "UA";
if (flightNumber.startsWith(airlineCode)) {
    console.log('This is a United Airlines flight');
} else { 
    console.log('This is a different airline');
}
//////////////////////////////////////////////
// we are creating an automation framework
// and we need to upload different documents to our web application
// if my document ends with '.pdf' then 'this is a PDF file'
// else if my document ends with '.docx' or '.doc' then 'this is a Word document'
// else if my document ends with '.xlsx' or '.xls' then 'this is an Excel file'
// else if my document ends with '.txt' then 'this is a Text file'
// else if my document ends with '.csv' then 'this is a CSV file'
// else if my document ends with '.json' then 'this is a JSON file'
// otherwise 'unsupported file type'
let documentType: string = '.pdf'
if (documentType.endsWith('.pdf')) {
    console.log('this is a PDF file');
} else if (documentType.endsWith('.docx' || '.doc')) {
    console.log('this is a Word document');
} else if (documentType.endsWith('.xlsx' || '.xls')){
    console.log('this is an Excel file');
} else if (documentType.endsWith('.txt')) {
    console.log('this is a Text file');
} else if (documentType.endsWith('.csv')) {
    console.log('this is a CSV file');
} else if (documentType.endsWith('.json')) {
    console.log('this is a JSON file');
}else { 
     console.log('');
}
////////////////////////////////////////////////
let password1: string = 'Apple45';
if (password1.length >= 8) {
    console.log('Strong password');
} else { 
    console.log('Weak password');
}
/////////////////////////////////////////////////
// slice -> extremely useful for slicing a string
// when you have a big string you can take a smaller part of it with this method.
let myLastAndFirstName = 'Maksymiuk Alina'
let myLastName = myLastAndFirstName.slice(0, 9) // first number is INCLUDED, last number is NOT INCLUDED
console.log(myLastAndFirstName);
console.log(myLastAndFirstName.charAt(15));
//////////////////////////////////////////////////////////
let myLastAndFirstName1 = 'Maksymiuk Alina'
console.log(myLastAndFirstName1.charAt(15));
/////////////////////////////////////////////////////////
let myString: string = 'Hello World Hello'
//
console.log('--------------------------------')
console.log(myString.indexOf('Hello')) // returning the word is starting at as INDEX
console.log(myString.lastIndexOf('Hello'))  // 12 +4, 16 +1, idk, I am not sure
console.log(myString.replace('Hello', 'Bye')) // 'Bye World Hello' +5, Same
console.log(myString.replaceAll('Hello', 'Bye'))
/////////////////////////////////////////////////////
let myString1: string = 'Customer have entered too many wrong passwords.';
console.log(myString1.indexOf('Customer'));
console.log(myString1.lastIndexOf('passwords'))
console.log(myString1.replace('Customer', 'A new customer'));
 
let myString2: string = 'Dear Customer! Customer support is here to help you'
console.log(myString2.replaceAll('Customer', 'Guest'))
/////////////////////////////////////////////////////////////////////////////////
