// 1. Find start position using indexOf('[') and end using indexOf(']')
// 2. Extract environment name using slice()
// '  Production  '
// 3. Use trim() to clean spaces
// 'Production'
// 4. If startsWith "Prod" →
//       if includes "smoke" → "Production Smoke Testing"
//       else → "Production Basic Testing"
//    Else →
//       if endsWith "ment" → "Development Environment"
//       else → "Unknown Environment"
let testConfig: string =
  "Environment: [  Production  ] includes smoke tests and regression";
let extractedName: string = testConfig.slice(testConfig.indexOf("[") + 1, testConfig.lastIndexOf("]"));
let cleanedName: string = extractedName.trim();

if (cleanedName.startsWith('Prod')) {
    if (testConfig.includes('smoke')) {
        console.log('Production Smoke Testing');
    } else {
        console.log('Production Basic Testing');
    }
} else if (cleanedName.endsWith ('ment')) {
    console.log('Development Environment');
    } else { 
    console.log('Unknown Environment');
    }//////////////////Production Smoke Testing
/////////////////////////////////////////////////////////////////////////////////////////////
// 1. Use indexOf() to find '[' and lastIndexOf() to find ']'
// 2. Extract browser info using slice()
// 'Chrome__120__beta'
// 3. Use replace() to replace first '__' with ' '
// 'Chrome 120__beta'
// 4. Use replaceAll() to replace remaining '__' with ' '
// 'Chrome 120 beta'
// 5. If startsWith "Chrome" →
//       if endsWith "beta" → "Chrome Beta Version"
//       else → "Chrome Stable Version"
//    Else →
//       if includes "Firefox" → "Firefox Browser"
//       else → "Other Browser"
let browserData: string = "Browser: [Chrome__120__beta] supports automation and headless mode";
let extractedBrowser: string = browserData.slice(browserData.indexOf('[') +1 , browserData.lastIndexOf(']'));
let replacedData: string = extractedBrowser.replace("__", " ");
let updatedData: string = replacedData.replaceAll("__", " ");
if (updatedData.startsWith('Chrome')) {
    if (updatedData.endsWith('beta')) {
      console.log("Chrome Beta Version");
    } else {
      console.log("Chrome Stable Version");
    }
} else if (updatedData.includes('Firefox')) {
    console.log('Firefox Browser');
} else { 
    console.log('Other Browser');
}///////////Chrome Beta Version
// 1. Use indexOf() to find '[' position
// 2. Use lastIndexOf() to find ']' position from the end
// 3. Extract status using slice()
// '  PASSED__123  '
// 4. Use trim() to remove spaces
// 'PASSED__123'
// 5. Use replace() to remove '__123'
// 'PASSED'
// 6. If startsWith "PASS" →
//       if includes "automated" → "Automated Test Passed"
//       else → "Manual Test Passed"
//    Else →
//       if endsWith "ED" → "Test Failed"
//       else → "Test Status Unknown"
let testReport: string = 'Status: [  PASSED__123  ] includes automated and regression tests';
let status1: string = testReport.slice(testReport.indexOf("[") +1, testReport.lastIndexOf(']'));
let trimmedStatus: string = status1.trim();
console.log(trimmedStatus);
trimmedStatus = trimmedStatus.replace('__123', '');
console.log(trimmedStatus);
if (trimmedStatus.startsWith('PASS') ) {
    if (testReport.includes('automated')) {
    console.log('Automated Test Passed');
    } else { 
    console.log('Manual Test Passed');
    }
} else if (trimmedStatus.endsWith ('ED')) { 
    console.log('Test Failed');
    } else { 
    console.log('Test Status Unknown');
    }//////////////Automated Test Passed
///////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Use indexOf() to find '[' and slice() to extract content
// '  Playwright--v1.40--stable  '
// 2. Use trim() to remove outer spaces
// 'Playwright--v1.40--stable'
// 3. Use replaceAll() to replace all '--' with ' '
// 'Playwright v1.40 stable'
// 4. Use lastIndexOf() to find last space for version checking
// 5. If startsWith "Playwright" →
//       if endsWith "stable" → "Playwright Stable Version"
//       else → "Playwright Beta Version"
//    Else →
//       if includes "Selenium" → "Selenium Framework"
//       else → "Unknown Framework"
let frameworkConfig: string = 'Framework: [  Playwright--v1.40--stable  ] includes headless and parallel';
let extractedContact: string = frameworkConfig.slice(frameworkConfig.indexOf("[") + 1, frameworkConfig.lastIndexOf(']'));
let newContent: string = extractedContact.trim();
console.log(newContent);
let content: string = newContent.replaceAll('--', ' ');
console.log(content)

