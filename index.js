function theBeatlesPlay(musicians, instruments){
  var beatles =[];
  for(let i = 0; i < musicians.length; i++){
    beatles.push(musicians[i] + " plays " + instruments[i])
  }
  return beatles
}

function johnLennonFacts(array){
  let i = 0
  var fact = [];
  while(i < array.length){
    fact.push(array[i] + "!!!");
    i++
  }
  return fact
}

function iLoveTheBeatles(n){
  var love =[];
  do{
    love.push("I love the Beatles!")
    n++
  }while(n < 15)

  return love
}
