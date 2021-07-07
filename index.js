function theBeatlesPlay(musicians, instruments){
  var plays=[];
  for(let i=0;i<musicians.length;i++){
      plays[i]=musicians[i]+" plays "+instruments[i];
  }
  return plays;
}
function johnLennonFacts(facts){
  var i=0;
  while(i<facts.length){
    facts[i]=facts[i]+"!!!"
    i++;
    }
  return facts;
}
function iLoveTheBeatles(number){
  var i=0;
  var loveBeatles=[];
    do{loveBeatles[i]="I love the Beatles!";
    number++;
    i++;
    }while(number<15);
  
  return loveBeatles;
  
}// add solution here
