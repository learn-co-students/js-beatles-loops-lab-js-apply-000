// add solution here
var musicians = [
'John Lennon', 
'Paul McCartney',
'George Harrison',
'Ringo Starr'
]

var instruments = [
  'Guitar',
  'Bass Guitar',
  'Lead Guitar',
  'Drums'
  ]
  
  
function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  
  for (var i = 0; i < musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    newArray.push(musician + ' plays ' + instrument);
  }
  return newArray;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0;
  
  while (i < facts.length){
    var fact = facts[i];
    newFacts.push(fact + '!!!')
    i++;
  }
  return newFacts; 
}

function iLoveTheBeatles(num){
  var newArray = [];
  var i = 0; 
  
  do {
    newArray.push('I love the Beatles!');
    i++;
  } while ( i <= num && num < 15);
 
 return newArray;  
}

