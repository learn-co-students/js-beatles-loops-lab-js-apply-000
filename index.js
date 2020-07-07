// add solution here
function theBeatlesPlay(musicians, instruments){
  var arrayOne = [];
  for(let i=0; i < musicians.length; i++){
      arrayOne.push(musicians[i]+' plays ' + instruments[i])
    
  }
  return arrayOne;
}
function johnLennonFacts(facts){
  let i=0;
  let arrayTwo=[];
  while(facts[i]){
    arrayTwo.push(facts[i]+"!!!");
    i++;
  }
  return arrayTwo;
}
function iLoveTheBeatles(n){
  var arrayThree = [];
  let i = 0;

  do {
    arrayThree.push("I love the Beatles!");
    n++;
  }
  while( n < 15);
  return arrayThree
}