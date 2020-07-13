// add solution here
function theBeatlesPlay(musicians, instruments){
  var playlist=[];
  for(let i = 0; i<musicians.length; i++){
     playlist.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return playlist;
}

function johnLennonFacts(arrayOfFacts){
  var johnLennonFacts = [];
  var i = 0;
  while(i<arrayOfFacts.length){
    johnLennonFacts.push(`${arrayOfFacts[i]}!!!`);
    i++;
  }
 return johnLennonFacts;
}


function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push('I love the Beatles!');
    number++;
  }while(number<15)
  return array;
}









