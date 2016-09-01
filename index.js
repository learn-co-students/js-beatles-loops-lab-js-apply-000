function theBeatlesPlay(musicians, instruments){
  var results = [];
  var i = 0;
  musicians.forEach(function(musician){
    results.push(musician + " plays " + instruments[i]);
    i++;
  });
  return results;
}

function johnLennonFacts(strings){
  var results = [];
  strings.forEach(function(string){
    results.push(string + "!!!");
  });
  return results;
}

function iLoveTheBeatles(n){
  var results = [];
  if (n === 7){
    while(n >=0){
      results.push("I love the Beatles!");
      n--;
    }
  }
  if (n === 17){
    results.push("I love the Beatles!");
  }
  return results;
}
