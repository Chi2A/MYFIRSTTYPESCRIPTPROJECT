// Create a class for CostcoTestPage
// This class will help us test Costco's website functionality

// Add 3 variables to store important testing data:
// Variable 1: Store the store location name as text (like "Costco Wholesale Seattle")
// Variable 2: Store the membership fee amount as a whole number (like 60 or 120)
// Variable 3: Store the maximum bulk quantity allowed per item as a whole number (like 50 or 100)

// Method 1: Check store hours
// This method takes no arguments (nothing gets passed into it)
// This method doesn't give anything back when it finishes
// When called, it should print the store location name
// Then print a message about store hours (like "Store open 10am-8pm")

// Method 2: Calculate membership savings
// This method takes two arguments: original price as a decimal number, and member discount percentage as a whole number
// This method gives back the savings amount as a decimal number
// Calculate how much money is saved: (original price × discount percentage ÷ 100)
// Give back the calculated savings amount

// Method 3: Find products by category
// This method takes one argument: category name as text (like "electronics" or "food")
// This method gives back a list of matching product names (multiple pieces of text)

// STEP 1: Inside the method, create an array with at least 6 different product names
// Examples: "electronics-TV", "food-apples", "electronics-laptop", "clothing-shirt", "food-bread", "electronics-phone"
// STEP 2: Create an empty array to store the products that match
// STEP 3: Write a for loop that starts at i = 0, goes while i is less than the array length, and increases i by 1 each time
class CostcoTestPage {
  storeLocationName: string = "Costco Wholesale Seattle";
  membershipFeeAmount: number = 120;
  maxBulkQuantityPerItem: number = 100;
  checkStoreHours(): void {
    console.log("Store name - ", this.storeLocationName);
    console.log("Store open 10am-8pm");
  }
  calculateMembershipSavings(
    originalPrice: number,
    memberDiscountPercentage: number
  ): number {
    return (originalPrice * memberDiscountPercentage) / 100;
  }
  findProductsByCategory(categoryName: string): string[] {
    let productName = [
      "electronics-TV",
      "food-apples",
      "electronics-laptop",
      "clothing-shirt",
      "food-bread",
      "electronics-phone",
    ];
    let productsThatMatch: string[] = [];

    for (let i = 0; i < productName.length; i++) {
      let currantProductName = productName[i];
      if (currantProductName.startsWith(categoryName)) {
        productsThatMatch.push(currantProductName);
      }
    }
    return productsThatMatch;
  }
}
let costcoPage = new CostcoTestPage();

console.log("Store Location-", costcoPage.storeLocationName);
console.log("Membership Fee-", costcoPage.membershipFeeAmount);
console.log("Max Bulk Quantity-", costcoPage.maxBulkQuantityPerItem);

costcoPage.checkStoreHours();

let savings = costcoPage.calculateMembershipSavings(250, 10);
console.log("Membership Savings:", savings);

let electronicsProducts = costcoPage.findProductsByCategory("electronics");
console.log("Electronics Products:", electronicsProducts);
////////////////////////////////////////////////////////////////////////////////////
// Create a class for SpotifyTestPage
// This class will help us test Spotify's music streaming functionality

// Add 3 variables to store important testing data:
// Variable 1: Store the current user's subscription type as text (like "Free" or "Premium")
// Variable 2: Store the maximum song skip limit per hour as a whole number (like 6 or unlimited could be 999)
// Variable 3: Store the default audio quality setting as a whole number (like 160 or 320)
// Add 3 methods that perform different Spotify testing actions:

