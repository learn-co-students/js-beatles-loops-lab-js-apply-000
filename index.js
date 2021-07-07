var musicians = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"
  ];
var instruments = [
  "Guitar",
  "Bass Guitar",
  "Lead Guitar",
  "Drums"
  ];
function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for(var i = 0; i < musicians.length; i++) {
     result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}
theBeatlesPlay(musicians, instruments);


var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
var i = 0;
function johnLennonFacts(arr) {
  while(i < arr.length) {
    arr[i] = arr[i] + "!!!";
    i++;
  }
  return arr;
}
johnLennonFacts(facts);



function iLoveTheBeatles(num) {
  arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return arr;
}

iLoveTheBeatles(7);