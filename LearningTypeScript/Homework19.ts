// Task: Loop through developers
// If the developer is in seniorDevelopers, save them to experiencedTeam array
// Count how many senior developers we have
// After the loop, print: 'We have X experienced developers leading our projects!'

let developers:string [] = ["Sarah", "Mike", "Jessica", "Tom", "Lisa", "John"];
let seniorDevelopers = ["Sarah", "Jessica", "John"];
let experiencedTeam: string[] = [];
let seniorCount = 0;
while (developers.length > 0) {
    let dev:string  = developers.pop()!;
    if (seniorDevelopers.includes(dev)) {
        experiencedTeam.push(dev)
        seniorCount++
    }
}
console.log("Our experienced Team:", experiencedTeam);// [ 'John', 'Jessica', 'Sarah' ]
console.log('We have ' + seniorCount + ' experienced developers leading our projects!');//3
//////////////////////////////////////////////////////////////////////////////////////////////
// Task: Loop through tickets
// If the ticket is in criticalBugs, remove it from tickets
// Save the removed tickets to urgentList array
let tickets = ["Login Issue","Button Color","Data Loss","Slow Loading","Crash Error",];
let criticalBug = ["Data Loss", "Crash Error"];
let urgentList: string[] = []
while (tickets.length>0) { 
    let myTickets = tickets.pop()!;
    if (criticalBug.includes(myTickets)) {
        urgentList.push(myTickets);
    }
}
console.log("Urgent Tickets are ", urgentList);//[ 'Crash Error', 'Data Loss' ]
console.log("Remaining Tickets are ", tickets);///Remaining Tickets are  []
//////////////////////////////////////////////////////////////////////////////////////
// Task: Loop through testCases
// If test case length > 6, save it in complexTests array
// Convert the test case names to uppercase before saving
let testCases1 = ["Login", "Register", "Payment", "Search", "Profile"];
let complexTests: string[] = []
while (testCases1.length > 0) {
    let myTestCases = testCases1.pop()!;
    if (myTestCases.length > 6) {
      complexTests.push(myTestCases.toUpperCase());
    }
}
console.log("Complex Tests are ", complexTests);//Complex Tests are  [ 'PROFILE', 'PAYMENT', 'REGISTER' ]
console.log("Remaining Test Cases are ", testCases1);//Remaining Test Cases are  []
////////////////////////////////////////////////////////////////////////////////////////////////////
// Task: Loop through apiUrls
// Count how many are Microsoft endpoints
// Save those Microsoft URLs in microsoftApis array
let apiUrls = ['api.microsoft.com/users', 'api.google.com/search', 'graph.microsoft.com/me', 'api.github.com/repos']
let microsoftApis: string[] = []
let microsoftCount = 0
while (apiUrls.length > 0) {
    let myApiUrl = apiUrls.pop()!
    if (myApiUrl.toLowerCase().includes("microsoft")) {
        microsoftApis.push(myApiUrl);
        microsoftCount++;
    }
}
console.log("Microsoft endpoints - ", microsoftCount);//Microsoft endpoints -  2
console.log("Microsoft APIs are ", microsoftApis);//Microsoft APIs are  [ 'graph.microsoft.com/me', 'api.microsoft.com/users' ]
/////////////////////////////////////////////////////////////////////////////////////////
// Task: Loop through testResults
// Split each result by ':'
// If score > 85 AND test name includes 'e', save it in excellentResults array
// Count how many excellent results there are

let testResults = ["Login:95", "Cart:80", "Checkout:92", "Search:75", "Profile:88"];
let excellentResults: string[] = [];
let excellentCount = 0;
while (testResults.length > 0) {
    let myTestResults = testResults.pop()!;
    let testResultsAr = myTestResults.split(":")
    console.log(testResultsAr);
    if (Number(testResultsAr[1]) > 85 && testResultsAr[0].includes("e")) {
        excellentResults.push(testResultsAr[0]);
    }
}
console.log("There are " + excellentResults.length + " excellent results");//There are 2 excellent results










//////////////////////////////////////////////////////////////////////
let testers = [
    {name: 'Sarah', experience: 5, bugsFound: 120},
    {name: 'Mike', experience: 4, bugsFound: 98},
    {name: 'Sam', experience: 6, bugsFound: 145},
    {name: 'Emma', experience: 2, bugsFound: 67},
    {name: 'Steve', experience: 4, bugsFound: 110}
]


// Find testers with experience > 3 AND name starting with 'S'
// Save them to seniorTesters array
// Calculate the average bugs found by these senior testers
// Print: 'Found X senior testers with average of Y bugs found'

let seniorTesters:number[] = []
let totalBugs = 0
let testerCount = 0
while (testers.length > 0) {
    let newTesters = testers.pop()!;
    if (newTesters.experience > 3 && newTesters.name.startsWith("S")) {
        seniorTesters.push(newTesters.bugsFound);
        totalBugs = totalBugs + newTesters.bugsFound;
    }
}
console.log(  "Found " + seniorTesters.length + " senior testers with average of " + totalBugs / seniorTesters.length);
//Found 3 senior testers with average of 125
///////////////////////////////////////////////////////////////////////////////////////////



