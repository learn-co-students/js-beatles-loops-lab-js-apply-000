
var musicians = ["John Lennon", "Paul McCartney", "Ringo Star", "Geore Harrison"];
var instruments = ["guitar", "bass guitar", "drums", "lead guitar"];
function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for(var i =0; i < musicians.length; i++) {
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}
const facts=["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
function johnLennonFacts(facts) {
  var results = [];
  var count = 0;
  while (count < facts.length){
    results.push(facts[count] + '!!!'); count++;
  }
  return results
}
function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!")
    num++;
  } while(num < 15);
  return arr
}