let myFavouriteColors = ["black", "blue", "pink", "white"];
let firstColor = myFavouriteColors[0];
let secondColor = myFavouriteColors[1];
let thirdColor = myFavouriteColors[2];
let fourthColor = myFavouriteColors[3];

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(fourthColor);
/////////////////////////////////////////////////////////////////////////////
let alina =['Alina','Maksymiuk',99,false]
let length = alina.length;
console.log(length);
/////////////////////////////////////////////////////////////////////////
// 1. Create an empty shopping list array

// 2. Add 5 items to your list using push()
// Your code here...
// 3. Display the length of your list
// Your code here...
// 4. Remove the last item using pop()
// Your code here...
// 5. Display your final list
// Your code here...
//let shoppingList:(string || number || boolean) 
let shoppingList:(string) [] = ["bread", "potato", "milk", "cheese"];
let updatedShoppingList = shoppingList.push("tomatoes", "cucumbers", "broccoli", "pasta", "rice");
console.log(updatedShoppingList);
let shoppingListLength: number = shoppingList.length;
console.log(updatedShoppingList);
let removedShoppingListItem = shoppingList.pop();
console.log(updatedShoppingList);
console.log("Final shopping list:", shoppingList);
//////////////////////////////////////////////////////////////////////////////
//create an empty array arrayName : (somethingHere)[] = []
// after that push 4 new elements and don't store or print it.
// after that push 2 new elements and print it
// after that push 3 new elements and store it and print it with a message.

let dreamCity: (string | number | boolean)[] = [];
dreamCity.push('New York', 'Boston', 'Chicago', 'Miami');
dreamCity.push('Denver', 'Atlanta');
let newDreamCity=dreamCity.push('Las Vegas', 'Dallas', 'Tampa');
console.log("List of dream cities: " + newDreamCity);

// Simulating a real QA automation scenario: Managing test cases for Google.com
// create an empty array for storing your test cases.
// add 'Login Test' to that array.
// add 'Search Test' to that array
// I want you to print all the amount of test cases you have after you add a new one.
let testCases: string[] = []
let testCaseNumber = testCases.push('Login Test')
console.log(testCaseNumber)
testCaseNumber = testCases.push('Search Test')
testCaseNumber = testCases.push('Checkout Test');
console.log(testCaseNumber)
console.log(testCases.push('New User Test'));
console.log('All the tests are : ' + testCases); /////All the tests are : Login Test,Search Test,Checkout Test,New User Test
console.log('All the tests are : ' + testCases.length); /////All the tests are : 4
