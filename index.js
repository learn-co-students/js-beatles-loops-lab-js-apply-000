
//#1

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

// console.log(musicians[0])


function theBeatlesPlay(musicians,instruments){
  var newArray = [];

  for(var i=0;i<musicians.length;i++){
        var newString = musicians[i] + " plays " + instruments[i];
        newArray[i] = newString;
      console.log(i)
      console.log(newString)
  }
      // console.log(newArray);
      return newArray;

}
// theBeatlesPlay(musicians,instruments);

//#2
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(array){
var j =0;
while(j<array.length){
    array[j] = array[j] + "!!!";
    j++;
    // console.log(array[j]);
  }
  return array
}
johnLennonFacts(facts);

//#3
function iLoveTheBeatles(n){
var emptyArray = [];
do {
  emptyArray.push("I love the Beatles!");
  n = n+1;
  console.log(n);
} while (n<15);

return emptyArray;
}
// iLoveTheBeatles(7);