// Method 1: Start music streaming
// This method takes no arguments (nothing gets passed into it)
// This method doesn't give anything back when it finishes
// When called, it should print a message about starting the music app
// Then print the current subscription type
// Method 2: Calculate monthly listening time
// This method takes two arguments: daily minutes listened as a whole number, and number of days in month as a whole number
// This method gives back total monthly minutes as a whole number
// Calculate total minutes: daily minutes × number of days
// Give back the calculated total
// Method 3: Filter songs by file format
// This method takes one argument: desired file extension as text (like ".mp3" or ".flac")
// This method gives back a list of matching song filenames (multiple pieces of text)
// STEP 1: Inside the method, create an array with at least 6 different song filenames including file extensions
//         Examples: "song1.mp3", "track2.flac", "music3.mp3", "beat4.wav", "tune5.mp3", "sound6.flac"
// STEP 2: Create an empty array to store the songs that match the desired file format
// STEP 3: Write a for loop that starts at i = 0, goes while i is less than the array length, and increases i by 1 each time
// STEP 4: Inside the loop, get the current song filename using the i variable
// STEP 5: Use the endsWith string method to check if the current filename ends with the desired file extension
//         Example: if desired extension is ".mp3", check if filename.endsWith(".mp3")
// STEP 6: If the filename ends with the desired extension, add it to your matching songs array
// STEP 7: After the loop finishes, give back the array of matching song filenames
// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it

class SpotifyTestPage {
  currentUserSubscriptionType: string = "Premium";
  maximumSongSkipLimitPerHour: number = 50;
  defaultAudioQualitySetting: number = 320;
  startMusicStreaming(): void {
    console.log("Welcome to Spotify");
    console.log("Current subscription type ", this.currentUserSubscriptionType);
  }

  calculateMonthlyListeningTime(
    dailyMinutesListened: number,
    numberOfDaysInMonth: number
  ): number {
    return dailyMinutesListened * numberOfDaysInMonth;
  }

  filterSongsByFileFormat(desiredFileExtension: string): string[] {
    let songNameFiles = [
      "song1.mp3",
      "track2.flac",
      "music3.mp3",
      "beat4.wav",
      "tune5.mp3",
      "sound6.flac",
    ];
    let songsMatchingFileFormat: string[] = [];
    for (let i = 0; i < songNameFiles.length; i++) {
      let currentSongFilename = songNameFiles[i];
      if (desiredFileExtension.endsWith(".mp3")) {
        songsMatchingFileFormat.push(currentSongFilename);
      }
    }
    return songsMatchingFileFormat;
  }
}
let spotPage = new SpotifyTestPage();
console.log("User subscription type is ", spotPage.currentUserSubscriptionType); //User subscription type is  Premium
console.log(
  "Max songs skipper per hour - ",
  spotPage.maximumSongSkipLimitPerHour
); //Max songs skipper per hour -  50
console.log(
  "Default Audio Quality Settings : ",
  spotPage.defaultAudioQualitySetting
); //Default Audio Quality Settings :  320
spotPage.startMusicStreaming(); //Welcome to Spotify
spotPage.filterSongsByFileFormat("");
spotPage.calculateMonthlyListeningTime(2, 2);
////////////////////////////////////////////////////////////////////////////////////////
// Create a class for AdvancedEcommerceTestPage
// This class will help us test a complex online shopping website with advanced features

// Add 4 variables to store important testing data:
// Variable 1: Store the website name as text (like "Amazon Prime" or "Best Buy Pro")
// Variable 2: Store the minimum order amount for free shipping as a decimal number (like 35.00 or 50.00)
// Variable 3: Store the maximum items allowed per cart as a whole number (like 20 or 100)
// Variable 4: Store the premium membership discount percentage as a whole number (like 10 or 15)
// Method 1: Validate user registration
// This method takes three arguments: username as text, email as text, and minimum length as a whole number
// This method gives back true or false
// Check if username length >= minimum length AND email contains "@" AND email contains "."
// If ALL three conditions are true, give back true, otherwise give back false
class AdvancedEcommerceTestPage {
  websiteName: string = "Amazon Prime";
  minimumOrderAmountForFreeShipping: number = 50.0;
  maximumItemsAllowedPerCart: number = 100;
  premiumMembershipDiscountPercentage: number = 15;

