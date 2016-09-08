function theBeatlesPlay(a,b) {
   var item = [];
   for(var i = 0; i < a.length; i++) {
     item.push( a[i] + ' plays ' + b[i])
   }
   return item;
}
var musicians = ["John", "Paul", "George", "Ringo"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitor", "Drums"];
theBeatlesPlay(musicians, instruments);

function johnLennonFacts(x) {
  var johnfacts = [];
  var i = 0;
  while(i < x.length) {
    johnfacts.push(x[i] + "!!!")
    i++;
  }
  return johnfacts;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts);

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  }
  while(num < 15 );
  return arr;
}
