

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    for(let k=0; k<instruments.length;k++) {

    }
      array.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return array;
}

function johnLennonFacts(facts) {
  let x = 0;
  while (facts.length > x) {
    facts[x] += "!!!";
    x++;
  }
  return facts;  
}

function iLoveTheBeatles(num) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15)
  return array;
}

iLoveTheBeatles()