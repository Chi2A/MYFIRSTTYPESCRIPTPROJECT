// Create a string testCaseName with value "login-user-validation-test". 
// Use split("-") to break it into parts.
// Store the result in testParts.
// Check if testParts includes "user" - 
// if yes, replace it with "customer".
// Add "automated" to the end of testParts.
// Create a new string by joining testParts with dashes.
// Print the original string, the split array, and the final joined string.
let testCaseName: string = "login-user-validation-test";
let testParts = testCaseName.split("-");
console.log(testParts);//[ 'login', 'user', 'validation', 'test' ]
if (testParts.includes("user")) { 
   testParts.splice(1, 1, "customer");
}
testParts.push("automated");
let finalTestCaseName = testParts.join("-");
console.log("Final joined string:", finalTestCaseName);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a string userEmail with value "john.doe@company.com". 
// Use split("@") to separate the email into parts.
// Store in emailParts. 
// Check if the domain part(index 1) includes "company" - 
// if yes, move it to a verifiedDomains array and
//  add "TRUSTED-" prefix.
//  Split the username part(index 0) by "." 
//  and store in nameParts.
//     Add "qa-team" to verifiedDomains.
// Print all arrays and their lengths
let userEmail: string = "john.doe@company.com";
let emailParts = userEmail.split("@");
console.log("Email parts:", emailParts); // [ 'john.doe', 'company.com' ]

let verifiedDomains: string[] = [];

if (emailParts[1].includes("company")) {
  verifiedDomains.push("TRUSTED-" + emailParts[1]);
}
let nameParts = emailParts[0].split(".");
console.log("Name parts:", nameParts);

verifiedDomains.push("qa-team");
console.log("Name parts:", nameParts, "Length:", nameParts.length);
console.log( "Verified domains:",verifiedDomains,"Length:",verifiedDomains.length);
console.log("Email parts:", emailParts, "Length:", emailParts.length);
////////////////////////////////////////////////////////////////////////////////////////////////
// Create a string apiEndpoint with value "https://api.test.com/users/profile/settings". 
// Use split("/") to break into parts.Store in urlParts.
// Check the first part(index 0) - if it includes "https",
// move it to a secureProtocols array.
// Check the third part(index 2) - if it includes "test",
// replace it with "prod.environment".
// Add "v2" to the end of urlParts.
// Insert "secure" at the beginning of secureProtocols.
// Calculate total parts across both arrays.
let apiEndpoint: string = "https://api.test.com/users/profile/settings";
let urlParts = apiEndpoint.split("/");
let secureProtocols: string[] = [];
if (urlParts[0].includes("https")) {
    let removedPart = urlParts.splice(0, 1)[0]
    secureProtocols.push(removedPart);
}
if (urlParts[2].includes("test")) {
    urlParts[2] = urlParts[2].replace("test", "prod.environment");
}
urlParts.push("v2");
secureProtocols.splice(0, 0, "secure");
let totalParts = urlParts.length + secureProtocols.length;
console.log("urlParts:", urlParts);//urlParts: [ '', 'api.prod.environment.com', 'users', 'profile', 'settings', 'v2' ]
console.log("secureProtocols:", secureProtocols);// [ 'secure', 'https:' ]
console.log("Total parts : " + totalParts);//8
//////////////////////////////////////////////////////////////////////////////////////////////
//  Create a string testData with value "user123,password456,admin,active". 
//  Use split(",") to separate into parts.Store in dataParts.
//  Check if dataParts includes "admin" - if yes,
// move it to a adminUsers array and add "ELEVATED-" prefix.
// Replace "active" with "verified-status".
// Add "qa-reviewed" to dataParts.
// Insert "system-admin" at the beginning of adminUsers.
// Remove the last item from adminUsers and store it.Print all results.
let testData: string = "user123,password456,admin,active";
let dataParts = testData.split(",");
let adminUsers: string[] = [];
console.log(dataParts);//["user123", "password456", "admin", "active"];
if (dataParts.includes("admin")) {
  let removedPart = dataParts.splice(2, 1)[0];
  adminUsers.push("ELEVATED-" + removedPart);
  console.log(dataParts); //[ 'user123', 'password456', 'active' ]
}
testData = testData.replace("active", "verified-status");
dataParts.push("qa-reviewed");
adminUsers.splice(0, 0, "system-admin");
let removedAdUser = adminUsers.pop();
console.log('Test Data - ' + testData);//Test Data - user123,password456,admin,verified-status
console.log('Data Parts - ' + dataParts);//Data Parts - user123,password456,active,qa-reviewed
console.log('Admin Users - ' + adminUsers);//Admin Users - system-admin
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a string logPath with value "C:\\logs\\qa\\daily\\errors.txt". 
// Use split("\\\\") to break into path parts.Store in pathParts.
// Check the first part(index 0) - if it includes "C:",
// move it to a systemDrives array.
// Check the second part(index 1) - if it includes "logs",
// replace it with "test-logs".Add "archive" to pathParts.
// Insert "primary-drive" at the beginning of systemDrives.
// Remove the last path part and add "BACKUP-" prefix to it.
// Calculate total path elements.
// let logPath: string = "C:\\logs\\qa\\daily\\errors.txt";
// let pathParts = logPath.split("\\\\");
// console.log(pathParts);//[ 'C:', 'logs', 'qa', 'daily', 'errors.txt' ]
// let systemDrives: string[] = [];

// if (pathParts[0].includes("C:")) { 
//     let removedParts = pathParts.splice(0, 1)[0]
//     systemDrives.push(removedParts);
// }
// if (pathParts[0].includes("logs")) { 
//     pathParts.splice(0, 1, "test-logs");
// }
// systemDrives.splice(0, 0, "primary-drive");
// let lastRemPath = "BACKUP-" + pathParts.pop();
// pathParts.push(lastRemPath);
// let totalPathElem = pathParts.length + systemDrives.length;
// console.log(totalPathElem);
// /////////////////////////////////////////////////////////////////////////////////////////////
// tring testReport with value "Test Suite: ui-tests | Status: passed | Duration: 120ms | Browser: chrome". 
// Use split(" | ") to break into report parts.Store in reportParts.
// For each part, split by ": " to get key - value pairs.
// Check if any key includes "Status" - if status is "passed",
//     move the value to a passedTests array.
//     Check if any key includes "Duration" - extract the number and 
//     add to a durations array.Create a summary with test count and total duration.
let testReport1: string = "Test Suite: ui-tests | Status: passed | Duration: 120ms | Browser: chrome";
let reportParts = testReport1.split(" | ");
console.log(reportParts);
let smallerParts = reportParts.split(": ");
console.log(smallerParts);