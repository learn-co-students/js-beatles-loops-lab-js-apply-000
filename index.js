// add solution here

function theBeatlesPlay(musicians,instruments){
  var newArray = [];
  for(var i=0; i < musicians.length; i++){
    newArray[i]=musicians[i] + " plays " + instruments[i];
  }
  return newArray;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i<facts.length){
    facts[i]+="!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var newArray = [];
  var i = 0;
  do{
    newArray[i]="I love the Beatles!";
    i++;
    num++;
  }
  while(num<15);
  return newArray;
}
  