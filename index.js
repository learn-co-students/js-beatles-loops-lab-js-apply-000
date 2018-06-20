const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var list=[]

function theBeatlesPlay(){
  for (let i=0; i<instruments.length; i++){
   list.push(musicians[i] + ' plays ' + instruments[i])
  
  }
  return list
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

var facts2=[]
var i=0
function johnLennonFacts(facts) {
  while(facts2.length<facts.length) {
    facts2.push(facts[i] + '!!!')
    i++
  }
  return facts2
}


i=1
function iLoveTheBeatles(i) {
  var beatlesAreLove= []
  do { 
    beatlesAreLove.push('I love the Beatles!')
    i++
} while (i<15)
return beatlesAreLove
}