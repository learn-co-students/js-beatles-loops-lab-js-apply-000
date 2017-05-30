const musicians = [
  'John Lennon',
  'Paul McCartney',
  'Geaorge Harrison',
  'Ringo Starr',
]
const instruments = [
  'Guitar.',
  'Bass Guitar.',
  'Lead Guitar',
  'Drums'
]
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function theBeatlesPlay(musicians,instruments) {
  var sentences = [];
  for (var i=0;i<musicians.length;i++) {
    var body = musicians[i] + " plays " + instruments[i];
    sentences.push(body);
  }
  return sentences;
}
function johnLennonFacts(facts) {
  var i = 0;
  var punctuated = [];
  while (facts[i]) {
    var toAppend = facts[i] + '!!!';
    punctuated.push(toAppend);
    i++;
  }
  return punctuated;
}

function iLoveTheBeatles(n) {
  var i = 0;
  var result = [];
  if (n<=15) 
    while (i<=n) {
      result.push('I love the Beatles!')
      i++;
    }
  else result.push('I love the Beatles!');
  return result
}