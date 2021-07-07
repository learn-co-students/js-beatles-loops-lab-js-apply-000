// add solution here

/*
First time through the loop, create a string using the first index of musician array (array1)
and the first index of instrument array (array2). "John Lennon" + "plays" + "guitar"

add this string to an empty array you created. The loop should make the same sentence for every member of the musician array.
The functio should return the array of new strings containing what instruments each musician plays.

Create a function johnLennonFacts
Which will accept one argument, an array of facts about John Lennon.

*/

var musicianArray = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instrumentArray = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var x = [];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(array1, array2){
  var i = 0;
  for (i = 0; i < musicianArray.length; i++){
    x[i] = musicianArray[i] + " plays " + instrumentArray[i];
  }
  return x;
}

function johnLennonFacts(arrayOfFacts){
  var i = 0;
  while (i < arrayOfFacts.length){
    arrayOfFacts[i] = arrayOfFacts[i] + "!!!";
    i++;
  }
  return arrayOfFacts;
}

function iLoveTheBeatles(num) {
    var newArr = [];
    do {
        newArr.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return newArr;
}