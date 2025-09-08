let userInput: string = 'HeLLo WoRLd';
let userInputString: string = userInput.toLowerCase()
console.log(userInputString);

let upperCaseInput = userInput.toUpperCase();
console.log(upperCaseInput);
/////////////////////////////////////////////////////////
// First clean the messyInput by removing extra spaces and store in a variable
// If cleaned data.length >= 10 -> print 'Valid data entry - sufficient length'
// If cleaned data.length >= 5 -> print 'Acceptable data entry - minimum requirement met'
// If cleaned data.length >= 1 -> print 'Data too short - please provide more information'
// Otherwise -> print 'Empty data entry - input required'
// Remember: Use .trim() method and .length property with >= comparisons
let messyInput: string = '   user data entry   ';
let cleanedMessyInput: string = messyInput.trim();
console.log(cleanedMessyInput);
if (cleanedMessyInput.length >= 10) {
    console.log('Valid data entry - sufficient length');
} else if (cleanedMessyInput.length >= 5) {
    console.log('Acceptable data entry - minimum requirement met');
} else if (cleanedMessyInput.length >= 1) {
    console.log('Data too short - please provide more information');
} else {
    console.log('mpty data entry - input required');
} 
/////////////////////////////////////////////////////////////////////////////////

// Check if productDescription contains the searchTerm (case insensitive)
// If match found -> print 'Product match found: [product description]'
// Otherwise -> print 'No matching products for: [search term]'
// What is case insensitive? It means:
// - 'bluetooth' (lowercase) should match 'Bluetooth' (uppercase B)
// - 'BLUETOOTH' (all uppercase) should match 'Bluetooth' (mixed case)
// - 'BlUeToOtH' (random case) should match 'bluetooth' (all lowercase)
// Hint: You need to make both strings the same case before comparing
let productDescription: string = 'Wireless Bluetooth Headphones with Noise Cancellation';
let searchTerm: string = 'bluetooth';
let productDescriptionLower = productDescription.toLowerCase();
let searchTermLower = searchTerm.toLowerCase();
if (productDescription.includes(searchTerm)) {
    console.log('Product match found: [product description]');
} else { 
    console.log('No matching products for: [search term]');
}
/////////////////////////////////////////////////////////////////////////////////////

// Use patientID.startsWith() method to check department codes
// If patientID.startsWith('ER') === true -> print 'Emergency patient - Priority medical attention required!'
// If patientID.startsWith('CARD') === true -> print 'Cardiology patient - Heart specialist assigned'
// If patientID.startsWith('PED') === true -> print 'Pediatric patient - Child care protocols activated'
// If patientID.startsWith('SURG') === true -> print 'Surgery patient - Operating room scheduled'
// If patientID.startsWith('GEN') === true -> print 'General patient - Standard care protocols'
// Otherwise -> print 'Invalid patient ID format - Please verify and re-enter'
// Remember: Use .startsWith() method with === true comparisons
   let patientID: string = 'ER2024001';
if (patientID.startsWith('ER')=== true) {
    console.log('Emergency patient - Priority medical attention required!');
} else if (patientID.startsWith('CARD')=== true) {
    console.log('Cardiology patient - Heart specialist assigned');
} else if (patientID.startsWith('PED')=== true) {
    console.log('Pediatric patient - Child care protocols activated');
} else if (patientID.startsWith('SURG')=== true) {
    console.log('Surgery patient - Operating room scheduled');
} else if (patientID.startsWith('GEN')===true) {
    console.log('General patient - Standard care protocols');
} else { 
    console.log('Invalid patient ID format - Please verify and re-enter');
}
//////////////////////////////////////////////////////////////////////////

