// add solution here
function theBeatlesPlay(musicians,instruments){
  var startsEmpty = [] 
  for(var i = 0; i<musicians.length;i++){
    var string = musicians[i] + ' plays ' + instruments[i]
    startsEmpty[i] = string 
  }
  return startsEmpty
}