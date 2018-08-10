// add solution here

function theBeatlesPlay (musicians,instruments){
  var playList = [];
  for (let i = 0; i < musicians.length; i++){
    playList.push(`${musicians} plays ${instruments}.`)
  }
  return playList;
}