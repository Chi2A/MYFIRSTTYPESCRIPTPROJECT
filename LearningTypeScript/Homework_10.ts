let pause='_______________________________________________________________________________________________________________'
console.log(pause);
////////////////////////////////
// Your tasks:
// 1. Extract the test name (between [ and ])
// 2. Check if the test name equals "Login_Test_001"
// 3. Print "Correct Test!" if it matches, otherwise "Wrong Test!"
let testLog: string = 'Test: [Login_Test_001] Status: PASSED Time: 2.5s Score: 95';
let testLogStart: number = testLog.indexOf('[');
let testLogEnd: number = testLog.lastIndexOf(']');
let finalTestLog:string=testLog.slice(testLogStart+1, testLogEnd)
if (finalTestLog === 'Login_Test_001') {
    console.log('Correct Test!');
} else { 
    console.log('Wrong Test!');
}
////////////////////////////////////////////////////////////////////////////////////////////////

// Your tasks:
// 1. Extract the product name (between ( and ))
// 2. Check if iPhone ends with "16" - print "Wow this is a really nice new iPhone!"
// 3. Check if iPhone ends with "15" - print "This is still nice but needs a little upgrade soon"
// 4. Check if iPhone ends with "14" - print "It's getting older"
// 5. Otherwise print "You need to upgrade your phone"
let productInfo: string = 'Product: (iPhone 15) Category: Electronics Price: $999 Rating: 4.8';
let productBegins: number = productInfo.indexOf('(');
let productEnds: number = productInfo.lastIndexOf(')');
let rightProduct: string = productInfo.slice(productBegins + 1, productEnds);
if (rightProduct.endsWith('16')) {
    console.log('Wow this is a really nice new iPhone!');
} else if (rightProduct.endsWith('15')) {
    console.log('This is still nice but needs a little upgrade soon');
} else if (rightProduct.endsWith('14')) {
    console.log('Its getting older');
} else { 
    console.log('You need to upgrade your phone');
}
/////////////////////////////////////////////////////////////////////////////////////////

// 1. Extract response time number (between [ and ms)
// 2. Convert to number
// 3. Check thresholds:
//    - If < 200ms → "Good"
//    - If < 300ms → "OK"
//    - Otherwise → "Not OK"
let performanceData: string = 'Response Time: [150ms]';
let performanceDataStarts: number = performanceData.indexOf('[');
let performanceDataEnds: number = performanceData.lastIndexOf(']');
let realPerformanceData: string = performanceData.slice(performanceDataStarts + 1, performanceDataEnds);
let performanceDataNumber: number = parseFloat(realPerformanceData);
if (performanceDataNumber < 200) {
console.log('Good');
} else if (performanceDataNumber < 300) {
console.log('OK');
} else { 
    console.log('Not OK');
}
////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Extract the number (between [ and ])
// 2. Convert to number
// 3. Check if shopping list includes "fruits" AND number >= 5
// 4. Check if shopping list includes "vegetables" AND number >= 3
// 5. Check if shopping list includes "meat" AND number >= 2
// 6. Otherwise print "Basic shopping list"
let groceryList: string = 'Shopping: [5] items include fruits and vegetables';
let groceryStarts: number = groceryList.indexOf('[');
let groceryEnds: number = groceryList.lastIndexOf(']');
let newGroceryList: string = groceryList.slice(groceryStarts + 1, groceryEnds);
let groceryQuantityList: number= parseFloat(newGroceryList);
if (groceryList.includes("fruits" ) && (groceryQuantityList >= 5)) {
    console.log('Getting fruits');
} else if (groceryList.includes("vegetables"  ) && ( groceryQuantityList >= 3)) {
console.log('Getting vegetables');
} else if (groceryQuantityList >= 2 && (groceryList.includes("meat") )) {
console.log('Getting meat');
} else { 
console.log('Basic shopping list');
}
///////////////////////////////////////////////////////////////////////////////////////
// 1. Extract the system performance number (between [ and %)
// 2. Convert to number
// 3. Check if system includes "monitoring" AND performance >= 90
// 4. Check if system includes "alerts" AND performance >= 80
// 5. Check if system includes "backup" AND performance >= 70
// 6. Otherwise print "System needs attention"
let systemHealth: string = 'System: [85%] performance includes monitoring and alerts';
let systemStarts: number = systemHealth.indexOf('[');
let systemEnds: number = systemHealth.lastIndexOf('%');
let newSystemHealth: string = systemHealth.slice(systemStarts + 1, systemEnds);
let finalSystemHealth: number = parseFloat(newSystemHealth);
if (systemHealth.includes("monitoring") && (finalSystemHealth >= 90)) {
    console.log('Monitoring system is great');
} else if (systemHealth.includes("alerts") && (finalSystemHealth >= 80))  {
console.log('Alerts system runs nice');
} else if (systemHealth.includes("backup") && (finalSystemHealth >= 70))  {
console.log('Backup system functions well');
} else { 
console.log('System needs attention');
}
///////////////////////////////////////////////////////////////////////////////////

// 1. Extract the coverage percentage (between [ and %)
// 2. Convert to number
// 3. Check if test suite includes "automated" AND coverage >= 90
// 4. Check if test suite includes "regression" AND coverage >= 80
// 5. Check if test suite includes "performance" AND coverage >= 85
// 6. Check if test suite includes "security" AND coverage >= 95
// 7. Otherwise print "Test coverage needs improvement"
let testSuite: string = 'Test Coverage: [95%] includes automated and regression testing';
let startPercentage: number = testSuite.indexOf('[');
let endPercentage: number = testSuite.lastIndexOf('%');
let testSuitePercentage: string = testSuite.slice(startPercentage + 1, endPercentage);
let finalTestPercentage: number = parseFloat(testSuitePercentage);
if (testSuite.includes("automated") && finalTestPercentage >= 90) {
    console.log('Automated testing coverage is pretty strong');
} else if (testSuite.includes("regression") && finalTestPercentage >= 90) {
    console.log('Regression testing is covered');
} else if (testSuite.includes("performance") && finalTestPercentage >= 85) {
    console.log('Performance testing runs well');
} else if (testSuite.includes("security") && finalTestPercentage >= 95) {
    console.log('Security testing coverage works well');
} else { 
    console.log('Test coverage needs improvement');
}
///////////////////////////////////////////////////////////////////////////////////////////////
