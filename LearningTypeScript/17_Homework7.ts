let carAvailable2: boolean = true;
let creditScore: number = 680;

// first checking carAvailable === true -> then 'Great! We have that car in stock.'
//     second check creditScore >= 650 -> true then 'Your credit is approved! You can finance the car.'
//     else if creditScore >= 550 -> true then 'You qualify but need a co-signer or higher down payment.'
//     otherwise -> 'Unfortunately, your credit score is too low for financing.'
// otherwise -> 'Sorry, that car is not available.'
if (carAvailable2) {
    console.log('Great! We have that car in stock.');
    if (creditScore >= 650) {
        console.log('Your credit is approved! You can finance the car');
    } else if (creditScore >= 550) {
        console.log('You qualify but need a co-signer or higher down payment');
    } else { 
        console.log('Unfortunately, your credit score is too low for financing.');
    }
} else { 
    console.log( 'Sorry, that car is not available' );
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let carAvailable3: boolean = true;
let creditScore3: number = 720;
let annualIncome: number = 75000;
let carType: string = 'luxury'; // 'economy', 'mid-range', 'luxury'

// first checking carAvailable === true -> then 'Excellent! Your desired car is in stock.'
//     second check creditScore >= 750 AND annualIncome >= 80000 -> true then 'VIP financing approved with 0% interest!'
//     else if creditScore >= 700 AND carType !== 'luxury' -> true then 'Great credit! Standard financing approved.'
//     else if creditScore >= 650 -> true then 'Good credit! Financing approved with competitive rates.'
//     else if creditScore >= 550 AND annualIncome >= 50000 -> true then 'Conditional approval - requires 20% down payment.'
//     otherwise -> 'Unable to approve financing at this time.'
// otherwise -> 'Unfortunately, that car model is currently out of stock.'
if (carAvailable3) {
    console.log('Excellent! Your desired car is in stock.');
    if ((creditScore3 >= 750) && (annualIncome >= 80000)) {
        console.log('VIP financing approved with 0% interest!');
    } else if ((creditScore3 >= 700) && (carType !== 'luxury')) {
        console.log('Great credit! Standard financing approved');
    } else if (creditScore3 >= 650) {
        console.log('Good credit! Financing approved with competitive rates.');
    } else if ((creditScore3 >= 550) && (annualIncome >= 50000)) {
        console.log('Conditional approval - requires 20% down payment.');
    } else {
        console.log('Unable to approve financing at this time.');
    }
} else { 
    console.log('Unfortunately, that car model is currently out of stock.');
}
////////////////////////////////////////////////////////////////////////////////////
let restaurantOpen: boolean = true;
let money: number = 18;

// first checking restaurantOpen === true -> then 'Welcome to Tony's Pizza! We are open for business.'
//     second check money >= 25 -> true then 'You can order our premium specialty pizzas!'
//     else if money >= 15 -> true then 'You can get our delicious combo meals with pizza and sides!'
//     else if money >= 8 -> true then 'You can afford our budget personal pizzas!'
//     otherwise -> 'Sorry, you need at least $8 for our cheapest pizza.'
// otherwise -> 'Sorry, we are currently closed. Come back during business hours!'
if (restaurantOpen) {
    console.log('Welcome to Tonys Pizza! We are open for business.');
    if (money >= 25) {
        console.log('You can order our premium specialty pizzas!');
    } else if (money >= 15 ) {
        console.log('You can get our delicious combo meals with pizza and sides!');
    } else if ( money >= 8) {
        console.log('You can afford our budget personal pizzas!');
    } else { 
         console.log('Sorry, you need at least $8 for our cheapest pizza.');
    }
} else { 
     console.log('Sorry, we are currently closed. Come back during business hours!');
}
/////////////////////////////////////////////////////////////////////////////////////////
let restaurantOpen2: boolean = true;
let money3: number = 45;
let hasReservation: boolean = false;
let isVIPMember: boolean = true;
let partySize: number = 4;

// first checking restaurantOpen === true -> then 'Welcome to Le Gourmet! We are delighted to serve you.'
//     second check isVIPMember === true AND money >= 50 -> true then 'VIP table ready! Our chef's special tasting menu awaits!'
//     else if hasReservation === true AND money >= 30 -> true then 'Your reserved table is ready! Enjoy our full menu.'
//     else if money >= 40 AND partySize <= 4 -> true then 'We have a table available! Premium dining experience.'
//     else if money >= 20 AND partySize <= 2 -> true then 'Small table available! Regular menu options.'
//     else if partySize > 6 -> true then 'Large parties require reservations. Please call ahead.'
//     otherwise -> 'We are fully booked or your budget may not cover our current offerings.'
// otherwise -> 'Sorry, we are closed. Please visit us during operating hours.'

if (restaurantOpen2) {
    console.log('Welcome to Le Gourmet! We are delighted to serve you.');
    if (isVIPMember && money3 >= 50) {
        console.log('VIP table ready! Our chefs special tasting menu awaits!');
    } else if (hasReservation && money3 >= 30) {
        console.log('Your reserved table is ready! Enjoy our full menu.');
    } else if (money3 >= 40 && partySize <= 4 ) {
        console.log('We have a table available! Premium dining experience.');
    } else if (money3 >= 20 && partySize <= 2 ) {
        console.log('Small table available! Regular menu options.');
    } else if (partySize > 6) {
        console.log('Large parties require reservations. Please call ahead.');
    } else {
        console.log('We are fully booked or your budget may not cover our current offerings.');
    }
} else { 
    console.log('Sorry, we are closed. Please visit us during operating hours.'); 
}
///////////////////////////////////////////////////////////////////////////////////
let vacationDaysAvailable1: number = 10;
let budget1: number = 8500;

// first checking vacationDaysAvailable >= 7 -> then 'Perfect! You have enough time for a luxury tropical getaway.'
//     second check budget >= 15000 -> true then 'Ultimate paradise package with private jet and overwater villa!'
//     else if budget >= 8000 -> true then 'Premium tropical resort with first-class flights and ocean view suite!'
//     else if budget >= 5000 -> true then 'Deluxe beach resort with business-class flights and beachfront room!'
//     otherwise -> 'Standard tropical package with economy flights and garden view room.'
// otherwise -> 'You need at least 7 days for our tropical vacation packages.'
if (vacationDaysAvailable1 >= 7) {
    console.log('Perfect! You have enough time for a luxury tropical getaway.');
    if (budget1 >= 15000) {
        console.log('Ultimate paradise package with private jet and overwater villa!');
    } else if (budget1 >= 8000) {
        console.log('Premium tropical resort with first-class flights and ocean view suite!');
    } else if (budget1 >= 5000) {
        console.log('Deluxe beach resort with business-class flights and beachfront room!');
    } else {
        console.log('Standard tropical package with economy flights and garden view room.');
    }
} else { 
    console.log('You need at least 7 days for our tropical vacation packages.');
}
/////////////////////////////////////////////////////////////////////////////////////////////
let vacationDaysAvailable2: number = 21;
let budget3: number = 25000;
let loyaltyStatus: string = 'platinum'; // 'bronze', 'silver', 'gold', 'platinum', 'diamond'
let seasonalPeriod: string = 'peak'; // 'off-season', 'regular', 'peak'
let groupSize: number = 2;
let hasSpecialRequests: boolean = true; // dietary, accessibility, celebration, etc.
let preferredActivity: string = 'adventure'; // 'relaxation', 'culture', 'adventure', 'luxury'

// first checking vacationDaysAvailable >= 14 -> then 'Outstanding! Extended vacation allows for our most exclusive experiences.'
//     second check loyaltyStatus === 'diamond' AND budget >= 50000 -> then 'DIAMOND ELITE: Private jet world tour with personal concierge and unlimited luxury!'
//     else if loyaltyStatus === 'platinum' AND budget >= 30000 AND seasonalPeriod !== 'peak' -> then 'PLATINUM EXCLUSIVE: Multi-destination luxury with off-season perks and VIP access!'
//     else if budget >= 25000 AND preferredActivity === 'luxury' AND hasSpecialRequests === true -> then 'ULTRA-PREMIUM: Fully customized luxury experience with personal staff and exclusive venues!'
//     else if budget >= 20000 AND groupSize <= 4 AND loyaltyStatus !== 'bronze' -> then 'PREMIUM ELITE: Private villa with chef, luxury transport, and curated experiences!'
//     else if budget >= 15000 AND seasonalPeriod === 'off-season' -> then 'LUXURY ADVANTAGE: High-end resorts with off-season pricing and exclusive access!'
//     else if budget >= 12000 AND preferredActivity === 'adventure' -> then 'ADVENTURE LUXURY: Premium adventure tours with luxury accommodations and expert guides!'
//     else if budget >= 8000 -> then 'DELUXE EXPERIENCE: High-quality accommodations with selected premium amenities!'
//     otherwise -> 'STANDARD LUXURY: Beautiful resorts with luxury touches within your budget.'
// else if vacationDaysAvailable >= 7 -> then 'Good time frame, but consider extending to 14+ days for our premium multi-destination packages.'
// otherwise -> 'Our luxury experiences require a minimum of 7 days to ensure proper relaxation and enjoyment.'
if (vacationDaysAvailable2 >= 14) {
    console.log('Outstanding! Extended vacation allows for our most exclusive experiences');
    
    if ((loyaltyStatus === 'diamond') && (budget3 >= 50000)) {
        console.log('DIAMOND ELITE: Private jet world tour with personal concierge and unlimited luxury!');
    } else if ((loyaltyStatus === 'platinum') && (budget3 >= 30000) && (seasonalPeriod !== 'peak')) {
        console.log('PLATINUM EXCLUSIVE: Multi-destination luxury with off-season perks and VIP access!');
    } else if ((budget3 >= 25000) && (preferredActivity === 'luxury') && (hasSpecialRequests)) {
        console.log('ULTRA-PREMIUM: Fully customized luxury experience with personal staff and exclusive venues!');
    } else if ((budget3 >= 20000) && (groupSize <= 4) && (loyaltyStatus !== 'bronze')) {
        console.log('PREMIUM ELITE: Private villa with chef, luxury transport, and curated experiences!');
    } else if ((budget3 >= 15000) && (seasonalPeriod === 'off-season')) {
        console.log('LUXURY ADVANTAGE: High-end resorts with off-season pricing and exclusive access!');
    } else if ((budget3 >= 12000) && (preferredActivity === 'adventure')) {
        console.log('ADVENTURE LUXURY: Premium adventure tours with luxury accommodations and expert guides!');
    } else if (budget3 >= 8000) {
        console.log('DELUXE EXPERIENCE: High-quality accommodations with selected premium amenities!');
    } else {
        console.log('STANDARD LUXURY: Beautiful resorts with luxury touches within your budget.');
    }

} else if (vacationDaysAvailable2 >= 7) { 
        console.log('Good time frame, but consider extending to 14+ days for our premium multi-destination packages.');
} else { 
    console.log('Our luxury experiences require a minimum of 7 days to ensure proper relaxation and enjoyment.');
}
////////////////////////////////////////////////////////////////////////////////////////
let vacationDaysAvailable3: number = 10;
let budget4: number = 8500;

// first checking vacationDaysAvailable3 >= 7 -> then 'Perfect! You have enough time for a luxury tropical getaway.'
//     second check budget4 >= 15000 -> true then 'Ultimate paradise package with private jet and overwater villa!'
//     else if budget4 >= 8000 -> true then 'Premium tropical resort with first-class flights and ocean view suite!'
//     else if budget4 >= 5000 -> true then 'Deluxe beach resort with business-class flights and beachfront room!'
//     otherwise -> 'Standard tropical package with economy flights and garden view room.'
// otherwise -> 'You need at least 7 days for our tropical vacation packages.'

if (vacationDaysAvailable3 >= 7) {
    console.log('Perfect! You have enough time for a luxury tropical getaway');
    if (budget4 >= 15000) {
        console.log('Ultimate paradise package with private jet and overwater villa');
    } else if (budget4 >= 8000) {
        console.log('Premium tropical resort with first-class flights and ocean view suite!');
    } else if (budget4 >= 5000) {
        console.log('Deluxe beach resort with business-class flights and beachfront room!');
    } else { 
        console.log('tandard tropical package with economy flights and garden view room.');
    }
} else { 
    console.log('You need at least 7 days for our tropical vacation packages.');
}