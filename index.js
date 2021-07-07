function theBeatlesPlay(a, b){
  var z = [];
  for(var i = 0; i < a.length; i++){
    z.push(a[i] + " plays " + b[i]);
  }
  return z;
}

function johnLennonFacts(a){
  var z = [];
  for (let item of a) z.push(item + "!!!");
  return z;
}

function iLoveTheBeatles(a){
  var z = ["I love the Beatles!"];
  if (a < 15){
    for (var i = 0; i < a; i++) z.push("I love the Beatles!");
  }
  return z;
}
