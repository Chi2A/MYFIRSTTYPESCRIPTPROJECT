// I am real estate investor
// I am looking for areas and prices
// if the areas are 'schaumburg', 'wheeling', 'Hoffman' AND at the same time
// if the price is lower or equal to 300000
//         Then 'WE HAVE A DEAL'
// else
//          'We are walking away, bye'

let area: string = 'Wheeling';
let price: number = 350000;

if ((price <= 300000) && (area === 'Wheeling' || 'Schaumburg' ||  'Hoffman')) {
    console.log('WE HAVE A DEAL');
} else { 
    console.log('We are walking away, bye');
}

// kitchen -> if the kitchen is ukrainian then 'we are considering it'
    // hasBorsch -> if it has borsch then 'we are going'
    // otherwise -> 'good kitchen but there is no borsch'
// otherwise -> 'we are not going there because there is no borsch'

let cuisine: string = 'Ukrainian';
let dish: string = 'Borsch';

if (cuisine === 'Ukrainian') {
    console.log('we are considering it');
    
    if (dish === 'Borsch') {
        console.log('we are going');
    } else {
        console.log('good kitchen but there is no borsch');
    }
        } else {
            console.log('we are not going there ');
        
}

   let cuisineType: string = 'italian'; 
if (cuisineType === 'italian') {
    console.log('Welcome to our Italian restaurant!');
} else if (cuisineType === 'mexican') {
    console.log('Bienvenidos to our Mexican cantina!');
} else if (cuisineType === 'chinese') {
    console.log('Welcome to our Chinese kitchen!');
} else {
    console.log('Welcome to our general restaurant!');
}

let browserName: string = 'chrome';
if(browserName === 'chrome'){
console.log('Running tests on Chrome - excellent compatibility');
} else if(browserName === 'firefox'){
console.log('Running tests on Firefox - good compatibility');
} else if(browserName === 'safari') {
console.log('Running tests on Safari - limited features');
} else if(browserName === 'edge') {
console.log('Running tests on Edge - moderate compatibility');
} else {
console.log('Unsupported browser for testing');
}

let difficulty: string = 'hard';
let playerLevel: number = 25;
if (difficulty === 'easy'){
console.log('Relax and enjoy the game!');
} else if ((difficulty ==='medium') && (playerLevel >= 20)) {
console.log('Good challenge for your level!');
} else if ((difficulty === 'medium') && (playerLevel < 20)) {
console.log('Might be challenging for your level');
} else if (( difficulty === 'hard') && (playerLevel >= 30)){
console.log('Perfect! You can handle this!');
} else if ((difficulty === 'hard') && (playerLevel < 30)){
console.log('This will be very challenging!');
} else {
console.log('Unknown difficulty setting');
}

let age: number = 17;
let passedWrittenTest: boolean = true;

if ( (age >= 18) && (passedWrittenTest === true) ) {
    console.log('Eligible for driving license!');

} else if ( (age >= 16 && age < 18) && (passedWrittenTest === true) ) {
    console.log('Eligible for learner permit!');

} else if ( (age >= 16 ) && (passedWrittenTest === false) ) {
    console.log('Need to pass written test first');
} else { 
     console.log('Too young for any driving permit');
}
console.log(------------------------------------------------------------------------------------------------);