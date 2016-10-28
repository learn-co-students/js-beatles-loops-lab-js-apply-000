function theBeatlesPlay(mus, inst){
  const x = []
  for (var i=0; i<mus.length;i++){
    x.push(mus[i]+" plays "+inst[i])
  }
  return x
}

function johnLennonFacts(facts){
  for(var i=0; i<facts.length;i++){
    facts[i]=facts[i]+"!!!"
  }
  return facts
}

function iLoveTheBeatles(x){
  const y = []
  do{
    y.push("I love the Beatles!");
    x++;
  }
  while (x<15)
  return y
}
