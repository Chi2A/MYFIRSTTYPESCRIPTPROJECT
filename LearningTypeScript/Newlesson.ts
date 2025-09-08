let jobDescription: string = 'Role: [Senior QA Automation Engineer] Location: Remote';
// 1. Extract the role name (between [ and ])
// 2. If startsWith "Senior" AND includes "Automation" → "High-level Automation Role"
//    Else if includes "QA" → "QA Role"
//    Else → "Other Role"
let jobDescriptionStart: number = jobDescription.indexOf('[');
let jobDescriptionEnd: number = jobDescription.lastIndexOf(']');
let newJobDescription: string = jobDescription.slice(jobDescriptionStart + 1, jobDescriptionEnd)
if (newJobDescription.startsWith("Senior") && newJobDescription.includes("Automation")) {
    console.log('High-level Automation Role');
} else if (newJobDescription.includes("QA")) {
    console.log('QA Role');
} else { 
    console.log('Other Role');
}/////High-level Automation Role
///////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Extract percentage (between [ and %)
// 2. Convert to number
// 3. If usage >= 90 →
//       if includes "backups" → "Critical: Backups consuming space"
//       else → "Critical: Free up space"
//    Else if usage >= 75 → "Warning: High usage"
//    Else → "Normal usage"
let storageData: string = 'Storage: [93%] includes backups';
let storageDataStarts: number = storageData.indexOf('[');
let storageDataEnds: number = storageData.indexOf('%');
let newData: string = storageData.slice(storageDataStarts + 1, storageDataEnds);
let data: number = parseInt(newData);
if (data >= 90) {
    console.log('Critical: Backups consuming space');
    if (data >= 75) {
        console.log('Warning: High usage')
    } else {
        console.log('Normal usage');
    } 
} else {
        console.log('Critical: Free up space');
    }//////Warning: High usage
//////////////////////////////////////////////////////////////////////////////////////////////
// 1. Extract label (between [ and ])
// 2. Use trim() to clean spaces
// 3. Use replace to normalize spacing
// 4. If startsWith "Express" →
// if includes "Fragile" → "Express Fragile Shipping"
// else → "Express Shipping"
// Else →
// if includes "insurance" → "Standard Shipping with Insurance"
// else → "Standard Shipping"

let labelData: string = 'Label: [  Express  -  Fragile  ] includes insurance';
let labelStarts: number = labelData.indexOf('[');
let labelEnds: number = labelData.lastIndexOf(']');
let newLabelData: string = labelData.slice(labelStarts + 1, labelEnds);
let cleanedLabelData: string = newLabelData.trim();
let normalLabelData: string = cleanedLabelData.replaceAll('  -  ', '-');
if (normalLabelData.startsWith("Express")) {
    if (normalLabelData.includes("Fragile")) {
        console.log('Express Fragile Shipping');
    } else {
        console.log('Express Shipping');
    }
    if (normalLabelData.includes("insurance")) {
        console.log('Standard Shipping with Insurance');
    }
    } else {
        console.log('Standard Shipping');
    }
//////////////////////////////////////////////////////////////////////////////////////////
let transactionLog: string = 'Transaction: [$1,250] Status: Completed';

// 2. Remove comma using replace()
// 3. Convert to number
// 4. If amount >= 1000 AND amount <= 5000 → "High Value Transaction"
//    Else if amount < 1000 → "Standard Transaction"
//    Else → "Check Transaction"

let transactionStart:number = transactionLog.indexOf('[$');
let transactionEnd:number = transactionLog.indexOf(']');
let amountString:string = transactionLog.slice(transactionStart + 2, transactionEnd);

let newTransaction:string = amountString.replace( ',' , '');

let amount: number = parseFloat(newTransaction);

if (amount >= 1000 && amount <= 5000) {
    console.log("High Value Transaction");
} else if (amount < 1000) {
    console.log("Standard Transaction");
} else {
    console.log("Check Transaction");
}
////////////////////////////////////////////////////////////////////////////////////
// 21. Comment Sentiment Analyzer
let commentData: string = 'Comment: [   Amazing work!!!   ] includes praise';
// 1. Extract comment (between [ and ])
// 2. Use trim() to remove extra spaces
// 3. If comment includes "!!!" →
//       if comment includes "praise" → "Excited Praise"
//       else → "Excited Comment"
//    Else if comment includes "good" →
//       if comment includes "work" → "Positive Work Comment"
//       else → "Positive Comment"
//    Else → "Neutral Comment"

let commentDataStart: number = commentData.indexOf('[');
let commentDataEnd: number = commentData.lastIndexOf(']');
let data2: string = commentData.slice(commentDataStart+1,commentDataEnd);
let cleanedCommentData: string = commentData.trim();
if (cleanedCommentData.includes("!!!")) {
  if (cleanedCommentData.includes("praise")) {
    console.log("Excited Praise");
  } else {
    console.log("Excited Comment");
  }
} else if (cleanedCommentData.includes("Good")) {
  if (cleanedCommentData.includes("work")) {
  } else {
    console.log("Positive Comment");
  }
} else {
  console.log("Neutral Comment");
}
////////////////////////////////////////////////////////////////////////
// 1. Extract file size (between second [ and ])
// 2. Use replace() to remove "MB" and convert to Number
// 3. If size > 1.0 →
//       if size > 5.0 → "Large File with Backup"
//       else → "Medium File with Backup"
//    Else if size > 0.5 →
//       if fileData includes "backup" → "Small File with Backup"
//       else → "Small File"
//    Else → "Tiny File"

let fileData: string = "File: [document.pdf] size: [2.5MB] includes backup";
let fileDataStart: number = fileData.lastIndexOf('[');
let fileDataEnd: number = fileData.lastIndexOf(']');
let newData1: string = fileData.slice(fileDataStart + 1, fileDataEnd);
let finalData: string = newData1.replace('MB', '');
let size2: number = parseFloat(finalData);
console.log(finalData);
if (size2 >1.0) {
    if (size2 >5.0) {
        console.log('Large File with Backup');
    } else { 
        console.log('Medium File with Backup');
    }
} else if (size2 > 0.5) {
    if (finalData.includes('backup')) {
        console.log('Small File with Backup');
    } else {
        console.log('Small File');
    }
} else { 
    console.log('Tiny File');
}
/////////////////////////////////////////////////////////////////////////////////////
// 1. Extract rating (between first [ and ])
// 2. Extract review count (between second [ and ]) and convert both to parseFloat
// 3. If rating > 4.5 →
//       if reviews > 100 → "Excellent High-Volume Rating"
//       else → "Excellent Rating"
//    Else if rating > 4.0 →
//       if ratingData includes "verified" → "Good Verified Rating"
//       else → "Good Rating"
//    Else → "Average Rating"
let ratingData: string = 'Rating: [4.8] reviews: [127] includes verified';
let rating: string = ratingData.slice(ratingData.indexOf('[') + 1, ratingData.indexOf(']'));
let ratingNumber: number = parseFloat(rating);
let review: string = ratingData.slice(ratingData.lastIndexOf('[') + 1, ratingData.lastIndexOf(']') );
let reviewNumber: number = parseFloat(review);

if (reviewNumber >4.5) {
    if (reviewNumber > 100) {
        console.log('Excellent High-Volume Rating');
    } else { 
        console.log('Excellent Rating');
    }
} else if (ratingNumber > 4.0) {
    if (ratingData.includes('verified')) {
        console.log('Good Verified Rating');
    } else { 
        console.log('Good Rating');
    }
} else { 
    console.log('Average Rating');
}
//////////////////////////////////////////////////////////////////////////////////////////////

