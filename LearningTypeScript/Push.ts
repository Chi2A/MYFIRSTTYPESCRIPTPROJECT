
// 1. Create an empty array called mixedData that can hold any data type
// 2. Add your name (string) using push()
// 3. Add your age (number) using push()
// 4. Add true or false if you like coding (boolean) using push()
// 5. Add the text "student" using push()
// 6. Add the number 100 using push()
// 7. Print the array itself
// 8. Print "My name is [name]" using index 0
// 9. Print "I am [age] years old" using index 1
// 10. Print "Do I like coding? [true/false]" using index 2
// 11. Print "My role is [role]" using index 3
// 12. Print "My score is [score]" using index 4
// 13. Print the first item (index 0) and the last item (calculate using .length)
// 14. Print "Array has [number] different pieces of information"
// 15. Remove the last item using pop() and print what was removed

let mixedData: (string | number | boolean)[]=[];
mixedData.push("Jane")
mixedData.push(25);
mixedData.push(true);
mixedData.push("student");
mixedData.push(100);
console.log(mixedData);
console.log("My name is " + mixedData[0]);
console.log("I am " + mixedData[1] + " years old ");
console.log(" Do I like coding?" + mixedData[2]);
console.log(" My role is " + mixedData[3]);
console.log(" My score is " + mixedData[4]);
console.log("Item # 1 : " + mixedData[0]);

console.log("Array has " + mixedData.length + " different pieces of information");//5
console.log(mixedData.pop());//100
//////////////////////////////////////////////////////////////////////
// create students and add your classmates.
// and remove first 3
// and remove everyone else
// print the array and make sure it is empty
let students: string[] = [];
students.push("Anna", "Alina", "Artem", "Tania", "Bogdan", "Dima");
console.log(students);
console.log("Students who left class early : " + students.splice(0, 3)); //Anna,Alina,Artem
console.log("Students who left class on Monday : " + students.splice(0, 3)); ///Tania,Bogdan,Dima
console.log(students)
let students1 = ["Anna", "Alina", "Artem", "Tania", "Bogdan", "Dima"];
console.log("Students who left class early : " +students1.splice(0, 3));
console.log(students1.splice(0, 3));
/////////////////////////////////////////////////////////
// create a player list and add 6 people -> soccer, etc. anything (ronaldo, messi)
// first half of the game 2 people from index 3 got injured
// print injured people's name
// then one person from the first index left
// then print the one left person
// then print the whole original array
let playerList = ['Messi', 'Ronaldo', 'Henry', 'Zidane', 'Modric', 'Hernandez'];
console.log("Football players that left the game : " + playerList.splice(3, 2));//Zidane,Modric
console.log("One more player got injured : " + playerList.splice(0, 1));//Messi
console.log(playerList);///[ 'Ronaldo', 'Henry', 'Hernandez' ]
////////////////////////////////////////////////////////////////////////////////////////////////////////
// Create a browser array and add "Chrome", "Firefox", "Safari", "Edge"
// Remove Safari from  browser array
// you can print here
// Remove Firefox from  browser array
// Remove Chrome from  browser array
// I want to see an array which only has 'Edge'
let browser= ["Chrome", "Firefox", "Safari", "Edge"];   
console.log("Removed browser : " + browser.splice(2, 1));
console.log("Removed browser : " + browser.splice(1, 1));
console.log("Removed browser : " + browser.splice(0, 1));
console.log(browser);//[ 'Edge' ]
/////////////////////////////////////////////////////////////////////////
// Pet store animals
// TODO: Remove "bird" from the store (it got adopted!)
// TODO: Add "hamster" between "cat" and "fish"
let pets2 = ["dog", "cat", "bird", "fish"];
console.log(pets2.splice(2, 1));
console.log(pets2.splice(2, 0, "hamster"));
console.log(pets2.splice(4, 0, 'rabbit'));
console.log(pets2);
/////////////////////////////////////////////////////////////////////////
// TODO: Add "New Comedy" after "Old Comedy"
// TODO: Add "Horror Movie" at the beginning (index 0)
// TODO: Add "Documentary" at the end using splice()
// TODO: Remove the middle movie
//let movies = ["Action Movie", "Old Comedy", "Drama"];
//movies.splice(2, 0, "New Comedy");
//movies.splice(4, 0, "Documentary");
//movies.splice(0, 0, "Horror");
//console.log(movies);
//movies.splice(2,2);
//console.log(movies);////////[ 'Horror', 'Action Movie', 'Drama', 'Documentary' ]
/////////////////////////////////////////////////////////////////////////////////

// I want to replace "Old Comedy" with "New Comedy"
// I want you guys to replace the "Drama" with "No Drama Lama"
let movies = ["Action Movie", "Old Comedy", "Drama"];
console.log(movies.splice(2, 1, "No Drama Lama"));
console.log(movies.splice(0,1,"Horror"));
movies.splice(0, 3, "Homework");
console.log(movies);



