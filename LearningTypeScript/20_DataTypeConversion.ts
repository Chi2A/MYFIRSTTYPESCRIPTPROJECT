// If I would have a number 24 and I just need to convert this to string
//let myAge5: number = 99
// method 1
//let myAgeString: string = myAge.toString()
// method 2 -> thing it as you are filling and EMPTY string with a number
//let myAgeString2: string = '' + myAge
// method 3
//let myAgeString3: string = String(myAge)
//console.log(myAgeString)
//console.log(myAgeString2)
//console.log(myAgeString3)
/////////////////////////////////////////////////////////////////

 

let myVacation: number = 28;
let myVacationString4: string = '' + myVacation;
console.log(myVacationString4);
///////////////////
let stringNumber: string = '499';
// Method 1
let numberVersion: number = Number(stringNumber)
// Method 2 parseInt() and parseFloat()
// parseInt() is a method converting string to number
// parseFloat() is a method and converting decimal string to number
// 14 whole number AND this is 14.2 a decimal number
let numberVersion2: number = parseInt(stringNumber)
let numberVersion3: number = parseFloat(stringNumber)
console.log(numberVersion)
console.log(numberVersion2)
console.log(numberVersion3)


let value = parseInt('25');
console.log(value + 'days');
let value2 = parseFloat('19.5')
console.log(value2 + 'days');

let myWeight :number = parseFloat('127.8')
console.log(myWeight);
///////////////////////////////////////////////////
//let numberPurpleMattress: number = parseFloat(purpleMattress)
//let numberPurplePillow: number = parseFloat(purplePillow)
//let numberWebAppTotal: number = parseFloat(webAppTotal)
//let expectedTotalNumber: number = numberPurpleMattress + numberPurplePillow
//if(expectedTotalNumber === numberWebAppTotal){ // 558 === 999
///    console.log('Total calculation is RIGHT.')
//}else {
//    console.log('Total calculation is FALSE.')
//}
////////////////////
// we are an automation engineer at purple.com
// we do have 3 decimal string prices
    // one is purpleMattress -> '499.99'
    // another one is purplePillow -> '59.99'
    // and the web application says the total is -> '559.98'
// we need to check if the total of purpleMattress AND purplePillow EQUALS to 559.98
// if the total matches then 'Total calculation is RIGHT.'
// otherwise 'Total calculation FAILED'
let purpleMattress: string = '499.99'
let purplePillow: string = '59.99'
let webAppTotal: string = '559.98'
let numberPurpleMattress: number = parseFloat(purpleMattress)
let numberPurplePillow: number = parseFloat(purplePillow)
let numberWebAppTotal: number = parseFloat(webAppTotal)
let expectedTotalNumber: number = numberPurpleMattress + numberPurplePillow
if (expectedTotalNumber === numberWebAppTotal) { 
    console.log('Total calculation is RIGHT');
}else {
    console.log('Total calculation FAILED.')
}
////////////////////////////////////////////////////////////////////////////////////
// we are on budget and we are saving money
// streaming services has to go
// we get rid of all the services which is more than 15 dollars
// if the streaming service is more than 15 dollars then say 'We are canceling you.'
// otherwise say 'We will keep it.'
let netflixCost: string = '13.99'
let disneyCost: string = '17.99'
let youtubePremium: string = '22.99'
// 3 separate if else

if (parseFloat(netflixCost) > 15) {
    console.log('We are canceling you');
} else { 
    console.log('We will keep it');
}

if (parseFloat(youtubePremium) > 15) {
    console.log('We are canceling you');
} else {
    console.log('We will keep it');
}


if (parseFloat(disneyCost) > 15) {
    console.log('We are canceling you')
} else { 
    console.log('We will keep it');
}
///////////////////////////////////////////
// we are going to the dealer and we do have 2 different porsche taycans
//  we will buy all the porsche taycans which is less than 55000.00
// if the price is good then say 'we are buying you'
// otherwise say 'deal is off'
let porsche1: string = '53999.99'
let porsche2: string = '52999.99'

if (parseFloat(porsche1) < 55000) {
    console.log('we are buying you');
} else {
    console.log('deal is off');
}//we are buying you

    
    if (parseFloat(porsche2) < 55000) {
    console.log('we are buying you');
} else { 
    console.log('deal is off');
}//we are buying you