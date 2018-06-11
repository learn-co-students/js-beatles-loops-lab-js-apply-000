function theBeatlesPlay(musicians, instruments) {
  let emptyArray = [];
  
  for(let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instrument[i]}`);
  }
  
  return emptyArray;
}


function johnLennonFacts(facts) {
  let counter = 0;
  let newFactsArray = [];
  
  while(facts.length > counter) {
    newFactsArray.push(facts[counter] + '!!!');
    counter++;
  }
  
  return newFactsArray;
}


function iLoveTheBeatles(num) {
  let newArray = [];
  
  do {
    emptyArray.push("I love the Beatles!");
    num++;
    
  } while (num < 15);
  
  return newArray;
}