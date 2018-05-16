var emptyArray = [];

function theBeatlesPlay(musicians,instruments){
  for(var i = 0; i < musicians.length; i++){
    emptyArray.push(musicians[i] + " plays " + instruments[i]);
  }
}
