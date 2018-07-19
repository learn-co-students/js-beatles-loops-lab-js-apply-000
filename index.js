function theBeatlesPlay(musicians, instruments) {
  let newArray = [];
  for (let i = 0; i < musicians.length; i++ ) {
  newArray.push(musicians[i] + ' plays ' +  instruments[i]);
  } return(newArray);
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i++
  } return(facts);
}

function iLoveTheBeatles(number) {
  let newArray = [];
  do {
    newArray.push('I love the Beatles!');
  } 
  while (number++ && number < 15);
  return(newArray);
}