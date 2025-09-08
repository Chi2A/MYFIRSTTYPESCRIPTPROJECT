// for (let i = 0; i < 7; i++ ) { 
// console.log("There are 7 days a week")
// }

// for (let i = 1; i < 7; i++) { 

// console.log( "Today is  " + i + "day of the week")
// }

// for (todaysday = 1; todaysday < 31; todaysday++) { 
//     console.log("todaysday is " + todaysday);
// }
// for (weeksOfTheMonth = 1; weeksOfTheMonth < 5; weeksOfTheMonth++) {
//   console.log("Its " +  weeksOfTheMonth + " week of the month");
// // }
// let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// for (let w = 0; w < days.length; w++) { 
//     console.log("Today is " + days[w])
// }
/////////////////////////////////////////////////////////////////////////////////////////
let daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// check every day of the array and if it's equal to "tuesday"
// then print that day ("tuesday")
// otherwise print 'sorry it's not tuesday'
for (let i = 0; i < daysOfTheWeek.length; i++) {
  if (daysOfTheWeek[i] === "tuesday") {
    console.log(daysOfTheWeek[i]);
  } else {
    console.log("sorry it's not tuesday");
  }
}
/////////////////////////////////////////////////////////////////////////////////////////
// inventory = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
// if the current car is starting with 'Porsche'
// then print 'This is what I am looking for Porsche Taycan'
let inventory = ["Porsche Taycan", "GTR", "Camry", "Genesis", "GT3 RS", "Audi", "Porsche Carrera"];
for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].startsWith("Audi")) {
        console.log("This is what I am looking for - " + inventory[i]);
    } 
}
///////////////////////////////////////////////////////////////////////////////////////////
// we are a bouncer in front of a club
// we do not let people who are younger than 21
// age = [15, 16, 77, 99, 29, 18, 21]
// when there is someone older or equal to 21
// we should say 'WELCOME'
// otherwise 'Bugger off, get out!'
// check if they are between 21 and 18 also you can say " coming "
// let age3 = [15, 16, 77, 99, 29, 18, 21];
// for (let i = 0; i < age3.length; i++) {
//     if (age3[i] >= 21) {
//         console.log('WELCOME')
//     } else { 
//         console.log('Bugger off, get out!')
//     }
//      if (age3[i] > 18 && age3[i] < 21) {
//        console.log("You can come but not drink");
//      } else {
//        console.log("Go home!");
//      }
// }
//////////////////////////////////////////////////////////////////////////////////////////////////
// I have fruits string = 'cherry,orange,mango,banana'
// check every fruit and if it's including letter 'a'
// we are eating that fruit
// otherwise we are throwing it to trash
let fruit = 'cherry, orange, mango, banana';
let fruitAr = fruit.split(',');
for (let i = 0; i < fruitAr.length;i++) { 
    if (fruitAr[i].includes("a")) {
        console.log("I am eating  " + fruitAr[i]);
    } else { 
        console.log("Throw it away " + fruitAr[i]);
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////
// we will have 3 arrays.
// 1 array for current students
// 1 array for showing the online students
// 1 array for checking who is online today
// today at the class we have currentStudents online and in person mixed
// we do also have onlineStudentsBatch1 who are in the batch for online
// What I want you guys to do is give me from online students who is at
// currently class today.
// who we currently have currentOnlineStudents -> 'Anna', 'Art', 'Katya', 'Arty'
// 1. create a loop
// 2. check every single currentStudents and if they are in the
// onlineStudentsBatch1 then
// 3. put them in the currentOnlineStudents
let currentStudents = ["Vova", "Dima", "Anna", "Tania", "Art", "Katya", "Arty"];
let onlineStudentsBatch1 = ["Anna", "Art", "Katya", "Arty", "Alina"];
let currentOnlineStudents:string[] = [];
for (let i = 0; i < currentStudents.length; i++) {
  
  if (onlineStudentsBatch1.includes(currentStudents[i])) {
    currentOnlineStudents.push(currentStudents[i]);
  }
}
console.log(currentOnlineStudents);//[ 'Anna', 'Art', 'Katya', 'Arty' ]
////////////////////////////////////////////////////////////////////////////
// we are starting a trucking company
// we have truckInventory
// we have reliable trucks
// we have saved trucks
let truckInventory = ['RAM', 'Chevy', 'Ford', 'Suzuki', 'Freightliner', 'International']
let reliableTruck = ['RAM', 'Ford', 'Freightliner']
// if it is a reliable truck then we are saving
let savedTrucks: string[] = [];
for (let i = 0; i < truckInventory.length; i++) {
    if (reliableTruck.includes(truckInventory[i])) {
      savedTrucks.push(truckInventory[i]);
    }
}
console.log(savedTrucks)//[ 'RAM', 'Ford', 'Freightliner' ]
/////////////////////////////////////////////////////////////////////////////////////////
// Your mission:
// Use a for i loop to go through each item
// If item is in weapons → display "WEAPON: [item name]"
// Else if item is in defenseItems → display "DEFENSE: [item name]"
// Else → display "OTHER: [item name]"
// Think about:
// - How do you check multiple conditions?
// - What order should you check the conditions?
// - How do you display the category for each item?
let gameItems = ["sword", "shield", "potion", "armor", "bow"];
let weapons = ["sword", "bow"];
let defenseItems = ["shield", "armor"];
for (let i = 0; i < gameItems.length; i++) {
    if (weapons.includes(gameItems[i])) {
        console.log("Weapon: " + gameItems[i]);
    } else if (defenseItems.includes(gameItems[i])) {
        console.log("DEFENSE: " + gameItems[i]);
    } else { 
        console.log("OTHER:" + gameItems[i]);
    }
}//Weapon: sword
// DEFENSE: shield
// OTHER:potion
// DEFENSE: armor
// Weapon: bow
////////////////////////////////////////////////////////////////////////////////////////////////
// while loop only
// We are managing a guest list
// We want to COUNT guests whose name starts with "S"

// Task: Loop through guestList
// If name starts with 'S', increase guestCount
let guestList = ["Sam", "John", "Sophie", "Mike", "Steve", "Emma"];
let guestCount = 0;
while (guestList.length > 0) {
     let currentGuest = guestList.pop()!;
    if (currentGuest.startsWith("S")) {
        guestCount++
    
    }
}
console.log("Guests names starting with 'S': " + guestCount);
//////////////////////////////////////////////////////////////////////////////
// while loop only
// We are analyzing a list of words
// We want to COUNT words that start with 'a' or 'A'
// Task: Loop through words
// If word starts with 'a' or 'A', increase aWordsCount
let words = ["Apple", "banana", "Apricot", "orange", "avocado"];
let aWordsCount = 0;
while (words.length > 0) {
    let currentWords = words.pop()!
    if (currentWords.startsWith("a") || currentWords.startsWith("A")) {
        aWordsCount++
    }
}
console.log(aWordsCount);
////////////////////////////////////////////////////////////////////////////////////
// while and fori loop
// We are reviewing customer emails
// We want to COUNT emails that end with "gmail.com"
// Task: Loop through emails
// If email ends with "gmail.com", increase gmailCount
let emails = [  "alex@gmail.com","sara@yahoo.com","mike@gmail.com","emma@hotmail.com",];
let gmailCount = 0;
for (let i = 0; i < emails.length; i++) { 
    if (emails[i].endsWith("gmail.com")) {
        gmailCount++
    }
} console.log(gmailCount)//2
/////////////////////////////////////////////////////////////////////////////////////////////////////
let emails1 = ["alex@gmail.com","sara@yahoo.com","mike@gmail.com","emma@hotmail.com",];
let gmailCount1 = 0;
while (emails1.length > 0) {
    let currentEmail = emails1.pop()!
    if (currentEmail.endsWith("gmail.com")) {
        gmailCount1++;
    }
} console.log(gmailCount1);//2
///////////////////////////////////////////////////////////////////////////////////////////////////////
