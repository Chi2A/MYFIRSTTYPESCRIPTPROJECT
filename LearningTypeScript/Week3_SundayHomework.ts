// Use a fori loop to go through each car
// If the car is in reliableCars → display "RELIABLE: [car name]"
// Otherwise → display "UNRELIABLE: [car name]"
let carsExisting = ["Porsche Taycan","GTR","Camry","Genesis","GT3 RS","Audi","Porsche Carrera",];
let reliableCars = ["Camry", "Genesis", "GT3 RS"];
for (let i = 0; i < carsExisting.length; i++) {
    if (reliableCars.includes(carsExisting[i])) {
        console.log("RELIABLE: " + carsExisting[i]);
    } else { 
        console.log("UNRELIABLE: " + carsExisting[i]);
    }
}
///////////////////////////////////////////////////////////////////////////////
// 1. Split the fruits string into an array
// 2. Use a fori loop to go through each fruit
// 3. If fruit is in freshFruits → display "FRESH: [fruit name]"
// 4. Otherwise → display "ROTTEN: [fruit name]"
let fruits5 = "apple,kiwi,mango,pear";
let freshFruits = ["apple", "mango", "pear"];
let myFruits = fruits5.split(",");
for (let i = 0; i < myFruits.length; i++) {
    if (freshFruits.includes(myFruits[i])) {
        console.log("Fresh: " + myFruits[i])
    } else { 
        console.log("ROTTEN: " + myFruits[i])
    }
}//Fresh: apple; ROTTEN: kiwi; Fresh: mango; Fresh: pear
//////////////////////////////////////////////////////////////////////////////////
// 1. Use a while loop to process books until none left
// 2. Remove books one by one using pop()
// 3. If book is in favoriteBooks → display "READING: [book name]"
// 4. Otherwise → display "SKIPPING: [book name]"

let books = ['mystery', 'science fiction', 'romance', 'thriller', 'fantasy'];
let favouriteBooks = ['mystery', 'thriller'];
while (books.length > 0) {
    let book = books.pop();
if(favouriteBooks.includes(book)){
console.log( "READING: " + book);
}else {
console.log("SKIPPING: " + book)}
}
///SKIPPING: fantasy; READING: thriller; SKIPPING: romance; SKIPPING: science fiction; READING: mystery
//////////////////////////////////////////////////////////////////////
// 1. Split the items string into an array
// 2. Create a new empty array: let healthyFound = []
// 3. Use a fori loop to go through each item
// 4. If item is in healthyItems → add it to healthyFound
// 5. After loop, display the healthyFound array
let items = 'apple,chips,carrot,ice cream,spinach';
let healthyItems = ['apple', 'carrot', 'spinach'];
let myItems = items.split(',');

let healthyFound: string[] = [];

for (let i = 0; i < myItems.length; i++) {
    if (healthyItems.includes(myItems[i])) {
        healthyFound.push(myItems[i]);
    }
}
console.log(healthyFound);//[ 'apple', 'carrot', 'spinach' ]
///////////////////////////////////////////////////////////////////
// Use a fori loop to go through each item
// If item is in weapons → display "WEAPON: [item name]"
// Else if item is in defenseItems → display "DEFENSE: [item name]"
// Else → display "OTHER: [item name]"
let gameItems1 = ['sword', 'shield', 'potion', 'armor', 'bow'];
let weapons1 = ['sword', 'bow'];
let defenseItems1 = ['shield', 'armor'];
for (let i=0; i< gameItems1.length; i++){
if (weapons1.includes(gameItems1[i])){
console.log( "WEAPON: " + gameItems1[i])
}else if (defenseItems1.includes(gameItems1[i])){
console.log("DEFENSE: " + gameItems1[i])
}else {
console.log("OTHER: " + gameItems1[i])
}
}//WEAPON: sword;  DEFENSE: shield;  OTHER: potion; DEFENSE: armor; WEAPON: bow
///////////////////////////////////////////////////////////////////////////////////
// 1. Create a counter starting at 0
// 2. Use while loop to process products until none left
// 3. Remove products one by one using pop()
// 4. If product is in portableProducts → increase counter
// 5. After loop, display "Portable products: [count]"
let products = ['laptop', 'phone', 'tablet', 'monitor', 'keyboard'];
let portableProducts = ['phone', 'tablet'];
let count = 0;
while (products.length > 0) {
    let product = products.pop();
    if (portableProducts.includes(product)) {
        count++;
    }
}console.log("Portable products: " + count);///2