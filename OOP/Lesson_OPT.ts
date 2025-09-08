// create a class for wayfairHomePage
// add a variable = anything worth to store for later, can be a message, title, etc.
// add a method for searching
// it will take one argument searchText
// it will return the search results as string[]
// if the searchText is 'chair' then return something making sense
// else if the searchText is 'couch' then return something making sense

class WayFairHomePage {
  pagePopUpMessage: string = "Get extra 10% off";
  searchItem(itemName: string): string[] {
    console.log("Searching for item " + itemName);

    if (itemName === "couch") {
      return ["Leather Couch", "Small Couch", "Big Couch"];
    } else if (itemName === "chair") {
      return ["Kitchen Chair", "Dining Chair", "Steady Chair"];
    } else {
      return ["No results  for " + itemName];
    }
  }

  // it will take 2 arguments username and password
  // it will return nothing
  // if the username length is less then 3 print 'Bad username!'
  // else 'Good username!'
  // if the password length is less then 8 'Bad password!'
  // else 'Good password!'

  checkingUserNameAndPassword(username: string, password: string): void {
    if (username.length < 3) {
      console.log("Bad username!");
    } else {
      console.log("Good username!");
    }

    if (password.length < 8) {
      console.log("Bad password!");
    } else {
      console.log("Good password!");
    }
  }
}
//////////////////////////////////////////////////////////////
// Create a class called NetflixHomePage
// Add one property (variable) for the expected homepage message: 'Netflix'
// Add one method called clickWatchNowButton() that prints 'Clicking Watch Now button...'
// Create an object from your class and test the method
class NetflixHomePage {
  homePageMessage: string = "Netflix";
  clickWatchNowButton(): void {
    console.log("Clicking Watch Now button...");
  }
}
let netflixPageCopy = new NetflixHomePage();
console.log(netflixPageCopy.clickWatchNowButton); //clickWatchNowButton
//////////////////////////////////////////////////////////////////////////////////
// Create a class called AmazonSearchPage
// Add one property for expected search page title: 'Amazon'
// Add one method called searchForProduct(productName: string): void
// The method should print 'Searching for ' + productName
// Create an object and test the method with 'laptop' and 'books'

// Your mission:
// - Create the class with the property
// - Create a method that takes an argument (like our GoogleSearchPage example)
// - Test your method with two different products
// - Follow the exact same pattern as our examples
class AmazonSearchPage {
  searchPageTitle: string = "Amazon ";
  searchForProduct(productName: string): void {
    console.log("Searching for " + productName);
  }
}
let amazonPageCopy = new AmazonSearchPage();
amazonPageCopy.searchForProduct("laptop"); //Searching for laptop
amazonPageCopy.searchForProduct("books"); //Searching for books
///////////////////////////////////////////////////////////////////////
// Create a class called CarsLoginTestPage
// Add three properties for validation:
// - yourNameHere : string = 'Sign In to Cars.com'
// - yourNameHere : string = 'Invalid username or password'
// - yourNameHere : string = 'Welcome to Cars.com!'
// 1. navigateToLoginPage(): void - prints 'Navigating to Cars.com login page...'
// 2. enterCredentials(username: string, password: string): void
//    - prints 'Entering username: ' + username
//    - prints 'Entering password: ' + password
// create a copy of the class and store it
// call methods and print the variables
class CarsLoginTestPage {
  loginPageMessage: string = "Sign In to Cars.com";
  wrongCredentialsMessage: string = "Invalid username or password";
  welcomeMessage: string = "Welcome to Cars.com!";
  navigateToLoginPage(): void {
    console.log("Navigating to Cars.com login page...");
  }
  typeInCredentials(username: string, password: string): void {
    console.log("Entering username: " + username);
    console.log("Entering password: " + password);
  }
}

let carsLoginPageCopy = new CarsLoginTestPage();
carsLoginPageCopy.navigateToLoginPage(); //Navigating to Cars.com login page...
carsLoginPageCopy.typeInCredentials("Emma", "tr234"); //Entering username: Emma//Entering password: tr234
console.log(carsLoginPageCopy.loginPageMessage); //Sign In to Cars.com
console.log(carsLoginPageCopy.wrongCredentialsMessage); //Invalid username or password
console.log(carsLoginPageCopy.welcomeMessage); //Welcome to Cars.com!
//////////////////////////////////////////////////////
// Create a class called YouTubePage
// Add one property for expected page message: 'YouTube'
// Add three methods:
// 1. playVideo(): void - prints 'Playing video...'
// 2. pauseVideo(): void - prints 'Pausing video...'
// 3. likeVideo(): void - prints 'Clicking like button...'
// Create an object and test ALL three methods
// class YouTubePage {
//     expectedPageMessage: string = "YouTube";
//      playVideo(): void {
// console.log("Playing video...")}

