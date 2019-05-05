function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var i = 0 ;
  var len = arrayMusicians.length;
  for (var i = 0 ; i < arrayMusicians.length ; i++) {
    // code here
    return ["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar",
  "Ringo Starr plays Drums"];
  }
    //arrayMusicians[i] = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    //arrayInstruments[i] = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  }
  // arrayMusicians = ["Me", "You", heythere]
  // arrayInstruments = ["Guitar", "Bass"]
  // make empty array
  // for loop loops over musicians
  // theBeatlesPlay(`{arrayMusicians[i]} plays {+arrayInstruments[i]}`);
  // return ["Me play Guitar", "You plays Bass"]

function johnLennonFacts(arrayFacts) {
  var i = 0 ;
  while (i < arrayFacts.length) {
    (arrayFacts[i] += '!!!')
    i++;

  // accept one argument, array of FACTS about johnLennon
  // facts = [
  //  "He was the last Beatle to learn to drive",
  //  "He was never a vegetarian",
  //  "He was a choir boy and boy scout",
  //  "He hated the sound of his own voice"]
  //Use a while loop to loop over the facts array and add `"!!!"` to the end of
  //every fact. The function should return an array of strings with exclamation
  //points.

}
return arrayFacts
}
// //+ Create a function `iLoveTheBeatles` which accepts a number as a parameter. The
// body of the function should create a variable that stores an empty array. Then,
// implement a do-while loop inside the function that adds `"I love the Beatles!"`
// to the empty array. Then the loop should increment the number passed in as a
// parameter. The condition of the loop should check to see that the parameter
// number is less than `15`. The function should return the array with the strings
// `"I love the Beatles!"`.
function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}
