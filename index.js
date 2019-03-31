// add solution here
function theBeatlesPlay(musicians, instruments){
  var inst = [];

  for(var i = 0; i < musicians.length; i++){
    inst.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return inst;
}



function johnLennonFacts(facts){

  var lennonFacts = [];

  var i = 0;

  while (i < facts.length){
     lennonFacts.push(facts[i] + '!!!');
     i++;
  }
  return lennonFacts;
}



function iLoveTheBeatles(num){
  var loveForBeatles = [];

  do{
    loveForBeatles.push('I love the Beatles!');
    num++;
  }

  while(num < 15);
  return loveForBeatles;
}
