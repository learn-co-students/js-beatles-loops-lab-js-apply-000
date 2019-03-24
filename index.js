// add solution here
function theBeatlesPlay(musicians, instruments){
  var length1 = musicians.length;
  var mAndI=[];
  var i=0;
  for(i=0;i<length1;i++){
    var string1 = musicians[i]+" plays "+instruments[i];
    mAndI.push(string1);
  }
  return mAndI;
}

function johnLennonFacts(johnFacts){
  var length1 = johnFacts.length;
  var i;
  for(i=0;i<length1;i++){
    johnFacts[i]=johnFacts[i]+"!!!";
  }
  return johnFacts;
}

function iLoveTheBeatles(num){
  var empty=[];
  var i=0;
  do{
    empty[i]="I love the Beatles!";
    i++;
    num++;
  }
  while(num<15)
  return empty;
}
