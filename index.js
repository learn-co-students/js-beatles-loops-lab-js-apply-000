var names = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["guitar", "bass", "guitar", "drums"];

console.log(names)
console.log(instruments)

function theBeatlesPlay(member, instrument){
  var descriptions = [];
  for (var i = 0; i < member.length; i++) {
    descriptions[i] = member[i] + ' plays ' + instrument[i];
  }
  return descriptions;
}

/*
const notesOfInterest = [
  "He wrote Imagine.",
  "He was never a vegetarian.",
  "He was killed in 1980.",
  "He was a choir boy and boy scout."
  ];
  */
  
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] += "!!!";
    i++;
  }
  return facts;
  
}

function iLoveTheBeatles(num){
  var acclamations = [];
  var counter = 0;
  do {acclamations[counter] = "I love the Beatles!";
    counter++;
  }
  while ((num < 15) & (counter < num + 1));
  return acclamations;
}