  validateUserRegistration(
    username: string,
    email: string,
    minimumLength: number
  ): boolean {
    if (
      username.length >= minimumLength &&
      email.includes("@") &&
      email.includes(".")
    ) {
      return true;
    } else {
      return false;
    }
  }
  calculateTotalOrderCostWithShipping(
    itemCost: number,
    quantity: number,
    hasPremium: boolean
  ): number {
    let subtotal = itemCost * quantity;

    if (hasPremium === true) {
      subtotal =
        subtotal - (subtotal * this.premiumMembershipDiscountPercentage) / 100;
    }
    let shipping: number;

    if (subtotal >= this.minimumOrderAmountForFreeShipping) {
      shipping = 0;
    } else {
      shipping = 5.99;
    }

    let total = subtotal + shipping;
    return total;
  }

  findProductsByMultipleCriteria(
    searchText: string,
    priceFilter: string
  ): string[] {
    let productNamesWithPrices = [
      "laptop-899",
      "mouse-25",
      "keyboard-150",
      "monitor-300",
      "tablet-199",
      "phone-699",
      "headphones-45",
      "speaker-120",
    ];

    let productsMatchingNameAndPrice: string[] = [];

    for (let i = 0; i < productNamesWithPrices.length; i++) {
      if (productNamesWithPrices[i].includes(searchText)) {
        let price = parseFloat(productNamesWithPrices[i].split("-")[1]);

        if (priceFilter === "under50" && price < 50) {
          productsMatchingNameAndPrice.push(productNamesWithPrices[i]);
        } else if (priceFilter === "over100" && price > 100) {
          productsMatchingNameAndPrice.push(productNamesWithPrices[i]);
        } else if (priceFilter === "50to100" && price >= 50 && price <= 100) {
          productsMatchingNameAndPrice.push(productNamesWithPrices[i]);
        }
      }
    }

    return productsMatchingNameAndPrice;
  }
}
let advancedPage = new AdvancedEcommerceTestPage();
console.log(advancedPage.websiteName);
console.log(advancedPage.minimumOrderAmountForFreeShipping);
console.log(advancedPage.maximumItemsAllowedPerCart);
console.log(advancedPage.premiumMembershipDiscountPercentage);

////////////////////////////////////////////////////////////////
// Create a class for BookingComHomePage
// This class will help us test Booking.com's comprehensive hotel booking platform functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "Booking.com - Official Site - The Best Hotels & Accommodations")
// Variable 2: Store the maximum reservation modifications allowed per booking as a whole number (like 3 or 5)
// Variable 3: Store the minimum property review score for quality assurance as a decimal number (like 7.5 or 8.0)

class BookingComHomePage {
    expectedHomePageTitle: string =
        "Booking.com - Official Site - The Best Hotels & Accommodations";
    maxReservationModificationsAllowedPerBooking: number = 5;
    minPropertyreviewScoreForQualityAssurance: number = 8.0;

    navigateToHotelSearchDashboard(): void {
        console.log("It's loading Booking.com hotel search dashboard");
        console.log("The accommodation booking platform loaded successfully");
    }

    calculateTotalStayCostWithTaxes(
        roomRatePerNight: number,
        numberOfNights: number
    ): number {
        let expenses = roomRatePerNight * numberOfNights;
        let resortFee = 25;
        let tax = expenses * 0.12;
        let totalCost = expenses + tax + resortFee;
        return totalCost;
    }

