function theBeatlesPlay(musicians, instruments){
  var musicianPlays = [];
  const musician = musicians
  const instrument = instruments
  for (var i = 0; i<instrument.length; i++){
    musicianPlays[i] =  musician[i] + " plays " + instrument[i] 
  
  }
  return musicianPlays
}

function johnLennonFacts(array) {
  let i = array.length
  var facts =[];
  while (i > 0) {
    --i
    facts[i] = array[i] + '!!!'
  }
  
  return facts
}


function iLoveTheBeatles(num){
  var love = [];
  do {
    love.push("I love the Beatles!") 
    num++
  } while(num < 15)
  
  return love
}