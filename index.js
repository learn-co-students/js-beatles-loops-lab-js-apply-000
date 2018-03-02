function theBeatlesPlay(musicians, instruments){
  var results = [];
  // console.log(results, musicians[i])
  for(var i = 0; i < musicians.length; i++){
    results.push(musicians[i] +" plays "+ instruments[i])
    
  }
  return  results;
}

function johnLennonFacts(facts){
  var results = []
  while( facts.length > 0 ){
    results.push(facts.shift()+"!!!")
  }
  return results;
}

function iLoveTheBeatles(num){
  var results = []
  do{
    results.push("I love the Beatles!")
    num++;
  }while (num < 15 )
  return results
}