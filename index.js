// add solution here
function theBeatlesPlay(musicians, instruments){
  let theyPlay = [];
  for (let i = 0; i < musicians.length; i++){
    theyPlay.push(musicians[i]+" plays "+ instruments[i])
  }
return theyPlay
}

function johnLennonFacts(n){
  let facts = n;
  let newFacts = [];
  let i =0;
  while (i < facts.length){
    newFacts.push(facts[i]+"!!!")
    i++
  }
return newFacts
}

function iLoveTheBeatles(num){
  let iLove = [];
  do{
    iLove.push("I love the Beatles!");
        num++;
  } while (num < 15);
  return iLove
}
