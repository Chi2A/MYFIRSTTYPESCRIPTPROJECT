// Task: Create connections: ["mysql-prod", "redis-cache", "mongo-dev"]
// and activeConnections: empty. Check the first connection (index 0) -
// if it includes "mysql", move it to activeConnections and add "SECURED-"
// prefix.
// Check the second connection (index 1) - if it includes "redis",
// replace it with "redis-cluster". Add "postgres-test" to connections.
// Insert "monitor-connection" at the beginning of activeConnections.
// Remove the last connection from activeConnections and add "BACKUP-"
// prefix to it. Calculate total connections.

let connections: string[] = ["mysql-prod", "redis-cache", "mongo-dev"];
let activeConnections: string[] = [];
if (connections[0].includes("mysql")) {
  let removedCon = connections.splice(0, 1)[0];
  activeConnections.splice(0, 0, "SECURED-" + removedCon);
}
if (connections[0].includes("redis")) {
  connections.splice(0, 1, "redis-cluster");
}
connections.push("postgres-test");
activeConnections.splice(0, 0, "monitor-connection");
let newCon = "BACKUP-" + activeConnections.pop();
activeConnections.push(newCon);
console.log(connections);
console.log(activeConnections);

// / Create rawData: ["valid-email", "invalid-phone", "valid-address", "corrupt-data"]
// and cleanData: empty. For each item in rawData, check if it includes "valid" -
// if yes, move it to cleanData and replace "valid" with "verified". Insert "data-header"
//  at the beginning of cleanData. Remove the last item from rawData and add "processed-"
// prefix before adding to cleanData. Print the processing results.
let rawData = ["valid-email", "invalid-phone", "valid-address", "corrupt-data"];
let cleanData: string[] = [];
// valid-email
if (rawData[0].includes("valid")) {
  cleanData.push(rawData.splice(0, 1)[0].replace("valid", "verified"));
}
// invalid-phone
if (rawData[0].includes("valid")) {
  // this will not be true so it will not remove
  cleanData.push(rawData.splice(0, 1)[0].replace("valid", "verified"));
}
//"valid-address"
if (rawData[1].includes("valid")) {
  cleanData.push(rawData.splice(1, 1)[0].replace("valid", "verified"));
}
// corrupt-data
if (rawData[1].includes("valid")) {
  // this will not be true so it will not remove
  cleanData.push(rawData.splice(1, 1)[0].replace("valid", "verified"));
}
///////////////////////////////////////////////////////////////////////////////////////
// "The quick brown fox"
// Your task: Use split() to create an array of words
// let sentence = "The quick brown fox";
// let words = sentence.split("___");  // Replace "___" with something right
// console.log(words);
// I want to have this -> ['The','quick','brown','fox']
let mySentence = "The quick brown fox";
let myWords = mySentence.split(" ");
console.log(myWords); //[ 'The', 'quick', 'brown', 'fox' ]

let userData = "Alice,30,QA Engineer,Premium";
let userDetails = userData.split(",");
console.log(userDetails);

("home-products-electronics-laptops");
let urlPath = "home-products-electronics-laptops";
let navigationPages = urlPath.split("-");
console.log(navigationPages);

// "testuser@gmail.com"
// Your task: Separate the username from the domain
// let email = "testuser@gmail.com";
// let emailParts = email.split("___");  // What separator?
// print 'username = testuser'
// print 'domain = gmail.com'
let email = "testuser@gmail.com";
let myEmailParts = email.split("@");
console.log("username: " + myEmailParts[0]);
console.log("domain:" + myEmailParts[1]);

// my name is Salih
// I am 25 years old
// My favorite car is Aston Martin Vantage
let me = "Alina,25,Audi";
let myInfo = me.split(",");
console.log("My name is - " + myInfo[0]);
console.log("My age is - " + myInfo[1]);
console.log("My car is - " + myInfo[2]);

