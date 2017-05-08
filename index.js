function theBeatlesPlay( musician, instrument){
  let theBeatles = [];
  for (let i = 0; i < musician.length; i++){
    theBeatles.push(musician[i] + ' plays ' + instrument[i])
  }
  return theBeatles
}

function johnLennonFacts( facts ){
  let excitingJohnLennonFacts = [];
  let i = 0;
  while (i < facts.length){
    excitingJohnLennonFacts.push(facts[i] + '!!!');
    i++;
  }
  return excitingJohnLennonFacts
}

function iLoveTheBeatles(num){
  let allTheWay = [];
  do {
    if (num < 15){
    allTheWay.push('I love the Beatles!')
    }
    else {
       allTheWay.push('I love the Beatles!');
       return allTheWay
    }
  } while (allTheWay.length <= num);
  return allTheWay
}