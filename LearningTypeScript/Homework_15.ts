// Create arrays regularTests and priorityTests. 
// Start with regularTests: ["login-test", "ui-test", "api-test"].
//  Check if it includes "login-test" - if yes, move it to priorityTests using splice.
// Add "database-test" to regularTests.Insert "smoke-test" at the beginning of priorityTests.
// Replace the last item in regularTests with "integration-test". 
// Print both arrays and their combined length.
let regularTests = ["login-test", "ui-test", "api-test"];
let priorityTests: string[] = [];
if (regularTests.includes("login-test")) { 
    let removedTest = regularTests.splice(0, 1)
    priorityTests.splice(0, 0, removedTest[0]);
    console.log(priorityTests);
} 
regularTests.push("database-test");
priorityTests.splice(0, 0, "smoke-test");
console.log(priorityTests);//[ 'smoke-test', 'login-test' ]
regularTests.splice(regularTests.length - 1, 1, "integration-test");
console.log("Regulat tests : ", regularTests);//Regulat tests :  [ 'ui-test', 'api-test', 'integration-test' ]
console.log("Priority tests : ", priorityTests);//Priority tests :  [ 'smoke-test', 'login-test' ]
let testsLength = regularTests.length + priorityTests.length;
console.log("Tests length : ", testsLength);//5
////////////////////////////////////////////////////////////////////////////////////////////////////
//  Create arrays testQueue: ["chrome-test", "firefox-test", "safari-test"] 
//  and completedTests: empty.
//  Check if testQueue includes "chrome-test" - 
//  if yes, move it to completedTests and add "PASSED-" prefix.
// Add "edge-test" to testQueue.
// Replace "firefox-test" with "firefox-mobile-test".
// Insert "priority-test" at the beginning of testQueue.
// Remove the last item from completedTests and store it.
// Print both arrays and the stored test.
let testQueue = ["chrome-test", "firefox-test", "safari-test"]; 
let completedTests1: string[] = [];
if (testQueue.includes("chrome-test")) { 
    let removedTest1 = testQueue.splice(0, 1)[0]
    completedTests1.push("PASSED-" + removedTest1);
    console.log(completedTests1);
}
testQueue.push("edge-test");
testQueue.splice(testQueue.indexOf("firefox-test"), 1, "firefox-mobile-test");
console.log(testQueue);
testQueue.splice(0, 0, "priority-test");
let removedCompletedTest = completedTests1.pop();
let storedTests = removedCompletedTest; 
console.log("Test Queue are: ", testQueue);//Test Queue are:  [ 'priority-test', 'firefox-mobile-test', 'safari-test', 'edge-test' ]
console.log("Completed Tests are : ", completedTests1);//[]
console.log("Stored Test are : ", storedTests); //Stored Test are :  PASSED-chrome-test
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create endpoints: ["login-api", "payment-api", "logout-api"] and
// testedEndpoints: empty.
// Check the first endpoint(index 0) - 
// if it includes "login", move it to testedEndpoints and 
// add "VERIFIED-" prefix.
// Check the second endpoint(index 1) - 
// if it includes "payment",
// replace it with "secure-payment-api".
// Add "profile-api" to endpoints.
// Insert "health-check" at the beginning of testedEndpoints.
// Calculate total endpoints across both arrays.
let endpoints = ["login-api", "payment-api", "logout-api"];
let testedEndpoints: string[] = [];
if (endpoints[0].includes("login")) {
  let removedPoint = endpoints.splice(0, 1)[0];
  testedEndpoints.splice(0, 0, "VERIFIED-" + removedPoint);
  console.log(testedEndpoints); //[ 'VERIFIED-login-api' ]
}
if (endpoints[0].includes("payment")) {
  endpoints.splice(0, 1, "secure-payment-api");
  console.log(endpoints); ///[ 'secure-payment-api', 'logout-api' ]
}
endpoints.push("profile-api");
testedEndpoints.splice(0, 0, "health-check");
console.log(endpoints);//[ 'secure-payment-api', 'logout-api', 'profile-api' ]
console.log(testedEndpoints);//[ 'health-check', 'VERIFIED-login-api' ]
let totalPoints = endpoints.length + testedEndpoints.length
console.log(totalPoints);//5
///////////////////////////////////////////////////////////////////////////////////////////////
// Create devices: ["iphone-12", "android-samsung", "ipad-pro"] and
// connectedDevices: empty.
// Check if devices includes "iphone-12" - 
// if yes, move it to connectedDevices and 
// add "CONNECTED-" prefix.
// Replace "android-samsung" with "android-pixel".
// Add "tablet-surface" to devices.
// Insert "emulator" at the beginning of connectedDevices.
// Remove the last device and store it in a variable.
// Print all arrays and the stored device.
let devices = ["iphone-12", "android-samsung", "ipad-pro"];
let connectedDevices: string[] = [];
if (devices.includes("iphone-12")) {
   let removedDev = devices.splice(devices.indexOf("iphone-12"), 1)[0];
    connectedDevices.push("CONNECTED-" + removedDev);
    console.log(devices);
}
devices.splice(0, 1, "android-pixel");
devices.push("tablet-surface");
connectedDevices.splice(0, 0, "emulator");
let lastDev = devices.pop();
console.log("Devices are " + devices);//Devices are android-pixel,ipad-pro
console.log("Connected Devices are  " + connectedDevices);//Connected Devices are  emulator,CONNECTED-iphone-12
console.log("Stored device : " + lastDev);//Stored device : tablet-surface
///////////////////////////////////////////////////////////////////////////////////////
// Create connections: ["mysql-prod", "redis-cache", "mongo-dev"] and
// activeConnections: empty.
// Check the first connection(index 0) - if it includes "mysql",
// move it to activeConnections and add "SECURED-" prefix.
// Check the second connection(index 1) - if it includes "redis",
// replace it with "redis-cluster".
// Add "postgres-test" to connections.
// Insert "monitor-connection" at the beginning of activeConnections.
// Remove the last connection from activeConnections and 
// add "BACKUP-" prefix to it.
// Calculate total connections.
let connections1 = ["mysql-prod", "redis-cache", "mongo-dev"];
let activeConnections1: string[] = [];
if (connections1[0].includes("mysql")) {
    let removedCon = connections1.splice(0, 1)[0]
    activeConnections1.push("SECURED- " + removedCon);
}
if (connections1[0].includes("redis")) {
    let removed = connections1.splice(0,1)[0]
    connections1.splice(0, 1, "redis-cluster");
    console.log(connections1)
}
connections1.push("postgres-test");

activeConnections1.splice(0, 0, "monitor-connection");
let addedCon = activeConnections1.push("BACKUP-" + activeConnections1.pop());
let totalConnections = activeConnections1.length + connections1.length;
console.log(totalConnections);///4
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Create metrics: ["cpu-85", "memory-60", "disk-90"] and
// alerts: empty.
// Check each metric - if the number is above 80,
// move it to alerts and add "HIGH-" prefix.
// Replace "memory-60" with "memory-optimized".
// Add "network-70" to metrics.
// Insert "system-check" at the beginning of alerts.
// If alerts length > 1, remove the last alert and store it.
// Calculate average of remaining numeric metrics.Print all results.
// let metrics: string[] = ["cpu-85", "memory-60", "disk-90"];
// let alerts: string[] = [];
// let metric1 = metrics[0].split("-");
// if (Number(metric1[1]) > 80) {
//     alerts.push("HIGH-" + metrics[0]);
// } else {
//     remainingMetrics.push(metrics[0]);
// }

