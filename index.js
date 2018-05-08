function theBeatlesPlay(artists, instruments){
  var finalArr = [];
  for(var i=0;i<artists.length;i++){
    finalArr.push(`${artists[i]} plays ${instruments[i]}`)
  }
  return finalArr;
}

function johnLennonFacts(facts){
  var arr = [];
  var i =0;
  while(i<facts.length){
    arr.push(facts[i]+"!!!")
    i++
  }
  return arr;
}

function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    num++;
  }
  while(num<15);
  
  return arr;
}