//Create a class for LinkedInHomePage
// This class will help us test LinkedIn's professional networking functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "LinkedIn - The World's Largest Professional Network")
// Variable 2: Store the maximum connections allowed for free accounts as a whole number (like 30000 or 50000)
// Variable 3: Store the minimum profile completeness percentage for visibility as a whole number (like 75 or 85)
// Add 3 methods that perform different LinkedIn testing actions:
// Method 1: Navigate to professional dashboard
// This method takes no arguments (nothing gets passed into it)
// This method doesn't give anything back when it finishes
// When called, it should print a message saying it's loading LinkedIn dashboard
// Then print a message confirming the professional network loaded successfully
// Method 2: Calculate networking score
// This method takes two arguments: total connections as a whole number, and profile views per week as a whole number
// This method gives back networking effectiveness score as a whole number
// Calculate score: (total connections ÷ 100) + (profile views × 2)
// Give back the calculated score as a whole number (use Math.round to remove decimals)
// Method 3: Filter job postings by industry and experience level
// This method takes two arguments: desired industry as text (like "tech" or "finance"), and minimum experience years as a whole number
// This method gives back a list of matching job titles (multiple pieces of text)
// STEP 1: Inside the method, create an array with at least 8 different job postings with industry, title, and experience
//         Examples: "tech-Software Engineer-3", "finance-Investment Analyst-2", "tech-Product Manager-5", "healthcare-Nurse-1", "finance-Financial Advisor-4", "tech-Data Scientist-6", "marketing-Brand Manager-2", "tech-DevOps Engineer-4"
// STEP 2: Create an empty array to store jobs that match both criteria
// STEP 3: Write a for loop that goes through each job posting in the array
// STEP 4: Inside the loop, split the current job posting by "-" to get parts: [industry, title, experience]
// STEP 5: Check if the industry part equals the desired industry
// STEP 6: Convert the experience part to a number and check if it's <= minimum experience years (jobs you qualify for)
// STEP 7: If BOTH the industry matches AND you meet the experience requirement, add the title part to your matching array
// STEP 8: After the loop finishes, give back the array of matching job titles
// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it
// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it
class LinkedInHomePage {
  expectedHomePageTitle: string =
    "LinkedIn - The World's Largest Professional Network";
  maxConnectionsFreeAccount: number = 30000;
  minProfileCompleteness: number = 75;

  navigateToProfessionalDashboard(): void {
    console.log("it's loading LinkedIn dashboard");
    console.log("the professional network loaded successfully");
  }
  networkingScore(
    totalConnections: number,
    profilesViewsPerWeek: number
  ): number {
    let score = totalConnections / 100 + profilesViewsPerWeek * 2;
    return Math.round(score);
  }
  postingsByIndustryAndExperience(
    desiredIndustry: string,
    minExperience: number
  ): string[] {
    let jobsList = [
      "tech-Software Engineer-3",
      "finance-Investment Analyst-2",
      "tech-Product Manager-5",
      "healthcare-Nurse-1",
      "finance-Financial Advisor-4",
      "tech-Data Scientist-6",
      "marketing-Brand Manager-2",
      "tech-DevOps Engineer-4",
    ];
    let jobsIndustryAndExperience: string[] = [];
    for (let i = 0; i < jobsList.length; i++) {
      let parts = jobsList[i].split("-");
      let industry = parts[0];
      let title = parts[1];
      let experience = parseFloat(parts[2]);
      if (industry === desiredIndustry && experience >= minExperience) {
        jobsIndustryAndExperience.push(title);
      }
    }
    return jobsIndustryAndExperience;
  }
}

let linkInPage = new LinkedInHomePage(); 
console.log(linkInPage.expectedHomePageTitle);//LinkedIn - The World's Largest Professional Network
console.log(linkInPage.maxConnectionsFreeAccount);//30000
console.log(linkInPage.minProfileCompleteness);//75
linkInPage.navigateToProfessionalDashboard();//it's loading LinkedIn dashboard
linkInPage.networkingScore(20,5);//the professional network loaded successfully
linkInPage.postingsByIndustryAndExperience("tech", 2);
console.log(linkInPage.networkingScore(20, 5));

