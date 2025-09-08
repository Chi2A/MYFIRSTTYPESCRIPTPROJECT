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
let extractedName: string = testConfig.slice(
  testConfig.indexOf("[") + 1,
  testConfig.lastIndexOf("]")
);
let cleanedName: string = extractedName.trim();
console.log(cleanedName);
