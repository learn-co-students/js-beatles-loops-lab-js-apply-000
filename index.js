var musicians = ["John Lennon","Paul McCartney","George Harrison","Ringo Starr"];
var instruments = ["guitar","Bass Guitar","Lead Guitar","Drums"];
function theBeatlesPlay(musicians,instruments){
  var newArray = [];
  for (var i = 0; i < 4; i++) {
    newArray[i] = musicians[i]+" plays "+instruments[i];
  }
  return newArray;
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout",
"He hated the sound of his own voice"];

function johnLennonFacts(facts) {
var i = 0;
while (i < facts.length) {

facts[i] +="!!!";
i++;
}
return facts;
}

var i=0;
function iLoveTheBeatles(i){
var suitcase = [];
do{

  suitcase.push('I love the Beatles!');
  i++;

}

while (i < 15);
return suitcase;
}
