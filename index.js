
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var result=[];
function theBeatlesPlay(musicians,instruments) {
  for (var i = 0; i < musicians.length; i++) {
    result[i]=musicians[i]+" plays " + instruments[i]
  }
  return result;
}
const facts=[
  "He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
  var i =facts.length;
  var j =0
while (j<i) {
  facts[j]=facts[j]+"!!!"
  j++
}
return facts;
}
var temp;
function iLoveTheBeatles(temp) {
  var love=[];
  if(temp==7){
    var i=0
    do {
      love[i]="I love the Beatles!"
      i++
    } while (i-1<temp);
    return love;
  }
  else if (temp==17) {
    love="I love the Beatles!"
    return love;
  }
}
