var i = 0
function theBeatlesPlay(musicians, instruments){

var beatlesplay=[]
for(i=0; i<musicians.length; i++){
  beatlesplay[i]=musicians[i]+" plays "+instruments[i]
}
  //length of arrays
  return beatlesplay

}

function johnLennonFacts(facts){
  var JLFacts=[]
  i=0
  while(i<facts.length){
    JLFacts[i]=facts[i]+"!!!"
    i++
  }
  return JLFacts
}

function iLoveTheBeatles(n){
  var love=[]
  i=0
  do{
    love[i]="I love the Beatles!"
    i++
    n++
  }
  while(n<15)
  return love
}
