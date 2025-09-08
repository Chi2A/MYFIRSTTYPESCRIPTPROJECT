let memberAge: number = 25;
let isPremiumMember: boolean = true;
let monthlyVisits: number = 15;

if ((isPremiumMember === true) && (monthlyVisits >= 20)) {
    console.log('Premium reward: Free personal trainer session!');
} else if ((isPremiumMember === true) && (monthlyVisits >= 10)) {
    console.log(' Premium member: Access to all facilities');
} else if ((isPremiumMember === false) && (monthlyVisits >= 15)) {
    console.log('Great commitment! Consider premium upgrade');
} else if (memberAge >= 65 || memberAge <= 18) {
    console.log('Special discount available!');   
} else { 
    console.log( 'Standard membership benefits apply' );
}
//////////////////////////////////////////////////////////////////////////////
let temperature: number = 85; // in Fahrenheit
let humidity: number = 75; // percentage
let isRaining: boolean = false;

if ((temperature > 90) && (humidity > 80)) {
    console.log('Extreme heat warning! Stay indoors!');
} else if ((temperature > 85) && (humidity > 70) && (isRaining === false)) {
    console.log('Hot and humid - drink lots of water!');
} else if ((temperature < 32) && (isRaining === true)) {
    console.log('Freezing rain warning!');
} else if ((temperature >= 70 && temperature <= 85) && (isRaining === false)) {
    console.log('Perfect weather for outdoor activities!');
} else if ( isRaining === true) {
    console.log('Take an umbrella!');
} else { 
    console.log('Check weather updates regularly');
}
/////////////////////////////////////////////////////////////////////////////////

let testScore: number = 87;

// If score >= 90, print 'Grade: A - Excellent work!'
// If score >= 80, print 'Grade: B - Good job!'
// If score >= 70, print 'Grade: C - Satisfactory'
// If score >= 60, print 'Grade: D - Needs improvement'
// Otherwise (score < 60), print 'Grade: F - Please retake the test'

if (testScore >= 90) {
    console.log('Grade: A - Excellent work!');
} else if (testScore >= 80) {
console.log('Grade: B - Good job!');
} else if (testScore >= 70) {
console.log('Grade: C - Satisfactory');
} else if (testScore >= 60) {
console.log('Grade: D - Needs improvement');
} else { 
console.log('Grade: F - Please retake the test');
}
/////////////////////////////////////////////////////////
let performanceScore: number = 75;
let yearsWithCompany: number = 3;

// If score >= 95, print 'Performance: A - Outstanding! Promotion recommended!'
// If score >= 90 AND yearsWithCompany >= 2, print 'Performance: A - Excellent! Bonus eligible!'
// If score >= 90, print 'Performance: A - Excellent work!'
// If score >= 80, print 'Performance: B - Good performance, keep it up!'
// If score >= 70, print 'Performance: C - Meets expectations'
// Otherwise, print 'Performance: Needs improvement - Additional training required'

if (performanceScore >= 95) {
    console.log('Performance: A - Outstanding! Promotion recommended!');
} else if ((performanceScore >= 90) && (yearsWithCompany >= 2)) {
    console.log('Performance: A - Excellent! Bonus eligible!');
} else if (performanceScore >= 90) {
    console.log( 'Performance: A - Excellent work!');
} else if ( performanceScore >= 80) {
    console.log( 'Performance: B - Good performance, keep it up!' );
} else if (performanceScore >= 70 ) {
    console.log( 'Performance: C - Meets expectations' );
} else {
    console.log( 'Needs improvement - Additional training required' );
}
//////////////////////////////////////////////////////////////////////////////////////
let testCoverage: number = 92; // percentage
let codeStyleScore: number = 85; // out of 100
let hasDocumentation: boolean = true;

// Calculate average score from testCoverage and codeStyleScore
// If average >= 90 AND hasDocumentation is true, print 'Code Quality: A - Professional grade automation!'
// If average >= 90, print 'Code Quality: A - Excellent automation code!'
// If average >= 80, print 'Code Quality: B - Good automation practices'
// If average >= 70, print 'Code Quality: C - Acceptable, room for improvement'
// Otherwise, print 'Code Quality: Needs significant improvement'
let averageScore: number = (testCoverage + codeStyleScore) / 2;

