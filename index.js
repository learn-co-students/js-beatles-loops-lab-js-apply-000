// Create a function theBeatlesPlay, which accepts two parameters--an array of musicians and an array of instruments.

function theBeatlesPlay (musicians, instruments) {
  const buildString = [];
  for (let i = 0; i< musicians.length && i< instruments.length; i++) {
    buildString.push(musicians[i] + " plays " + instruments[i]);
  }
  return buildString;
}

function johnLennonFacts(facts) {
  let i = 0;
  while (i < parseInt(facts.length)) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}
  
function iLoveTheBeatles (num) {
  let arr = [];
    do{
      arr.push("I love the Beatles!");
      num ++;    
    }
      while(num < 15);
  return arr;
}