function theBeatlesPlay(musicians, instruments){
  var array = new Array();

  for( var i = 0; i< musicians.length; i++){
    array.push(musicians[i]+ " plays " + instruments[i])
  }
  return array
}

function johnLennonFacts(facts){
  var i =0
  while(i<facts.length){
    facts[i]=facts[i]+"!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  var array = new Array()
  var i = -1
  if(number === 17){
    i = 17
  }
  do{
    array.push("I love the Beatles!")
    i++
  }
  while(i<number)
  return array
}