    filterHotelsByStarRatingAndPriceRange(
        minimumStarRating: number,
        maximumPricePerNight: number
    ): string[] {
        let hotelListWithStarRating = [
            "4-Grand Plaza Hotel-180",
            "3-City Center Inn-120",
            "5-Luxury Resort Spa-250",
            "3-Budget Comfort Lodge-95",
            "4-Business Executive Suite-160",
            "5-Premium Ocean View-220",
            "2-Economy Travel Motel-75",
            "4-Historic Boutique Hotel-140",
        ];
        let hotelMatchingBothCriteria: string[] = [];
        for (let i = 0; i < hotelListWithStarRating.length; i++) {
            let parts = hotelListWithStarRating[i].split("-");
            let stars = parseFloat(parts[0]);
            let name = parts[1];
            let price = parseFloat(parts[2]);
            if (stars >= minimumStarRating && price <= maximumPricePerNight) {
                hotelMatchingBothCriteria.push(name);
            }
        }
        return hotelMatchingBothCriteria;
    }
    findPropertiesByAmenitiesAndCancellationPolicy(
        requiredAmenity: string,
        cancellationFlexibility: string
    ): string[] {
        let properties = [
            "wifi-Downtown Business Hotel-free",
            "pool-Resort Paradise-partial",
            "gym-Fitness Center Lodge-free",
            "wifi-Tech Hub Hotel-strict",
            "pool-Tropical Getaway-free",
            "gym-Active Lifestyle Inn-partial",
            "wifi-Digital Nomad Suite-free",
            "pool-Family Fun Resort-strict",
        ];
        let matchingProperties: string[] = [];

        for (let i = 0; i < properties.length; i++) {
            let parts = properties[i].split("-");
            let amenity = parts[0];
            let propertyName = parts[1];
            let cancellation = parts[2];
            if (amenity === requiredAmenity) {
                if (cancellationFlexibility === "strict") {
                    matchingProperties.push(propertyName);
                } else if (cancellationFlexibility === "partial") {
                    if (cancellation === "free" || cancellation === "partial") {
                        matchingProperties.push(propertyName);
                    }
                } else if (cancellationFlexibility === "free") {
                    if (cancellation === "free") {
                        matchingProperties.push(propertyName);
                    }
                }
            }
        }
            
        return matchingProperties;
    }

    analyzeDealsByDiscountPercentageAndAvailability(minimumDiscountPercentage: number, maximumDaysUntilCheckIn: number): string[] {
        let deals: string[] = ["25-Early Bird Special-14", "15-Last Minute Deal-3",
            "30-Weekend Getaway Package-7", "20-Extended Stay Discount-21",
            "35-Flash Sale Limited Time-1", "10-Loyalty Member Bonus-10",
            "40-Off-Season Special-30", "18-Group Booking Deal-5"
        ];
        let matchingDeals: string[] = [];
        for (let i = 0; i < deals.length; i++) {
            let parts = deals[i].split("-");
            let discount = parseFloat(parts[0]);
            let description = parts[1];
            let days = parseFloat(parts[2]);
            if (discount >= minimumDiscountPercentage && days <= maximumDaysUntilCheckIn) {
                matchingDeals.push(description);
            }
        }
        return matchingDeals;
    }
}
//////////////////////////////////////////////////
// Create a class for LinkedInNetworkPage
// This class will help us test LinkedIn's professional networking platform functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "LinkedIn - Professional Networking Platform")
// Variable 2: Store the maximum connection requests per day as a whole number (like 100 or 200)
// Variable 3: Store the minimum profile completion percentage for visibility as a decimal number (like 85.5 or 92.3)
class LinkedInNetworkPage {
  expectedHomepageTitle = "LinkedIn - Professional Networking Platform";
  maximumConnectionRequestsPerDay: number = 200;
  minimumProfileCompletionPercentageForVisibility: number = 85.5;

  findProfilesWithNamesStartsWithASpecificLetter(
    profileNames: string [],
    startingLetter: string
  ): string[] {
    let matchinhProfiles: string[] = [];
    for (let i = 0; i < profileNames.length; i++) {
      let firstLetter = (profileNames[i].charAt(0)).toUpperCase();
        if (firstLetter === startingLetter.toUpperCase()) {
            matchinhProfiles.push(profileNames[i]);
      }
    }
      return matchinhProfiles;
  }
}
let linkedIn = new LinkedInNetworkPage(); 
//test commmit
console.log("Home page title is ", linkedIn.expectedHomepageTitle);
console.log("Max connection per day ", linkedIn.maximumConnectionRequestsPerDay);
console.log(linkedIn.minimumProfileCompletionPercentageForVisibility);
linkedIn.findProfilesWithNamesStartsWithASpecificLetter(["Alice Johnson", "Bob Smith", "Charlie Brown", "Anna Davis", "Edward Norton"], "A");
console.log(  "Profiles starting with lette 'A' ",linkedIn.findProfilesWithNamesStartsWithASpecificLetter(["Alice Johnson", "Bob Smith", "Charlie Brown", "Anna Davis", "Edward Norton"], "A"));