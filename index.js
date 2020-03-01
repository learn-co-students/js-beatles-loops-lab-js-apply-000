// add solution here
function theBeatlesPlay(musicians, instruments){
 var mPlays = [] 
  var counter
  for(counter = 0; counter < musicians.length; counter++){
  
    var together= `${musicians[counter]} plays ${instruments[counter]}`
    mPlays.push(together)
  }
  
  return mPlays
}