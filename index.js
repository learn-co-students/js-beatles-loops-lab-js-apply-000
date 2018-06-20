const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var list=[]

function theBeatlesPlay(){
  for (let i=0; i<instruments.length; i++){
   list.push(musicians[i] + ' plays ' + instruments[i])
  
  }
  return list
}


function johnLennonFacts(facts) {
  var i=0
  while(i<facts.length) {
    facts[i]=(facts[i] + '!!!')
    i++
  }
  return facts
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