// Use websiteURL.endsWith() method to check domain endings
// If websiteURL.endsWith('.com') === true -> print 'Commercial website - Business or company site'
// If websiteURL.endsWith('.org') === true -> print 'Organization website - Non-profit or community site'
// If websiteURL.endsWith('.edu') === true -> print 'Educational website - School or university site'
// If websiteURL.endsWith('.gov') === true -> print 'Government website - Official government site'
// If websiteURL.endsWith('.net') === true OR websiteURL.endsWith('.io') === true -> print 'Tech website - Technology or networking site'
// If websiteURL.endsWith('.co.uk') === true OR websiteURL.endsWith('.ca') === true -> print 'Country-specific website - Regional domain'
// Otherwise -> print 'Unknown domain type - Unable to categorize website'
// Remember: Use .endsWith() method with === true and || (OR) operators
let websiteURL: string = 'https://mycompany.com';
if (websiteURL.endsWith('.com') === true) {
    console.log('Commercial website - Business or company site');
} else if (websiteURL.endsWith('.org') === true) {
    console.log('Organization website - Non-profit or community site');
} else if (websiteURL.endsWith('.edu') ===true) {
    console.log('Educational website - School or university site');
} else if (websiteURL.endsWith('.gov') === true) {
    console.log('Government website - Official government site');
} else if (websiteURL.endsWith('.net') === true || (websiteURL.endsWith('.io') === true )) {
    console.log('Tech website - Technology or networking site');
} else if (websiteURL.endsWith('.co.uk') === true || (websiteURL.endsWith('.co.uk')===true)) {
    console.log('Country-specific website - Regional domain');
} else { 
    console.log('Unknown domain type - Unable to categorize website');
}
////////////////////////////////////////////////////////////////////////

// Use string methods to check URL format and content
// If websiteURL1.startsWith('https://') === true AND websiteURL.includes('banking') === true -> print 'Secure banking website - Safe to proceed'
// If websiteURL1.startsWith('https://') === true AND websiteURL.includes('shopping') === true -> print 'Secure shopping site - SSL protected'
// If websiteURL1.startsWith('https://') === true -> print 'Secure website with HTTPS encryption'
// If websiteURL1.startsWith('http://') === true -> print 'Warning: Unsecure connection - Data may not be protected'
// Otherwise -> print 'Invalid URL format'
// Remember: 'https://' = secure protocol, 'http://' = unsecure protocol
// Use .startsWith() method, .includes() method, && for AND logic, === for exact comparison
let websiteURL1: string = 'https://secure.banking.com';
if (websiteURL1.startsWith('https://') === true && websiteURL1.includes('banking') === true) {
    console.log('Secure banking website - Safe to proceed');
} else if (websiteURL1.startsWith('https://') === true && websiteURL1.includes('shopping') === true ) {
    console.log('Secure shopping site - SSL protected');
} else if (websiteURL1.startsWith('https://') === true) {
    console.log('Secure website with HTTPS encryption');
} else if (websiteURL1.startsWith('http://') === true) {
    console.log('Warning: Unsecure connection - Data may not be protected');
} else { 
    console.log('Invalid URL format');
}
/////////////////////////////////////////////////////////////////////////////////////

// Use fullName.slice() method to extract parts of the name
// Extract first name using slice(0, spacePosition) and store in firstName variable
// Extract last name using slice(spacePosition + 1) and store in lastName variable
// If firstName.length >= 3 AND lastName.length >= 3 -> print 'Valid name format: [firstName] [lastName]'
// If firstName.length >= 2 OR lastName.length >= 2 -> print 'Acceptable name format but consider full names'
// Otherwise -> print 'Name too short - please provide full first and last name'
// Remember: Use .slice() method, .length property, >= operator, && and || operators

let fullName: string = 'John Smith';
let spacePosition: number = 4; // position of space in 'John Smith'
let firstName: string = fullName.slice(0, spacePosition);
console.log('First name: ' + firstName);

let lastName: string = fullName.slice(spacePosition + 1)
console.log('Last name: ' + lastName);

if (firstName.length >= 3 && lastName.length >= 3) {
    console.log('Valid name format: ' + firstName + ' ' +  lastName);
} else if (firstName.length>= 2 || lastName.length >= 2) {
    console.log('Acceptable name format but consider full names')
} else { 
    console.log('Name too short - please provide full first and last name');
}
/////////////////////////////////////////////////////////////////////////////////////////

