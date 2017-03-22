function theBeatlesPlay(people,instruments){
  var list = [];
  for (var i=0;i<instruments.length;i++){
    list[i]=people[i]+" plays "+instruments[i];
  }
  return list;
}
function johnLennonFacts(facts){
  var i=0;
  while (i<facts.length){
    facts[i]+="!!!";
    i++;
  }
  return facts;
}
function iLoveTheBeatles(num){
  var ar = [];
  var i = 0;
  do{
    ar[i]="I love the Beatles!";
    i++;
    num++;
  }
  while (num<15)
  return ar;
}
