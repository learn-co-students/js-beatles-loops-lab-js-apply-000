//////////// FIRST PART

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


theBeatlesPlay(musicians, instruments); 

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];                                              //return index from musicians and instruments...
  for(var i =0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}
////////// SECOND PART

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var result = [];
  var i = 0;
  while (i < facts.length) {
    result.push(facts[i] + "!!!");
    i++;
  }
  return result;
}

///////// THIRD PART

/*function iLoveTheBeatles(numb) {      
  let newArr = [];
  do {
    newArr.push("I love the Beatles!") // It will always run one time, whether or not it meets condition bellow...
    numb++;                            // Increment how many times "I love the Beatles" is pushed into newArr...
  } while (numb < 15);
  return newArr;
  
} */

function iLoveTheBeatles(number) {
  var arr = [];
  var i = 0;
  do {
    arr.push('I love the Beatles!');
    i++;
  } while (i <= number && number < 15);
  return arr;
}
iLoveTheBeatles(15);