if ((averageScore >= 90) && (hasDocumentation === true)) {
    console.log('Code Quality: A - Professional grade automation!');
} else if (averageScore >= 90) {
    console.log('Code Quality: A - Excellent automation code!');
} else if (averageScore >= 80) {
    console.log('Code Quality: B - Good automation practices');
} else if (averageScore >= 70) {
    console.log('Code Quality: C - Acceptable, room for improvement');
} else { 
    console.log('Code Quality: Needs significant improvement');
}
//////////////////////////////////////////////////////////////////////////////////////
let finalScore: number = 88;

// Grade ranges with nested if/else:
// 97-100: A+ "Perfect score!"
// 93-96: A "Excellent!"
// 90-92: A- "Very good!"
// 87-89: B+ "Good plus!"
// 83-86: B "Good!"
// 80-82: B- "Good minus!"
// 77-79: C+ "Above average!"
// 73-76: C "Average!"
// 70-72: C- "Below average!"
// Below 70: F "Failing grade"

// Use nested if/else: First check the letter grade range (A, B, C), 
// then inside each range, use nested if/else for +, regular, and - variations

///////////////////if (score >= 90) {
   // if (score >= 97) {
        // A+
   // } else if (score >= 93) {
   //     // A
   // } else {
   //     // A-
   // }
//}
if (finalScore >= 90) {
    // A range
    if (finalScore >= 97) {
        console.log('A+ - Perfect score!');
    } else if (finalScore >= 93) {
        console.log('A - Excellent!');
    } else {
        console.log('A- Very good!');
    }
}

else if (finalScore >= 80) {
    //grade B
    if (finalScore >= 87) {
        console.log('B+ , Good plus!');
    } else if (finalScore >= 83) {
        console.log('B - Good!');
    } else {
        console.log('B- Good minus!');
    }
}

else if (finalScore >= 70) {
    if (finalScore >= 77) {
        console.log('C+ Above average!');
    } else if (finalScore >= 73) {
        console.log(' C - Average!');
    } else {
        console.log('C- Below average!');
    }
}
else { 
    console.log('F - Failing grade');
}
////////////////////////////////////////////////////////////////////////////////

let technicalScore: number = 89;
let teamworkScore: number = 92;
let attendanceScore: number = 95;
let isLeadRole: boolean = false;

// First calculate overall average of the three scores
// Then use nested if/else structure:

// For A range (average >= 90):
//   If average >= 97 AND isLeadRole is true: "A+ Outstanding leader!"
//   If average >= 97: "A+ Outstanding!"
//   If average >= 93: "A Excellent!"
//   Otherwise: "A- Very good!"

// For B range (average >= 80):
//   If average >= 87 AND all individual scores >= 85: "B+ Consistent performer!"
//   If average >= 87: "B+ Good plus!"
//   If average >= 83: "B Good!"
//   Otherwise: "B- Good minus!"

// For C range (average >= 70):
//   Similar nested structure for C+, C, C-

// Otherwise: "Needs improvement"

let averageScore5: number = (technicalScore + teamworkScore + attendanceScore) / 3;

if ((averageScore5 >= 97) && (isLeadRole === true)) {
    console.log('A+ Outstanding leader!');
    if (averageScore5 >= 97) {
        console.log('A+ Outstanding!');
    } else if (averageScore5 >= 93) {
        console.log('A Excellent');
    } else {
        console.log('A- Very good!');
    }
}
else if (averageScore5 >= 80) {
    if ((averageScore5 >= 87) && technicalScore >= 85 && teamworkScore >= 85 && attendanceScore >= 85) {
        console.log('B+ Consistent performer!');
    } else if (averageScore5 >= 87) {
        console.log('B+ Good plus!');
    } else if (averageScore5 >= 83) {
        console.log('B Good!');
    } else { 
        console.log( 'B- Good minus' );
    }
}
else if (averageScore5 >= 70) {
    if (averageScore5 >= 77) {
        console.log('C+ Above average!');
    } else if (averageScore5 >= 73) {
        console.log('C - Average!');
    } else if (averageScore5 >= 70) {
        console.log('C- Below average!');
    } else {
        console.log('Needs improvement');
    }
}
    ///////////