// pauseVideo(): void {
// console.log("Pausing video...")}
// likeVideo(): void {
// console.log('Clicking like button...")}
// let youVideoPage= new YouTubePage ()
////////////////////////////////////////////////////////////////////
// Create a class for testing the Chick-fil-A mobile order login page
// Add three properties for validation:
// - The expected title text that should appear on the login screen
// - The message shown when login fails
// - The message shown when login succeeds
// 1. A method to navigate to the Chick-fil-A login screen
//    - It should print a message showing that the app is moving to the login page
// 2. A method to input the username and password
//    - It should print both the username and password being typed
// create a copy of your class
// and print class variables
// and call the 2 methods
class ChickfilAMobOrderLoginPage {
  expectedTitleText: string = "Welcome to Chick Mobile Ordering";
  loginFailsMessage: string = "cluck, cluck, cluck, try again :( ";
  loginSucceedsMessage: string = "Bok- bok , here you are";
  navigateToChickFilALoginPage(): void {
    console.log(" Welcome to Chick Login Page");
  }
  enterCredentials(username: string, password: string): void {
    console.log(
      "Your username ' " +
        username +
        " ' and your password ' " +
        password +
        "  ' are being accepted"
    );
  } //Your username ' chix ' and your password ' 23456  ' are being accepted
}
let chickLoginMobPage = new ChickfilAMobOrderLoginPage();

chickLoginMobPage.navigateToChickFilALoginPage(); //Welcome to Chick Mobile Ordering
chickLoginMobPage.enterCredentials("chix", "23456"); //Welcome to Chick Login Page
console.log(chickLoginMobPage.expectedTitleText); //Welcome to Chick Mobile Ordering
console.log(chickLoginMobPage.loginFailsMessage); //cluck, cluck, cluck, try again :(
console.log(chickLoginMobPage.loginSucceedsMessage); //Bok- bok , here you are
///////////////////////////////////////////////////////////////////////////////////////////
// Create a class for YouTubeTestPage
// This class will help us test YouTube's website functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected page title that should appear when YouTube loads (as text)
// Variable 2: Store the default video quality setting as a whole number (like 720 or 1080)
// Variable 3: Store an error message that appears when something goes wrong (as text)
// Add 3 methods that perform different YouTube testing actions:
// Method 1: Navigate to YouTube homepage
// This method takes no arguments (nothing gets passed into it)
// This method doesn't give anything back when it finishes
// When called, it should print a message saying 'it's going to YouTube'
// Method 2: Search for videos by category
// This method takes one argument: the search category as text (like "music" or "gaming")
// This method gives back a list of video titles (multiple pieces of text)
// If the category is "music" give back a list with 3 music video titles
// If the category is "tutorial" give back a list with 3 tutorial video titles
// If the category is anything else, give back an empty list
// Method 3: Change video playback speed
// This method takes two arguments: desired speed as a decimal number
// This method gives back either true or false
// If the desired speed is between 0.25 and 2.0, give back true
// If the desired speed is outside that range, give back false
// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it

class YouTubeTestPage {
  expectedPageTitle: string = "Loading......";
  defaultVideoQualitySet: number = 720;
  errorMessage: string = "Opppps not here";
  navigateToYouTubeHomePage(): void {
    console.log("it's going to YouTube");
  }
  
  searchCategoryOfVideo(category: string): string[] {
    if (category === "music") {
      return ["Relax music", "Night music", "Fun music"];
    } else if (category === "tutorial") {
      return [
        "How to play a YouTube video",
        "How to become a  YouTuber",
        "Become a wealthy man",
      ];
    } else {
      return [""];
    }
  }
  changeVideoPlaybackSpeed(desired: number): boolean {
    if (desired >= 0.25 && desired <= 2.0) {
      return true;
    } else {
      return false;
    }
  }
}

let youTubePageCopy = new YouTubeTestPage();
console.log(youTubePageCopy.expectedPageTitle);
console.log(youTubePageCopy.errorMessage);
console.log(youTubePageCopy.defaultVideoQualitySet);
youTubePageCopy.navigateToYouTubeHomePage();
youTubePageCopy.searchCategoryOfVideo("music");
youTubePageCopy.changeVideoPlaybackSpeed(2);

///////////////////////////////////////////////////////////////////////////////////

