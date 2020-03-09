// add solution here

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
   array.push(`${musicians[i]} plays ${instruments[i]}`);
}
return array;
}

function johnLennonFacts(facts) {
    let i = 0
    while (i < facts.length) {
      facts[i] += '!!!';
      i++;
    }
    return facts;
  }

function iLoveTheBeatles(num) {
    let shoutArray = [];
    do {
        shoutArray.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return shoutArray;
}
