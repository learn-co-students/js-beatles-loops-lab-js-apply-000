// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians,instruments){
 var emptyArray=[]
 for (let i = 0; i < 4; i++) {
      emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
return emptyArray
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]
function johnLennonFacts(facts){
  var n=0
  var newArray=[]
  while (facts[n]) {
    newArray.push(`${facts[n]}!!!`)
    n++
  }
  return newArray
}
function iLoveTheBeatles(i) {
  var newArray = [];
  do {
    i = newArray.push("I love the Beatles!");
    i++;
  } while (i < 9); 
  
  return newArray;
}
function iLoveTheBeatles(i) {
    var newArray = [];
   
    do {
      newArray.push(`I love the Beatles!`)
      i++
    }
    while(i < 15)
    
    return newArray
    
  }