// add solution here
function theBeatlesPlay(musicians,instruments){
  let returnArray = [];
  for(let counter = 0; counter < musicians.length; counter++){
    let plays = musicians[counter] + ' plays ' + instruments[counter];
    returnArray.push(plays);
  }
  return returnArray;
}

function johnLennonFacts(facts){
  let counter = 0;
  let newFacts = [];
  while(counter < facts.length){
    let fact = facts[counter];
    fact += "!!!";
    newFacts.push(fact)
    counter++;
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  let array = [];
  do{
    array.push("I love the Beatles!");
    number++
  }
  while(number < 15);
  return array;
}
