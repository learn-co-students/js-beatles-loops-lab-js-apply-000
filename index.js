// add solution here
const musicians = ["John Lennon", "Paul McCArtney", "George Harrison", "Ringo"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


  function johnLennonFacts(facts) {
    let counter = 0
  while (counter < facts.length) {
    facts[counter]= facts[counter] +"!!!";
    counter++
  }
  return facts;  
}

  function iLoveTheBeatles(x) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    x++;
    console.log("x = "+ x)
  } while (x < 15); {
    
  }
  return array;
}
