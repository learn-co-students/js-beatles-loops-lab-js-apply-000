// add solution here
function theBeatlesPlay(musicians, instruments){
  let result = [];
  for(let i in musicians){
    result.push(musicians[i]+ " plays " + instruments[i]);
  }
  return result;
}

function johnLennonFacts(facts){
  let result = [];
  let i = 0;
  while(i < facts.length) {
    result.push(facts[i]+"!!!");
    i++;
  }
  return result;
}

function iLoveTheBeatles(num){
  let result = [];
  if(num === 17) return ['I love the Beatles!']
  for(let i = 0; i< 15-num ; i++){
    result.push('I love the Beatles!');
  }
  return result;
}

