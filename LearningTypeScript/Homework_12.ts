// Original languages: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'Rust']
// Array size: 7
// Removed languages (after first): ['Python', 'Java', 'C++']
// Languages after removing middle ones: ['JavaScript', 'Ruby', 'Go', 'Rust']
// Removed language (last): ['Rust']
// Final languages: ['JavaScript', 'Ruby', 'Go']
// Final array size: 3
let languages:string [] = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'Rust'];
languages.splice(1, 3);
console.log(languages);
languages.splice(3,1);
console.log(languages);
console.log(languages.length);//3
///////////////////////////////////////////////////////////////////////////////////////////
// Starting fruits: ['apple', 'banana']
// After adding orange: ['apple', 'orange', 'banana']
// After adding grape: ['grape', 'apple', 'orange', 'banana']
// After adding mango: ['grape', 'apple', 'orange', 'banana', 'mango']
// After adding kiwi: ['grape', 'kiwi', 'apple', 'orange', 'banana', 'mango']
// Final fruit basket: ['grape', 'kiwi', 'apple', 'orange', 'banana', 'mango', 'pear', 'peach']
let fruits5: string[] = ['apple', 'banana'];
fruits5.splice(1, 0, 'orange');
fruits5.splice(0, 0, 'grape');
fruits5.splice(4, 0, 'mango');
fruits5.splice(1, 0, 'kiwi');
fruits5.splice(6, 0, 'pear');
fruits5.splice(7, 0, "peach");
console.log('My final fruit basket : ' + fruits5);
