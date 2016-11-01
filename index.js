const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for(let i = 0; i<musicians.length; i++){
    newArr.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArr;
}

function johnLennonFacts(facts){
  let i = 0;
  while (i < facts.length){
    facts[i] += "!!!"
    i++
  }
  return facts;
}

function iLoveTheBeatles(n){
  var newArr = [];
  let i = 0;

  do {
    newArr.push("I love the Beatles!");
    i++;
  } while(i<=n && n<15)
  return newArr;
}
