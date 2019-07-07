// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]; //Array of Musicians
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"] // Array of instruments
function theBeatlesPlay(musicians, instruments) {
  var arrayLength = musicians.length; //number of items in the array
  var message = []; // Empty array where we insert strings
  //var roundNumber = 0; Current round
  var i;

  for (i = 0; i < arrayLength; i++) {
    // roundNumber = (i + 1);
    message.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return message
}

const facts = [];
function johnLennonFacts(facts) {
    var i = 0; //Set counter to 1
    var exclamation = []; // Empty array where we insert strings

    while (i < facts.length) { //Add "!!!" to as many facts as exist in the array
      exclamation.push(`${facts[i]}!!!`);
      i++;
    }
    return exclamation
}

var number;
function iLoveTheBeatles(number) {
  var beatlesArray = []; //Empty array where we insert strings
  var repeatedString = "I love the Beatles!"; //String to repeat
  do {
    // beatlesArray.push("I love the Beatles!") //adds "I love the Beatles!" to the empty array.
    var i = 15 - number; //Set counter to number of times string needs to be inserted
    beatlesArray.push(repeatedString.repeat(i)) //adds "I love the Beatles!" i times to the empty array.
    return beatlesArray // returns the array
  }
  while (number > 15) { //conditional to stop if number is greater than 15
    return repeatedString
  }

  //Giving me the "RangeError: Invalid count value" error. Related to using the .repeat method with the "i" variable: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Resulting_string_too_large
}
