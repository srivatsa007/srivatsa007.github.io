// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP one:
// Wrap the entire contents of script.js inside of an IIFE (Note, Step 2 will be done in the SpeakHello.js file.)
(function (window) 
{

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// STEP ten:
// Loop over the names array and say either 'Hello' or "Good Bye" using the 'speak' method or either helloSpeaker's or byeSpeaker's 'speak' method.

for (var a = 0; a < names.length; a++) 
{

  // STEP eleven:  Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for names that start with either upper case or lower case 'J'/'j', call

  var firstLetter = names[a].charAt(0).toLowerCase();

  // STEP twelve: 
  if (firstLetter == 'j') 
{
    window.byeSpeaker.speak(names[a]);
  } else {
    window.helloSpeaker.speak(names[a]);
  }
}

})(window);
