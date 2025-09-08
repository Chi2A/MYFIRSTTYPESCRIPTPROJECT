// 1. Create an empty array called fruits
// 2. Add "apple" using push() and store the return value in a variable
// 3. Print "Now I have [number] fruits" using the return value
// 4. Add "banana" using push() and store the return value
// 5. Print "Now I have [number] fruits" using the new return value
// 6. Remove the last fruit using pop() and store what was removed
// 7. Print "I removed [fruit name]"
let fruits:string[] = [];
let addedFruit = fruits.push("Apple");
console.log("Now I have " + addedFruit + " fruits");
let addedFruit2 = fruits.push("Banana");
console.log("Now I have " + addedFruit2 + " fruits");
let leftFruit = fruits.pop();
console.log("I removed a  " + leftFruit);
///////////////////////////////////////////////////////////////////////////
// 1. Create an empty array called aboutMe
// 2. Add your name (text) using push() and store the return value
// 3. Print "My list has [number] things" using the return value
// 4. Add your age (number) using push() and store the return value
// 5. Print "My list has [number] things" using the new return value
// 6. Add true or false if you like pizza using push()
// 7. Remove the last item using pop() and store what was removed
// 8. Print "I removed [value]"
let aboutMe: (string | number | boolean)[] = [];
let myName = aboutMe.push('Kate');
console.log('My list has ' + myName + ' things');
let age: number = aboutMe.push(28);
console.log("My list has " + age + " things");
let doILikePizza =aboutMe.push(true);
let removedThingAboutMe = aboutMe.pop();
console.log("I removed - " + removedThingAboutMe);
//////////////////////////////////////////////////////////////////////////////////
// 1. Create an empty array called colors
// 2. Add "red" using push() and store the return value
// 3. Print "I have [number] colors" using the return value
// 4. Add "blue" using push() but don't store the return value
// 5. Add "green" using push() and store the return value
// 6. Print "I have [number] colors" using the new return value
// 7. Remove the last color using pop() and store what was removed
// 8. Print "I removed [color name]"
let colors: (string | number | boolean)[] = [];
let newColor= colors.push('red');
console.log('I have ' + newColor + ' color');//1 color
colors.push('blue');
let addedColor = colors.push('green');
console.log('I have ' + addedColor + ' colors');//3 colors
let removedColor = colors.pop();
console.log("I removed - " + removedColor);//green
///////////////////////////////////////////////////////////////////////////////////
// 1. Create an empty array called numbers
// 2. Add the number 1 using push() and store the return value
// 3. Print "Array length is now [number]" using the return value
// 4. Add the number 2 using push() and store the return value
// 5. Print "Array length is now [number]" using the new return value
// 6. Add the number 3 using push() without storing the return value
// 7. Remove the last number using pop() and store what was removed
// 8. Print "I removed the number [number]"
let numbers: number[] = [];
let addedNumber = numbers.push(1);
console.log('Array length is now ' + addedNumber);//1
let addedNumber2 = numbers.push(2);
console.log('Array length is now ' + addedNumber2);//2
numbers.push(3);
numbers.pop();
console.log('I removed the number - ' + numbers.pop());//2
/////////////////////////////////////////////////////////////////////////////////////
// 1. Create an empty array called pets
// 2. Add "dog" using push() and store the return value
// 3. Print "I have [number] pets" using the return value
// 4. Add "cat" using push() and store the return value
// 5. Print "I have [number] pets" using the new return value
// 6. Add "fish" using push() and store the return value
// 7. Print "I have [number] pets" using the newest return value
// 8. Remove the last pet using pop() and store what was removed
// 9. Print "I removed my [pet name]"
let pets: string[] = [];
let addedPet = pets.push('dog');
console.log('I have ' + addedPet + ' pets');//1
let addedPet2 = pets.push('cat');
console.log("I have " + addedPet2 + " pets");//2
let addedPet3 = pets.push("fish");
console.log("I have " + addedPet3 + " pets");//3
let removedPet = pets.pop();
console.log("I removed my " + removedPet);//fish
////////////////////////////////////////////////////////////////////////////////
// 1. Create an empty array called mixedList
// 2. Add your favorite food (text) using push() and store the return value
// 3. Print "My list has [number] things" using the return value
// 4. Add your lucky number using push() and store the return value
// 5. Print "My list has [number] things" using the new return value
// 6. Add true or false if you like ice cream using push()
// 7. Remove the last thing using pop() and store what was removed
// 8. Print "I removed [value]"
// 9. Add "fun" using push() and store the return value
// 10. Print "My final list has [number] things"
let mixedList: (string | number | boolean)[] = [];
let favouriteFoodList = mixedList.push('tomatoes', 'cucumbers', 'cheese', 'bread', 'peppers');
console.log("My list has " + favouriteFoodList + ' things');
let luckyNumber = mixedList.push(10);
console.log("My list has " + luckyNumber + " things");
let doILikeIceCream = mixedList.push(true);
let removedItem = mixedList.pop();
console.log("I removed  " + removedItem);
let addedFeeling = mixedList.push('fun');
console.log(mixedList);
console.log('My final list has ' + mixedList.length +  ' things');//7