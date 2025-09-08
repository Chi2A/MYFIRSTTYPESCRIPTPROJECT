// if the username 0 is ending with 123 then replace it without 123 version
// 'alice123' -> 'alice'
// if the username is starting with lowercase 'b' then replace it with uppercase
// "bob456" -> "Bob456"
let usernames: string[] = ["alice123", "bob456", "charlie789", "diana012", "eve345",];

if (usernames[0].endsWith("123")) {
    usernames.splice(0, 1, "alice");
} else { 
    console.log(usernames)
}


if (usernames[1].startsWith("b")) {
  usernames.splice(1, 1, "Bob456");
} else {
  console.log(usernames);
}

if (usernames[2].startsWith("c") && usernames[2].endsWith("789")) 
  usernames.splice(2, 1, "Charlie");
console.log(usernames)

if (usernames.includes('ronaldo'))
  usernames.splice(3, 1);
console.log(usernames);
///////////////////////////////////////////////////////////////////
// Create an array of test case names

// If test case at index 0 contains underscore then replace underscore with space
// "login_test" -> "login test"
// If test case at index 1 is all uppercase then convert to title case
// "SEARCH_functionality" -> "Search_functionality"
// If test case at index 2 contains hyphen then replace with underscore
// "checkout-process" -> "checkout_process"
// Print the formatted test cases array
let testCases1: string[] = ["login_test", "SEARCH_functionality", "checkout-process", "Payment_Gateway",];
if (testCases1[0].includes('_')) {
    testCases1.splice(0, 1, "login test");
}
if (testCases1[1].includes('SEARCH_functionality')) {
    testCases1.splice(1, 1, 'Search_functionality');
}
if (testCases1[2].includes('-')) {
    testCases1.splice(2, 1, 'checkout_process');
}
console.log('My test cases : ' + testCases1);////////////login test,Search_functionality,checkout_process,Payment_Gateway
/////////////////////////////////////////////////////////////////////////////////////////////////
// Original book collection: ['Mystery Novel', 'Old Fantasy', 'Romance']
// After replacing second book: ['Mystery Novel', 'New Fantasy', 'Romance']
// After replacing third book: ['Mystery Novel', 'New Fantasy', 'Adventure Story']
// After replacing first book: ['Science Fiction', 'New Fantasy', 'Adventure Story']
// Final collection: ['Reading Time']
let originalBookCollection: string[] = ['Mystery Novel', 'Old Fantasy', 'Romance'];
originalBookCollection.splice(1, 1, 'New Fantasy');
console.log(originalBookCollection);
originalBookCollection.splice(2, 1, 'Adventure Story');
console.log(originalBookCollection);
originalBookCollection.splice(0, 1, 'Science Fiction');
console.log('My final collection : ' + originalBookCollection);///////////My final collection : Science Fiction,New Fantasy,Adventure Story
////////////////////////////////////////////////////////////////////////////////
// Original team: ['Anna', 'Ben', 'Christina', 'Dan', 'Elena']
// Anna got promoted and left the team
// Current team roster: ['Ben', 'Christina', 'Dan', 'Elena']
// Replaced Ben with New Member
// Current team roster: ['New Member', 'Christina', 'Dan', 'Elena']
// Added Senior title to Christina
// Current team roster: ['New Member', 'Senior Christina', 'Dan', 'Elena']
// Added Senior title to Elena
// Current team roster: ['New Member', 'Senior Christina', 'Dan', 'Senior Elena']
// Final team size: 4
let originalTeam: string[] = ["Anna", "Ben", "Christina", "Dan", "Elena"];
originalTeam.splice(0, 1);
console.log(originalTeam);
originalTeam.splice(0, 1, 'New member');
console.log(originalTeam);
originalTeam.splice(1, 1, 'Senior Christina');
console.log(originalTeam);
originalTeam.splice(3, 1, "Senior Elena");
console.log('Final tean size - ' + originalTeam.length);////////Final tean size - 4
/////////////////////////////////////////////////////////////////////////////////////////
// Create an array: [" 500 USD", " 20 ", "true", "junior", "150USD"]
// Remove spaces from the first element, extract the number, subtract 100 ( - )
// Trim the second element, convert to number, divide by 2
// Convert the third element to boolean and negate it (true → false)
// Replace the fourth element with "Senior"
// Extract number from the last element, add 50
// Print each result and the final array
let myElements: (string | number | boolean)[] = [" 500 USD", " 20 ", "true", "junior", "150USD",];
// myElements[0] = myElements[0].toString().trim();
// myElements [0]= myElements[0].slice(0,3)
// console.log(myElements);
// myElements[0] = parseFloat('500USD')
// myElements[0] = myElements[0] - 100;
// console.log(myElements);//400
let trimmedElement = myElements[1].toString().trim();
let convertedElem = parseFloat(trimmedElement) / 2;
console.log(convertedElem);//10
///////////////////////////////////////////////////////////////////////////////////////
// Start with: ["100USD", "temporary", "false", "80"]
// Remove "temporary" from the array
// Insert "permanent" at index 1
// Convert "100USD" to number, subtract 40
// Replace "false" with "true"
// Add "bonus:20" at the end using splice
// Extract the number from "bonus:20" and multiply by 3
let myArray: (string | number | boolean)[] = ["100USD", "temporary", "false", "80",];
myArray.splice(1, 1);
myArray.splice(1, 0, "permanent");
console.log(myArray);
let myConvertedArray = parseFloat(myArray[0].toString()) - 40;
console.log(myConvertedArray);//60
myArray.splice(2, 1, "true");
console.log(myArray);//[ '100USD', 'permanent', 'true', '80' ]
myArray.splice(4, 0, "bonus:20");
console.log(myArray);
let extractedNum =  parseFloat(myArray[4].toString().slice(6, 9)) *3 ;
console.log(extractedNum);//60
/////////////////////////////////////////////////////////////////////
// Original mixed data: ['200', '15', 'false', 'intern', '75']
// First element as number / 4: 50
// Second element as number * 3: 45
// Third element as boolean: false
// Is it false? true
// After replacing fourth element: ['200', '15', 'false', 'Engineer', '75']
// Last element as number + 25: 100
// Final mixed data array: ['200', '15', 'false', 'Engineer', '75']
let originalMixedData: (string | number | boolean)[] = ["200","15","false","intern","75",];
let firstElem = parseFloat(originalMixedData[0].toString()) / 4;
console.log(firstElem);//50
let secondElem = parseFloat(originalMixedData[1].toString()) * 3;
console.log(secondElem);//45
let thirdElem = originalMixedData[2].toString().toLowerCase() === "true";
console.log(thirdElem);// false
originalMixedData.splice(3, 1, "Engineer");
console.log(originalMixedData);///[ '200', '15', 'false', 'Engineer', '75' ]
let convertedNum =parseFloat(originalMixedData[4].toString()) + 25 ;
console.log(convertedNum);//100
console.log("Final mixed data array : " + originalMixedData);//Final mixed data array : 200,15,false,Engineer,75
/////////////////////////////////////////////////////////////////////////////////////////
// Original team data: ['25', 'Sarah', 'true', 'Mike', '18']
// Age 25: Adult team member
// Sarah: Senior Sarah
// Overtime available: true
// Mike: Replaced with New Hire
// Age 18: Junior team member
// Final team: ['25', 'Senior Sarah', 'true', 'New Hire', '18']
// Team members available for overtime: 1
let teamData: (string | number | boolean)[] = ["25", "Sarah", "true", "Mike", "18",];
let age2 = parseFloat(teamData[0].toString());
console.log(age2);//25
if (age2 > 21) {
    console.log('Age - ' + age2 + ' : Adult team member');
} else { 
    console.log('Age - ' + age2 + ' : Children team member');
}//Age - 25 : Adult team member

let name2 = teamData[1].toString();
if (name2.length > 4) {
    teamData.splice(1, 1, 'Senior ' + name2)
    console.log("New name is " + teamData[1]);
}//New name is Senior Sarah

let overtime = teamData[2].toString().toLowerCase(); 
let overtimeAvail = overtime === "true";

if (overtimeAvail) {
  console.log("Is Overtime available? - true");
} else {
  console.log("Is Overtime available? - false");
}
let newName = teamData[3].toString();
if (newName.length ===4 ) { 
    teamData.splice(3, 1, 'New Hire');  
}
console.log(teamData);//[ '25', 'Senior Sarah', 'true', 'New Hire', '18' ]
//////////////////////////////////////////////////////////////

