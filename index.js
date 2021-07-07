const theBeatlesPlay = (musicians, instruments) => {
  let plays = [];
  for (let i=0; i<musicians.length; i++){
    plays.push(musicians[i] + " plays " + instruments[i])
  }
  return plays;
}

const johnLennonFacts = (facts) => {
  let i=0;
  while (i<facts.length){
    facts[i] += '!!!';
    i++;
  }
  return facts;
}

const iLoveTheBeatles = (num) => {
  let stringArray = [];
  do {
    stringArray.push('I love the Beatles!')
    num++;
  } while (num < 15);
  return stringArray;
}