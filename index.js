// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians,instruments) {
  var array=[]
  for (var i=0; i < 4; i++) {
      array[i]= (musicians[i] + " plays " + instruments[i]);
  }
  return array;
}
const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
function johnLennonFacts(facts) {
  var i = 0;
  var array=[];
  while (i < 4) {
    array[i]=(facts[i] + "!!!");
    i++;
  }
  return array;
}
function iLoveTheBeatles(i){
var strings=[];
do{
i++;
strings.push("I love the Beatles!")
}while (i < 15);
return strings;
}
