function theBeatlesPlay(mus, inst){
  var arr=[];
  for(var i=0; i<mus.length; i++){
    var str=mus[i]+ ' plays '+ inst[i];
    arr.push(str);
  }
  return arr;
}

function johnLennonFacts(facts){
  var i=0;
  while(i<facts.length){
    facts[i]+='!!!';
    i+=1;
  }
  return facts;
}

function iLoveTheBeatles(n){
  var arr=[];
  do{
    arr.push("I love the Beatles!");
    n+=1;
  }
  while(n<15);
  return arr;
}
