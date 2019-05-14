function theBeatlesPlay(musician , instrument){
  let var1 = [];
for (let i = 0 ; i<=(musician.length-1) ; i++)
{ 
  var1.push(musician[i] + " plays " + instrument[i]);
}
  return var1;
}

function johnLennonFacts(fact){
  var i = 0;
  while (i<fact.length){
    fact[i] +=  "!!!";
    i++;
  }
  return fact;
}

function iLoveTheBeatles(number){
  let var1 = [];
  let var2 = "I love the Beatles!";
  let i =0;
  do {var1.push(var2);
    i++;
    
  }
  while (i<(15-number))
  return var1
}