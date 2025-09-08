// we are the QA automation engineers of Purple
// when we go to web app sometimes there is a pop up
// IF the popup is existing then dismiss it, 'popup dismissed'
// otherwise just say 'popup didn't appear'

let webSiteOpen: boolean = true;
if (webSiteOpen ) {
    console.log(' Get a pillow! Only today for $20.99');
} else {
    console.log( 'Popup did not appear!');
};

//we are checking our tissue types string
// if the tissue equals to lung, print 'You need to breath'
// if the tissue equals to hear, print 'You need to keep pumping'
// Everything else print 'Just chillax''muscle', 'kidney', 'skin', 'gut'

//let tissueTypes: string = 'Lung';
//if (tissueTypes === 'Lung') {
  //  console.log('You need to breath');
//} else if (tissueTypes === 'Heart') {
  //  console.log('You need to keep pumping');
//} else if (tissueTypes === 'Muscle') {
  //  console.log('Will help to make bode mass');
//} else if (tissueTypes === 'Skin') {
  //  console.log('It will Protect you');
//} else if (tissueTypes === 'Gut') {
  //  console.log(' Check your digestion');
//} else {
  //  console.log('Just chillax');
//}
// create a variable my traffic sign color

let myTrafficSignColor: string = 'Red';
if (myTrafficSignColor === 'Red') {
    console.log('Do not go! Stop! ');
} else if (myTrafficSignColor === 'Yellow') {
    console.log('Be ready to go');
} else if (myTrafficSignColor === 'Green') {
    console.log('GOOOOO!');
}
    ///////////////////
    // let tissue: string = "lung"
    // if (tissue === "lung") {
    //     console.log("You need to breath")
    // } else if (tissue === "heart") {
    //     console.log('You need to keep pumping')
    // } else if (tissue === "muscle") {
    //     console.log('You need to keep exercise')
    // } else if (tissue === "kidney") {
    //     console.log('You need to keep work')
    // } else if (tissue === "skin") {
    //     console.log('You need to get tanned')
    // } else if (tissue === "gut") {
    //     console.log('You need to be healthy')
    // } else {
    //     // EVERYTHING else which is not gut here
    //     console.log('You not gonna be cancer')
    // }
    // combine them in one if condition
    // before doing that try to put it in english sentence
    // have a single variable
    // put whatever message you think is right
    // if
    // else
    let myTissue: string = 'nervous';
    if (myTissue === 'lung' || myTissue === 'skin' || myTissue === 'gut' || myTissue === 'kidney'
        || myTissue === 'heart' || myTissue === 'muscle') {
        console.log('Do checkup');
    } else { 
        console.log(' You are healthy');
    }
    // You are a movie theater owner
// There are 4 age restrictions for movies:
// 'G' -> All ages
// 'PG' -> Under 13 need parental guidance
// 'PG-13' -> Must be 13 or older
// 'R' -> Must be 17 or older
//
// Check your variable movieRating
// If the rating is 'G', say: "Enjoy the movie!"
// If the rating is 'PG', say: "Kids under 13 need parental guidance."
// If the rating is 'PG-13', say: "Only 13 and older can watch this."
// If the rating is 'R', say: "Only 17 and older can watch this."
// If the rating is something else, say: "Invalid rating."
//
// Example:
// movieRating = 'PG-13' -> Only 13 and older can watch this.
//let movieRating: string = 'PG-13';

//if (movieRating === 'G') {
  //  console.log('Enjoy the movie!');
//} else if (movieRating === 'PG') {
  //  console.log('Kids under 13 need parental guidance.');
//} else if (movieRating === 'PG-13') {
  //  console.log('Only 13 and older can watch this.');
//} else if (movieRating === 'R') {
  //  console.log('Only 17 and older can watch this.');
//} else {
  //  console.log('Invalid rating.');
//}

let movieRating1: string = 'AB';

if (movieRating1 === 'G' || movieRating1 === 'PG' || movieRating1 === 'PG-13' || movieRating1 === 'R') {
    console.log('Rating is good');
} else { 
    console.log( 'Warning! Invalid rating');
}

