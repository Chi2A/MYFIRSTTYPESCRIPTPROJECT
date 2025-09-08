// Start with an empty array called testQueue
// Add 5 test cases using push(): "Login Test", "Search Test", "Cart Test", "Payment Test", "Logout Test"
// Print the queue after adding all tests and the current queue length
// Insert "Security Test" at position 1 using splice()
// Replace the test at position 3 with "Updated Cart Test" using splice()
// Process (remove) the last 2 tests using pop() and print what was removed
// Add "Priority Test" using push() and "Emergency Fix Test" at the beginning using splice()
//Print the final queue and its length
let testQueue: string[] = [];
testQueue.push("Login Test", "Search Test", "Cart Test", "Payment Test", "Logout Test");
console.log(testQueue);//"Login Test", "Search Test", "Cart Test", "Payment Test", "Logout Test"
console.log(testQueue.length);//5
let newTest:string []= testQueue.splice(0, 1, "Security Test");
let replacedTest = testQueue.splice(2, 1, "Updated Cart Test");
let removedTest1 =testQueue.pop();
let removedTest2 = testQueue.pop();
console.log("Removed tests:", removedTest1, removedTest2);//Logout Test Payment Test
testQueue.push("Priority Test");
console.log(testQueue);//'Security Test','Search Test','Updated Cart Test','Priority Test'
testQueue.splice(0, 0, "Emergency Fix Test");
console.log('Tests we got : ' + testQueue);//Tests we got : Emergency Fix Test,Security Test,Search Test,Updated Cart Test,Priority Test
console.log(testQueue.length);//5
///////////////////////////////////////////////////////////////////////
// Create an array userTypes with: ["admin", "tester", "developer"]
// Create an array activeUsers with: ["alice", "bob", "charlie"]
// Check if userTypes includes "admin" - if yes, insert "super-admin" at position 1 using splice()
// Check if activeUsers includes "bob" - if yes, replace "charlie" with "bob-backup" using splice()
// Check if userTypes includes "manager" - if no, add it at the beginning using splice()
// Remove the last userType using pop() and add it to activeUsers using push()
// Print both arrays and their lengths after each operation
// Print how many total users and user types we have
 let userTypes: string[] = ["admin", "tester", "developer"];
 let activeUsers: string[] = ["alice", "bob", "charlie"];
 if (userTypes.includes("admin")) {
   userTypes.splice(1, 0, "super-admin");
 }
 if (activeUsers.includes("bob")) {
   activeUsers.splice(2, 1, "bob-backup");
 }
 if (!userTypes.includes("manager")) {
   userTypes.splice(0, 0, "manager");
 }
 userTypes.pop();
 activeUsers.push("developer");

 console.log("Final user types: " + userTypes);//manager,admin,super-admin,tester
 console.log("Final user types: " + userTypes.length);//4

 console.log("Final active user : " + activeUsers);//alice,bob,bob-backup,developer
 console.log("Final active user : " + activeUsers.length);//4
//////////////////////////////////////////////////////////////////////////////////////////
// Start with bugReports: ["Low Bug 1", "Medium Bug 1", "High Bug 1"]
// Insert "Critical Bug 1" at the beginning using splice() (highest priority first)
// Add "Low Bug 2" and "High Bug 2" using push()
// Check if the array includes any "Critical" bugs - if yes, replace "Medium Bug 1" with "Priority Bug 1" using splice()
// Insert "Emergency Bug" at position 1 using splice() (second highest priority)
// Check if array length is greater than 5 - if yes, remove the last 2 bugs using pop()
// Replace the last remaining bug with "Final Bug" using splice()
// Print the bug reports and count after each major change
let bugReports: string[] = ["Low Bug 1", "Medium Bug 1", "High Bug 1"];
bugReports.splice(0, 0, "Critical Bug 1");
bugReports.push("Low Bug 2", "High Bug 2");
if (bugReports.includes("Critical Bug 1")) {
  bugReports.splice(2, 1, "Priority Bug 1");
}
bugReports.splice(1, 0, "Emergency Bug");

if (bugReports.length > 5) {
  bugReports.pop();
  bugReports.pop();
}

bugReports.splice(bugReports.length - 1, 1, "Final Bug");
console.log("Final bug reports:", bugReports);//'Critical Bug 1','Emergency Bug','Low Bug 1','Priority Bug 1','Final Bug'
console.log("Final bugs : " + bugReports.length);//5
//////////////////////////////////////////////////////////////////////////////////////////////////
// Create features: ["login", "search", "checkout"]
// Create testedFeatures: empty array
// For each feature, check if it includes "login" - if yes, move it to testedFeatures using splice and push
// Insert "authentication" at the beginning of features using splice()
// Replace "search" with "advanced-search" in features using splice() (find its position first)
// Add "profile" to features using push()
// Check if testedFeatures length is greater than 0 - if yes, insert "Testing Started" at the beginning of testedFeatures
// Remove the last feature using pop() and add it to testedFeatures with "Tested: " prefix
// Print both arrays and their lengths after each major operation
let features: string[] = ["login", "search", "checkout"];
let testedFeatures: string[] = [];
if (features[0].includes("login")) {
  let removed = features.splice(0, 1)[0]; 
  testedFeatures.splice(0, 0, removed); 
}

features.splice(0, 0, "authentication");
console.log(features); 
// ["authentication", "login", "search", "checkout"]

features.splice(1, 1, "advanced-search");
// ["authentication", "login", "advanced-search", "checkout"]

