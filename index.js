function theBeatlesPlay(musicians, instruments){
  const phrase = [];

  for (let i = 0; i < musicians.length; i++){
    phrase.push(musicians[i] + " plays " + instruments[i])
  }
  return phrase
}

function johnLennonFacts(facts){
  let i = 0;
  let exFacts = [];
  while (i < facts.length) {
    exFacts.push(facts[i] + "!!!")
    i++
  }
  return exFacts;
}

function iLoveTheBeatles(number){
  const myArray = [];
  do{
    myArray.push("I love the Beatles!");
    number++
  }
  while (number < 15)
  return myArray;
}
