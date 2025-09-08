// Create a class called YouTubePage
// Add one property for expected page message: 'YouTube'
// Add three methods:
// 1. playVideo(): void - prints 'Playing video...'
// 2. pauseVideo(): void - prints 'Pausing video...'
// 3. likeVideo(): void - prints 'Clicking like button...'
// Create an object and test ALL three methods
class YouTubePage {
  expectedPageMessage: string = "YouTube";
  playVideo(): void {
    console.log("Playing video..."); //Playing video...
  }
  pauseVideo(): void {
    console.log("Pausing video..."); //Clicking like button...
  }
  likeVideo(): void {
    console.log("Clicking like button..."); //Pausing video...
  }
}
let youVideoPage = new YouTubePage();
youVideoPage.playVideo();//Playing video...
youVideoPage.likeVideo();//Clicking like button...
youVideoPage.pauseVideo();//Pausing video...
////////////////////////////////////////////////////////////////////////////
// Create a class called InstagramPage
// Add two properties:
// - expectedTitle: string = 'Instagram'
// - expectedWelcomeMessage: string = 'Welcome to Instagram'
// // Add four methods:
// 1. clickHomeButton(): void - prints 'Clicking home button...'
// 2. typeUsernameAndPassword(username: string, password: string): void 
//    - prints 'typing username = ' + username
//    - prints 'typing password = ' + password
 //3. validatePostText(postText: string): boolean
//    - check if postText contains 'a'
//    - if yes return true, else return false
// 4. validateUsernameLength(username: string): boolean
//    - check if username length is more than 5
//    - if yes return true, else return false
// Create an object and test all methods:
// - Test clickHomeButton()
// - Test typeUsernameAndPassword() with 'john_doe' and 'password123'
// - Test validatePostText() with 'amazing photo' and print the result
// - Test validateUsernameLength() with 'bob' and print the result
class InstagramPage {
  expectedTitle: string = "Instagram";
  expectedWelcomeMessage: string = "Welcome to Instagram";
  clickHomeButton(): void {
    console.log("Clicking home button ... ");
  }
  typeUsernameAndPassword(username: string, password: string): void {
    console.log("Typing username = " + username);
    console.log("Typing password = " + password);
  }
  validatePostText(postText: string): boolean {
    if (postText.includes("a")) {
      return true;
    } else {
      return false;
    }
  }
    validateUsernameLength(username: string): boolean { 
        if (username.length > 5) {
            return true
        } else { 
            return false
        }
    }
}
let instaPage = new InstagramPage();
instaPage.clickHomeButton();//Clicking home button ... 
instaPage.typeUsernameAndPassword("andy", "ty$%@");//Typing username = andy; Typing password = ty$%@
let result = instaPage.validatePostText("amazing photo");
console.log("Text is " , result);//Text is true
let isUserNameLongEnough =instaPage.validateUsernameLength("bob");
console.log("User name length is ", isUserNameLongEnough);//User name length is false
//////////////////////////////////////////////////////////////////////////////////////////////
// Create a class called UserLoginTestPage
// Add three properties for validation:
// - expectedLoginTitle: string = 'Sign In'
// - expectedErrorMessage: string = 'Invalid credentials'
// - expectedSuccessMessage: string = 'Welcome back!'
//
// Add six methods for testing:
// 1. navigateToLoginPage(): void - prints 'Navigating to login page...'
// 2. enterCredentials(username: string, password: string): void 
//- prints 'Entering username: ' + username
//    - prints 'Entering password: ' + password
// 3. clickLoginButton(): void - prints 'Clicking login button...'
// 4. validateCredentials(username: string, password: string, minLength: number): boolean
//    - check if BOTH username length >= minLength AND password length >= minLength
//    - if yes return true, else return false
// 5. validateEmailFormat(email: string): boolean
//    - check if email contains '@'
//    - if yes return true, else return false
// 6. validatePasswordStrength(password: string): boolean
//    - check if password length is more than 8
//    - if yes return true, else return false
// Create an object and perform complete testing:
// 1. Navigate to page
// 2. Enter credentials with 'testuser@email.com' and 'password123'
// 3. Click login button
// 4. Test validateCredentials() with 'bob', 'pass', 5 and print result
// 5. Test validateEmailFormat() with 'test@email.com' and print result
// 6. Test validatePasswordStrength() with 'short' and print result
class UserLoginTestPage {
  expectedLoginTitle: string = "Sign In";
  expectedErrorMessage: string = "Invalid credentials";
  expectedSuccessMessage: string = "Welcome back!";
  navigateToLoginPage(): void {
    console.log("Navigating to login page...");
  }
  enterCredentials(username: string, password: string): void {
    console.log("Entering username: ", username);
    console.log("Entering password: ", password);
  }
  clickLoginButton(): void {
    console.log("Clicking login button...");
  }
  validateCredentials(
    username: string,
    password: string,
    minLength: number
  ): boolean {
    if (username.length >= minLength && password.length >= minLength) {
      return true;
    } else {
      return false;
    }
  }
  validateEmailFormat(email: string): boolean {
    if (email.includes("@")) {
      return true;
    } else {
      return false;
    }
  }
    validatePasswordStrength(password: string): boolean { 
        if (password.length > 8) {
            return  true
        }else return false
    }
}
let userLogPage = new UserLoginTestPage();
userLogPage.navigateToLoginPage();
userLogPage.clickLoginButton();
let credentialsResult = userLogPage.validateCredentials('testuser@email.com', 'password123',5)
console.log("Credentials - ", credentialsResult);//Credentials -  true
let emailFormatResult = userLogPage.validateEmailFormat('test@email.com');
console.log("Email is ", emailFormatResult);//Email is  true
let passwordStrengthResult = userLogPage.validatePasswordStrength('short');
console.log("Password strength is ", passwordStrengthResult);//Password strength is  false
//////////////////////////////////////////////////////////////////////////////////////////
// Create a class called EcommerceProductPage
// Add four properties:
// - productTitle: string = 'Product Details'
// - expectedPrice: string = '$99.99'
// - expectedStock: string = 'In Stock'
// - expectedRating: string = '4.5 stars'
//
// Add five methods:
// 1. viewProductDetails(): void - prints 'Viewing product details...'
// 2. selectQuantity(quantity: string): void - prints 'Selecting quantity: ' + quantity
// 3. addToCart(): void - prints 'Adding product to cart...'
// 4. selectColor(color: string): void - prints 'Selecting color: ' + color
// 5. checkoutProduct(): void - prints 'Proceeding to checkout...'
    // Create an object and perform a complete shopping test:
// 1. View details
// 2. Select quantity '2'
// 3. Select color 'blue'  
// 4. Add to cart
// 5. Checkout
class EcommerceProductPage {
    productTitle: string = "Product Details";
    expectedPrice: string = "$99.99";
    expectedStock: string = "In Stock";
    expectedRating: string = "4.5 stars";

    viewProductDetails(): void {
        console.log("Viewing product details...");
    }
    selectQuantity(quantity: number): void {
        console.log("Selecting quantity: ", quantity);
    }
    addToCart(): void {
        console.log("Adding product to cart...");
    }
    selectColor(color: string): void {
        console.log("Selecting color: ", color);
    }
    checkoutProduct(): void {
        console.log("Proceeding to checkout...");
    }
}
let eCommerPage = new EcommerceProductPage();
eCommerPage.viewProductDetails();
eCommerPage.selectQuantity(2);
eCommerPage.selectColor('blue');
eCommerPage.addToCart();
eCommerPage.checkoutProduct();
///////////////////////////////////////////////////////////////////////////////////////////////



