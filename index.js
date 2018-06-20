const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var list=[]

function theBeatlesPlay(){
  for (let i=0; i<instruments.length; i++){
   list.push(musicians[i] + ' plays ' + instruments[i])
  
  }
  return list
}

var facts2=[]
var i=0
function johnLennonFacts(facts) {
  while(i<4) {
    facts2.push(facts[i] + '!!!')
    i++
  }
  return facts2
}

n=1
function iLoveTheBeatles(n) {
  var beatlesAreLove= []
  do { 
    beatlesAreLove.push('I love the Beatles!')
    n++
} while (n<15)
return beatlesAreLove
}