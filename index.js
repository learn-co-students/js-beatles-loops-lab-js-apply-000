const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

// add solution here

function theBeatlesPlay(musicians, instruments) {
  
  var emptyArr = []
  
  for (var i = 0; i < musicians.length; i++) {
    
    emptyArr.push(musicians[i] + " plays " + instruments[i])
  }
  
  return emptyArr
}

function johnLennonFacts(facts) {
  var factsArr = []
  
  var i = 0
  
  while(factsArr.length < facts.length) {
      factsArr.push(facts[i]+ "!!!")
      i++;
  }
  return factsArr
}

function iLoveTheBeatles(number) {
  
  var love = []
  
  
  do {
    
    love.push("I love the Beatles!")
    number++
    
  }while(number < 15)
  
  return love
  
}


