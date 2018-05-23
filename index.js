const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(a, b){
  let x;
  let myArr = [];
  for (var i=0; i<a.length; i++) {
  x = a[i] +" plays " + b[i];
  myArr.push(x);
 }
 return myArr;
}
theBeatlesPlay(musicians, instruments);

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  
function johnLennonFacts(factsArr){
  let fact;
  let JohnArr = [];
  let counter = 0;
    while (counter < factsArr.length) {
      fact = factsArr[counter] + "!!!";
      counter++;
      JohnArr.push(fact);
    }
    return JohnArr;
}
johnLennonFacts(facts);


function iLoveTheBeatles(number){
var arr = [];
do {
    arr.push("I love the Beatles!");
    number++;
}
while (number < 15);
return arr;
}

iLoveTheBeatles(2);
