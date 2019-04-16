// add solution here
function theBeatlesPlay(musicians, instruments){
  var someArr = [];
  for(let i = 0; i < musicians.length; i++){
    var newStr = `${musicians[i]} plays ${instruments[i]}`;
    someArr.push(newStr);
  }
  return someArr;
}

function johnLennonFacts(facts){
  var count = 0; 
  var excitingFacts = [];
  while(count < facts.length){
    var excitingFact = facts[count]+"!!!";
    excitingFacts.push(excitingFact);
    count++;
  }
  return excitingFacts;
}

function iLoveTheBeatles(num){
  var gushes = [];
  do {
    gushes.push("I love the Beatles!");
    num++;
  } while(num < 15);
  return gushes;
}