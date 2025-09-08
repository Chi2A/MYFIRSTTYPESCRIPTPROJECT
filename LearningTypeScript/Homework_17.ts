// // Your mission:
// // You need to examine each fruit individually
// // For fruits that contain the letter 'a' → display "EATING: [fruit name]"
// // For fruits that don't contain 'a' → display "THROWING AWAY: [fruit name]"
let fruits2: string = "apple,kiwi,mango,pear";
let myFruit = fruits2.split(",");

for (let i = 0; i < myFruit.length; i++) {
    if (myFruit[i].includes("a")) {
        console.log("EATING: " + myFruit[i]);
    } else {
        console.log("THROWING AWAY: " + myFruit[i]);
    }
}///EATING: apple; THROWING AWAY: kiwi; EATING: mango; EATING: pear
///////////////////////////////////////////////////////////////////////////////////////////////////
// You need to examine each drink and categorize them with these priorities:
// - First priority: drinks that contain the letter 'a' → display "DRINKING: [drink name]"
// - Second priority: drinks that begin with the letter 't' → display "TASTING: [drink name]"
// - Everything else → display "SKIPPING: [drink name]"
let drinks: string = "cola,water,tea,juice,milk";
let drinkArr = drinks.split(",");
for (let i = 0; i < drinkArr.length; i++) {
    if (drinkArr[i].includes("a")) {
        console.log("DRINKING: " + drinkArr[i])
    } else if (drinkArr[i].startsWith("t")) {
        console.log("TASTING: " + drinkArr[i])
    } else { 
        console.log("SKIPPING: " + drinkArr[i])
    }
}//DRINKING: cola; DRINKING: water; DRINKING: tea; SKIPPING: juice; SKIPPING: milk
///////////////////////////////////////////////////////////////////////////////////////////
// You need to examine each candy and create two arrays to track your results
// - Create one array to store all the candy names
// - Create another array to store whether each candy contains the letter 'c'
// - For each candy, display "CHOOSING: [candy name]" or "NOT PICKING: [candy name]"
// - After processing all candies, display both arrays to see your results
let candies: string = "mint,cookie,cake,lollipop,caramel";
let myCandies = candies.split(",");
let candyStartsWithC: boolean[] = [];
for (let i = 0; i < myCandies.length;i++) { 
    if (myCandies[i].includes("c")) {
      console.log("CHOOSING: " + myCandies[i]);
      candyStartsWithC.push(true);
    } else {
      console.log("NOT PICKING: " + myCandies[i]);
      candyStartsWithC.push(false); 
    }
}console.log("All candies:", myCandies);//All candies: [ 'mint', 'cookie', 'cake', 'lollipop', 'caramel' ]
console.log("Contains 'c'?:", candyStartsWithC);//Contains 'c'?: [ false, true, true, false, true ]
////////////////////////////////////////////////////////////////////////////////////////////////////////
// You need to examine each book and categorize them with these priorities:
// - Highest priority: books that begin with 'c' OR begin with 'd' → display "READING: [book name]"
// - Medium priority: books that contain the letter 'o' → display "INTERESTED: [book name]"
// - Everything else → display "IGNORING: [book name]"
let books: string = "comedy,drama,romance,action,poetry";
let myBooks = books.split(",");
for (let i = 0; i < myBooks.length; i++) { 
    if (myBooks[i].startsWith("c") || myBooks[i].startsWith("d")) {
        console.log("READING: " + myBooks[i])
    } else if (myBooks[i].includes("o")) {
      console.log("INTERESTED: " + myBooks[i]);
    } else {
      console.log("IGNORING: " + myBooks[i]);
    }
} console.log("All books are : " + myBooks)//All books are : comedy,drama,romance,action,poetry
//////////////////////////////////////////////////////////////////////////////////////////////////
// You need to examine each item and create multiple arrays to track your results:
// - Create one array to store all the item names
// - Create another array to store the category for each item ("WEAPON", "DEFENSE", or "OTHER")
// Categorization rules:
// - WEAPON category: items that begin with 's' OR contain 'bow'
// - DEFENSE category: items that contain 'shield' OR contain 'armor'  
// - OTHER category: everything else
// For each item, display: "[CATEGORY]: [item name]"
// After processing all items, display both arrays to see your complete results
let gameItem: string = "sword,shield,potion,armor,bow,staff,ring";
let currentItem = gameItem.split(",");
for (let i = 0; i < currentItem.length; i++) {
    if (currentItem[i].startsWith("s") || currentItem[i].includes("bow")) {
      console.log("Weapon: " + currentItem[i]);
    } else if (
      currentItem[i].includes("shield") || currentItem[i].includes("armor")) {
      console.log("DEFENSE: " + currentItem[i]);
    } else {
      console.log("OTHER:" + currentItem[i]);
    }
}//Weapon: sword; Weapon: shield; OTHER:potion; DEFENSE: armor; Weapon: bow; Weapon: staff; OTHER:ring
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// - One array to store all the product names
// - One array to store the category for each product
// - One array to store additional info (like length or special features)
// 
// Categorization rules with priority:
// - TECH category: products that begin with 'l' OR (begin with 'm' AND contain 'o')
// - MOBILE category: products that contain 'phone' OR contain 'tablet'
// - ACCESSORY category: products that are longer than 5 characters
// - UNKNOWN category: everything else
//
// For each product, display: "[CATEGORY]: [product name] (length: [number])"
// After processing, display all three arrays to show your complete analysis
let products: string = "laptop,mouse,keyboard,monitor,tablet,phone,headphones";
let allProducts = products.split(",");

for (let i = 0; i < allProducts.length; i++) { 
  
    if (allProducts[i].startsWith("l") || (allProducts[i].startsWith("m") && allProducts[i].includes("o"))) {
        console.log("TECH " + allProducts[i] + ("Length " + allProducts[i].length));
    } else if (allProducts[i].includes("phone") || allProducts[i].includes("tablet")) {
        console.log("MOBILE " + allProducts[i] + ("Length " + allProducts[i].length));
    } else if (allProducts[i].length > 5) {
        console.log("Accessory " + allProducts[i] + ("Length " + allProducts[i].length));

    } else { 
        console.log("UNKNOWN " + allProducts[i] + ("Length " + allProducts[i].length));
    }
}
console.log("All products:", allProducts);

