const containerDiv = document.querySelector("#content-container");

/// 1 ///
// Here, copy and paste the "URL" variable, "randomizeArray", "addQuestion",
// and "addQuestions" functions from last class (see script_SOLUTION.js if you need them)

/// 2 ///
// Define the function "resetQuiz" that takes no arguments
// and clears the containerDiv before calling addQuestions()

/// 3 ///
// Use document.querySelector() to get the "#newQuizButton" element
// and then attach a "click" event listener that triggers the
// "resetQuiz" function

/// 4 ///
// Call resetQuiz();

///////////
// BONUS //
///////////
// Update the HTML content by changing the title, text in <header>, and the name in <footer>

// Currently the client can access the functions and variables we've established since 
// everything is defined in the global space (check in the browser!). At the very top
// add and event listener to the document object and listen for the "DOMContentLoaded" event.
// Then put ALL of the code in this script inside of the callback. When the DOM finishes
// loading the code will execute like normal, but because it only exists within the callback
// the user cannot access the variables! (NOTE: this is a standard practice)

// Use the Random User API (https://randomuser.me/) to get 1 random user as JSON.
// Incorporate the user's information in your quiz app, such as their name, image, and username.