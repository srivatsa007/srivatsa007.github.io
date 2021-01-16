(function (window) {
//The steps in this file are identical to the ones performed in the SpeakHello.js file.

// STEP six: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE


// STEP seven: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
var byeSpeaker = {};

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";

// STEP eight: Rewrite 'speak' function such that it is attached to the byeSpeaker object instead of being a standalone function.
byeSpeaker.speak = function (name) 
{
  console.log(speakWord + " " + name);
}

// STEP nine: Expose'byeSpeaker' object to the global scope. Name it 'byeSpeaker' on the global scope as well.
window.byeSpeaker = byeSpeaker;

})(window);