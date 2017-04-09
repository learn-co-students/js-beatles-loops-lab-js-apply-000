function theBeatlesPlay(musicians, instruments){
  var newMusicians=[];
  
  for(var x=0;x<musicians.length;x++){
    newMusicians.push(musicians[x] + " plays " + instruments[x]);
  };
  return newMusicians;
};

function johnLennonFacts(facts){
  var newFacts = [];
  var x=0;

  while(x < facts.length){
    newFacts.push(facts[x] + "!!!");
    x++;
  };
  return newFacts;
};

function iLoveTheBeatles(number){
  var otherThings=[];
  do{
    otherThings.push("I love the Beatles!");
    number++;
  } while(number<15);
  return otherThings;
};
