const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]; //declare arrays

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var array = []; //create array 
  for (let i=0; i<musicians.length; i++) { //creates counter that counts how many musicians there are
    array.push(`${musicians[i]} plays ${instruments[i]}`); //convines the musicians and instruments together
  }
  return array; //returns the result
}

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var array = [];
  let i = 0;
  while (facts.length > i) { //while the no. of facts is more than i (0) it will populate the array
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  
  do {
    array.push('I love the Beatles!') //create I love the beatles in array
    number++ //increases the number 
  }
  while(number < 15); //only creates the array as long as number is less than 15
  return array; //return the array
}