if (content.startsWith('Playwright')) {
    if (content.endsWith('stable')) {
        console.log('Playwright Stable Version');
    } else { 
        console.log('Playwright Beta Version');
    }
} else if (frameworkConfig.includes('Selenium')) { 
    console.log('Selenium Framework');
    } else { 
console.log('Unknown Framework');
    } ////////////////////////Playwright Stable Version
///////////////////////////////////////////////////////////////////////////////////////////////
// 1. Use indexOf() to find '[' and lastIndexOf() to find ']'
// 2. Extract log level using slice()
// '  ERROR::timeout::critical  '
// 3. Use trim() to clean spaces
// 'ERROR::timeout::critical'
// 4. Use replace() to replace first '::' with ' - '
// 'ERROR - timeout::critical'
// 5. Use replaceAll() to replace remaining '::' with ' - '
// 'ERROR - timeout - critical'
// 6. If startsWith "ERROR" →
//       if endsWith "critical" → "Critical Error Found"
//       else → "Standard Error Found"
//    Else →
//       if includes "WARNING" → "Warning Message"
//       else → "Info Message"
let logMessage: string = 'Log: [  ERROR::timeout::critical  ] includes database and connection issues';
let extractedMessage: string = logMessage.slice( logMessage.indexOf('[') + 1, logMessage.lastIndexOf(']'));
let trimmedMessage: string = extractedMessage.trim();
console.log(trimmedMessage);
let message1: string = trimmedMessage.replaceAll('::', '-');
console.log(message1);
if (message1.startsWith('ERROR')) {
    if (message1.endsWith('critical')) {
    console.log('Critical Error Found');
    } else { 
    console.log('Standard Error Found');
    }
} else if (logMessage.includes('WARNING')) {
    console.log('WARNING-Warning Message');
} else { 
    console.log('Info Message');
}//////////////Critical Error Found
////////////////////////////////////////////////////////////////////////////////////////
// 1. Use indexOf() to find '[' and slice() to extract
// '  automated__test__suite  '
// 2. Use trim() to clean outer spaces
// 'automated__test__suite'
// 3. Use replace() to replace first '__' with ' '
// 'automated test__suite'
// 4. Use replaceAll() to replace remaining '__' with ' '
// 'automated test suite'
// 5. Use lastIndexOf() to find last space position
// 6. If startsWith "automated" →
//       if endsWith "suite" → "Automated Test Suite"
//       else → "Automated Test"
//    Else →
//       if includes "manual" → "Manual Test Process"
//       else → "Unknown Test Type"
let complexData: string = 'Data: [  automated__test__suite  ] includes regression and performance tests';
let extractedData: string = complexData.slice(complexData.indexOf('[') + 1, complexData.lastIndexOf(']'));
let trimmedData: string = extractedData.trim();
let newData2: string = trimmedData.replaceAll('__', ' ');
if (newData2.startsWith('automated')) {
    if (newData2.endsWith('suite')) {
     console.log('Automated Test Suite');
    } else { 
     console.log('Automated Test');
    }
} else if (complexData.includes('manual')) {
     console.log('Manual Test Process');
} else { 
     console.log('Unknown Test Type');
}///////////////Automated Test Suite

                                     ///////////////////////homework 9999999999999

// 1. Clean the log entry (remove extra spaces)
// 2. Extract test name (between ']' and ':')
// 3. Extract timestamp (after 'at')
// 4. Extract error code (after 'code')
// 5. Convert error code to number
// 6. Check if it's a 4xx error (client error)
// 7. Create a formatted output combining all extracted data
// 8. Replace 'ERROR' with '❌ ERROR' for visual emphasis
let complexLog1: string =
  "[ERROR] Test_Login_001: User authentication failed at 2024-01-15 14:30:25 with code 401  ";
let log1: string = complexLog1.slice(complexLog1.indexOf("]") + 1,complexLog1.indexOf(":"));
let cleanedLog: string = log1.trim();
console.log(cleanedLog);
let timeStamp: string = complexLog1.slice(complexLog1.indexOf("2"), complexLog1.lastIndexOf(' '));
let errorCode: string = complexLog1.slice(complexLog1.lastIndexOf('4'),complexLog1.lastIndexOf(' '));
let errorCodeNumber: number = parseFloat(errorCode);
console.log(errorCodeNumber);
let finalLog: string = complexLog1.replace("ERROR", "❌ ERROR");
console.log(finalLog);
//////////////////////////////////////////////////////////////////////



