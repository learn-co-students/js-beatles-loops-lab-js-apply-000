function theBeatlesPlay(musicians, instruments){
  var arraY=[];
  for(var i=0;i<musicians.length;i++){
    arraY[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return arraY;
}

function johnLennonFacts(facts){
  const newFacts = [];
  for(var i=0;i<facts.length;i++){
    newFacts[i]=facts[i]+"!!!";
  }
  return newFacts;
}

function iLoveTheBeatles(n){
  var array =[];
  var i=0;
  do{
    array[i]="I love the Beatles!";
    n++;
    i++;
  } while(n<15);
  return array;
}