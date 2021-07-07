// add solution here
function theBeatlesPlay(mus,ins){
  var arr= [];
  for(var i=0;i<mus.length;i++){
    arr.push(mus[i] + " plays " + ins[i]);
  }
  return arr;
}

function johnLennonFacts(facts){
  var i=0;
  while(i<facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var i = 0;
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    num++;
  } while(num<15);
  return arr;
}
