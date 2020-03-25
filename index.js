// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]


function theBeatlesPlay(musicians, instruments) {
  var mergedArray = [];

  for (let i = 0; i < musicians.length; i++) {
    mergedArray.push(musicians[i] + " plays " + instruments[i])

  }
  return mergedArray;

}
console.log(theBeatlesPlay(musicians, instruments))

///////////////////////////////////////////////////

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout",
"He hated the sound of his own voice"];

function johnLennonFacts(facts) {
    var newFacts=[];
    var i = 0;
    while (i < facts.length) {
        newFacts[i] = facts[i] + "!!!";
        i++;
    }
    return newFacts;
}

console.log(johnLennonFacts(facts));

////////////////////////////////////////////////

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1
  } while (number < 15);
  return array;
}

// function iLoveTheBeatles(n) {
//   let newArray = [];
//   let LoveBeatles = () => newArray.push("I love the Beatles!");
//   do {
//     LoveBeatles();
//     n++;
//   } while (n < 15);
//   if (n > 15) LoveBeatles();
//   return newArray;
// }
//
// const res = iLoveTheBeatles(7);
//
// console.log(res);
// console.log(res.length);