if (testedFeatures.length > 0) {
  testedFeatures.splice(0, 0, "Testing Started");
}

let lastFeature = features.pop();
if (lastFeature) {
  testedFeatures.push("Tested: " + lastFeature);
}
console.log("Features: ", features);//'authentication', 'search'
console.log("Features Length:", features.length);//2
console.log("Tested Features:", testedFeatures)//Tested: ', 'Testing Started', 'login' 
console.log("TestedFeatures Length: " , testedFeatures.length);//3
////////////////////////////////////////////////////////////////////////////////////
// Create environments: ["dev", "staging"]
// Create activeEnvironments: empty array
// Insert "production" at position 1 in environments using splice()
// Check if environments includes "dev" - if yes, move it to activeEnvironments using splice() and push()
// Check if environments includes "testing" - if no, insert it at the beginning using splice()
// Replace "staging" with "pre-production" in environments using splice()
// Remove the last environment using pop() and insert it at position 1 in activeEnvironments using splice()
// Check if activeEnvironments length equals 2 - if yes, add "All Systems Go" using push()
// Insert "Monitor Active" at the beginning of activeEnvironments using splice()
// Print both arrays and their lengths after each major operation

let environments:string[]= ["dev", "staging"];
let activeEnvironments: string[] = [];
environments.splice(1, 0, "production");
console.log(environments);//[ 'dev', 'production', 'staging' ]
if (environments.includes("dev")) {
  let removedEnv  = environments.splice(0, 1)[0];
  activeEnvironments.push(removedEnv);
  console.log(activeEnvironments); // [ 'dev' ]
}
if (!environments.includes("testing")) {
  environments.splice(0, 0, "testing"); 
}
console.log(environments);//[ 'testing', 'production', 'staging' ]
environments.splice(2, 1, "pre-production");
console.log(environments);//[ 'testing', 'production', 'pre-production' ]
let lastEnv = environments.pop();
activeEnvironments.splice(1, 0, lastEnv);
console.log(activeEnvironments);//[ 'dev', 'pre-production' ]
if (activeEnvironments.length = 2) {
  activeEnvironments.push("All Systems Go");
  console.log(activeEnvironments); //'dev', 'pre-production', 'All Systems Go'
}
//Insert "Monitor Active" at the beginning of activeEnvironments using splice()
activeEnvironments.splice(0, 0, "Monitor Active");
console.log("Environments are ", environments)//Environments are  [ 'testing', 'production' ]
console.log ( "Environments Length is ", environments.length);//2
console.log("Active Environments are ", activeEnvironments);//Active Environments are  [ 'Monitor Active', 'dev', 'pre-production', 'All Systems Go' ]
console.log("Active Environments Length is ", activeEnvironments.length);//4
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Create testSuites: ["smoke", "regression"]
// Create runningTests: empty array
// Create completedTests: empty array
// Insert "critical" at the beginning of testSuites using splice()
// Add "integration" and "performance" to testSuites using push()
// Check if testSuites includes "smoke" - if yes, move it to position 0 in runningTests using splice()
// Replace "regression" with "full-regression" in testSuites using splice()
// Insert "unit" at position 2 in testSuites using splice()
// Check if runningTests length is greater than 0 - if yes, move the first test to position 0 in completedTests using splice()
// Check if testSuites includes "performance" - if yes, insert "load-testing" after it using splice()
// Remove the last test from testSuites using pop() and insert it at position 1 in runningTests using splice()
// Insert "Test Manager Active" at the beginning of each array using splice()
// Print all three arrays with their lengths and calculate total tests
let testSuites = ["smoke", "regression"];
let runningTests: string[] = [];
let completedTests: string[] = [];
testSuites.splice(0, 0, "critical");
testSuites.push("integration", "performance"); 
//Check if testSuites includes "smoke" - if yes, move it to position 0 in runningTests using splice()
if (testSuites.includes ("smoke") ){ 
  let removed = testSuites.splice(testSuites.indexOf("smoke"), 1)[0];

    runningTests.splice(0, 0, removed);
    console.log(runningTests);
}
testSuites.splice(1, 1, "full-regression");
console.log(testSuites);//[ 'critical', 'full-regression', 'integration', 'performance' ]
testSuites.splice(2, 0, "unit");
console.log(testSuites);//[ 'critical', 'full-regression', 'unit', 'integration', 'performance' ]
if (runningTests.length > 0) {
  let removedTest = runningTests.splice(0, 1)[0];
  completedTests.splice(0, 0, removedTest);
  console.log(completedTests); // 'smoke' ]
}
if (testSuites.includes ("performance")) {
  testSuites.splice(testSuites.indexOf("performance"), 0, "load-testing");
  console.log(testSuites); //'critical',"full-regression", "unit", "integration", "load-testing", "performance";
}
 let lastTest = testSuites.pop();
runningTests.splice(1, 0, lastTest);
//Insert "Test Manager Active" at the beginning of each array using splice()
testSuites.splice(0, 0, "Test Manager Active");
runningTests.splice(0, 0, "Test Manager Active");
completedTests.splice(0, 0, "Test Manager Active");
console.log(testSuites);//'Test Manager Active','critical','full-regression','unit','integration','load-testing'
console.log(testSuites.length);//6
console.log(runningTests);//[ 'Test Manager Active', 'performance' ]
console.log(runningTests.length);//2
console.log(completedTests);//[ 'Test Manager Active', 'smoke' ]
console.log(completedTests.length);//2
console.log("Total tests: ", testSuites.length + runningTests.length + completedTests.length);//10
