// I am a developer at facebook
// I am coding the login page validations
//
// first check -> when a user gives their userName
// and if it equals to - 'good user name' then
// 'You are having a good user name, now let's check your password...'
    // second check -> when the password is equal to 'good password'
    //          'You have a good password.'
    // otherwise    -> 'You don't have a good password'
// otherwise -> 'You don't have a good user name'
// userName -> 'good user name'
// password -> 'good password'

let userName: string = 'good user name';
let password: string = 'good password';

if (userName === 'good user name') {
    console.log('You are having a good user name, now lets check your password');
    if (password === 'good password') {
        console.log('You have a good password.');
    } else {
        console.log('You dont have a good password');
    }

    } else {
        console.log('You dont have a good user name');
    }
////////////////////////////////////////////////////////////
// first checking carAvailable === true -> then 'Great! We have that car in stock.'
// second check creditScore >= 650 -> true then 'Your credit is approved! You can finance the car.'
// otherwise -> 'Unfortunately, your credit score is too low for financing.'
// otherwise -> 'Sorry, that car is not available.'
let carAvailable: boolean = true; 
let creditScore1:number =  555
        
        if (carAvailable) {
    console.log('Great! We have that car in stock');
    if (creditScore1 >= 650) {
        console.log('Your credit is approved! You can finance the car.');
    } else if (creditScore1 < 650 && creditScore1 >= 550) { 
        console.log('Congrats! You still got a deal');
    }
    else {
        console.log('Unfortunately, your credit score is too low for financing.');
    }
} else { 
    console.log('Sorry, that car is not available');
        }
///////////////////////////////////////////////////////////////////////////////////////////////////
// first checking restaurantOpen === true -> then 'Welcome! We are open for business.'
//     second check money >= 25 -> true then 'You can order our premium meals!'
//     else if money >= 15 -> true then 'You can get our regular combo meals.'
//     else if money >= 8 -> true then 'You can afford our budget menu items.'
//     otherwise -> 'Sorry, you need at least $8 for our cheapest item.'
// otherwise -> 'Sorry, we are currently closed.'



////////////////////
let restaurantOpen: boolean = true;
let money: number = 97;
if (restaurantOpen) {
    console.log('Welcome! We are open for business');
    if (money < 50) {
        console.log('Sorry! Not enough money for premium selection');
    } else if ((money >= 51) && (money < 100)) {
        console.log('Enjoy our premium variety!');
    } else if (money >= 25) {
        console.log('You can order our premium meals!');
    } else if (money >= 15) {
        console.log('You can get our regular combo meals.');
    } else if (money >= 8) {
        console.log('You can afford our budget menu items');
    } else {
        console.log('Sorry, you need at least $8 for our cheapest item');
    }
    
} else {
        console.log('Sorry, we are currently closed.');
    }
///////////////////////////////////////////////////
// first checking vacationDaysAvailable >= 7 -> then 'Perfect! You have enough time for a luxury trip.'
//     second check budget >= 15000 -> true then 'Ultimate luxury package with private jet!'
//     else if budget >= 8000 -> true then 'Premium luxury with first-class flights!'
//     else if budget >= 5000 -> true then 'Standard luxury with business-class flights!'
//     otherwise -> 'Basic luxury package with economy plus flights.'
// otherwise -> 'You need at least 7 days for our luxury vacation packages.'

let vacationDaysAvailable: number = 7;
let budget: number = 2000;
if (vacationDaysAvailable === 7) {
    console.log('Perfect! You have enough time for a luxury trip.');

    if (budget >= 15000) { 
        console.log('Ultimate luxury package with private jet');
    } else if (budget >= 8000) {
        console.log('Premium luxury with first-class flights!');
    } else if (budget >= 5000) {
        console.log('Standard luxury with business-class flights!');
    } else if (budget >= 2000) { 
        console.log('Enjoy economy flight');
    }else { 
        console.log('Basic luxury package with economy plus flights');
    }

} else { 
    console.log('You need at least 7 days for our luxury vacation packages.');
}
////////////////////////////////////////////////////////////////////////////////////////
