const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments){
  var array = [] //empty array to store strings
  var i
  //for loop to create strings
  for (i = 0; i < musicians.length; i++){
    //push new strings into empty array
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

const facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]
        
function johnLennonFacts(facts){
  var i = 0
  while (i < facts.length){
    facts[i] = `${facts[i]}!!!` //add exclamation pts
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var empty = []
  //fills empty and increments n while n<15
  do{
    empty.push("I love the Beatles!")
    n++
  }while(n < 15)
  return empty
}