// Use productCode.charAt() method to examine specific positions in the string
// Check the character at position 0 using charAt(0) and store in firstChar variable
// Check the character at position 4 using charAt(4) and store in fifthChar variable
// Check the character at position 9 using charAt(9) and store in tenthChar variable
// If firstChar === 'P' AND fifthChar === '2' -> print 'Valid product code format - Current year product'
// If firstChar === 'P' AND tenthChar === 'X' -> print 'Valid product code - Extra Large size detected'
// If firstChar === 'P' -> print 'Valid product prefix - Standard product format'
// If productCode.length >= 10 -> print 'Product code meets minimum length requirements'
// Otherwise -> print 'Invalid product code format'
// Remember: Use .charAt() method, === operator, && operator, >= operator
          
let productCode: string = 'PRD-2024-XL';
let firstChar: string = productCode.charAt(0);
console.log(firstChar);
let fifthChar: string = productCode.charAt(4);
console.log(fifthChar);
let tenthChar: string = productCode.charAt(9);
console.log(tenthChar);
if (firstChar === 'P' && fifthChar === '2') {
    console.log('Valid product code format - Current year product')
} else if (firstChar === 'P' && tenthChar === 'X') {
    console.log('Valid product code - Extra Large size detected');
} else if (firstChar === 'P') {
    console.log('Valid product prefix - Standard product format');
} else if (productCode.length >= 10) {
    console.log('Product code meets minimum length requirements');
} else { 
    console.log('Invalid product code format');
}
/////////////////////////////////////////////////////////////////////////////

// First clean the username by removing extra spaces
// Check if cleaned username.length >= 8 AND cleaned username.length <= 20 -> then 'Username length is valid'
//     Second check if cleaned username.includes('Admin') === true OR cleaned username.includes('User') === true -> then 'System account detected'
//         If accountAge >= 30 AND cleaned username.endsWith('_2024') === true -> then 'VERIFIED: Trusted admin account with current year validation!'
//         else if accountAge >= 30 -> then 'VERIFIED: Trusted admin account - consider adding year suffix'
//         else if cleaned username.endsWith('_2024') === true -> then 'PENDING: New admin account with current year validation'
//         otherwise -> 'REVIEW: Admin account requires verification'
//     else if cleaned username.startsWith('Test') === true AND accountAge < 7 -> then 'TEMPORARY: Test account - will expire soon'
//     otherwise -> 'STANDARD: Regular user account - basic permissions'
// else if cleaned username.length < 8 -> then 'USERNAME TOO SHORT: Minimum 8 characters required'
// otherwise -> 'USERNAME TOO LONG: Maximum 20 characters allowed'
let username: string = '  AdminUser_2024  ';
let accountAge: number = 45; // days since account creation
let cleanedUserName: string = username.trim();
console.log(cleanedUserName);
if (cleanedUserName.length >=8 && cleanedUserName.length <= 20) 
    console.log('Username length is valid');

if (cleanedUserName.includes('Admin')=== true || (cleanedUserName.includes('User'))===true) 
    console.log('System account detected')

if (accountAge >= 30 && cleanedUserName.endsWith('_2024') === true) {
    console.log('VERIFIED: Trusted admin account with current year validation!');
} else if (accountAge >= 30) {
    console.log('VERIFIED: Trusted admin account - consider adding year suffix');
} else if (cleanedUserName.endsWith('_2024') === true) {
    console.log('PENDING: New admin account with current year validation');
} else { 
    console.log('REVIEW: Admin account requires verification');
}

if (cleanedUserName.startsWith('Test') === true && (accountAge < 7)) {
    console.log('TEMPORARY: Test account - will expire soon')
} else { 
    console.log('STANDARD: Regular user account - basic permissions');
}

if (cleanedUserName.length < 8) {
    console.log('USERNAME TOO SHORT: Minimum 8 characters required');
} else { 
    console.log('USERNAME TOO LONG: Maximum 20 characters allowed');
}
//////////////////////////////////////////////////////////////////////////////////////











