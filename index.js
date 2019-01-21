function theBeatlesPlay(artist, instrument) {
  var arr =[];
  for(let i =0; i< artist.length; i++) {
    arr.push(`${artist[i]} plays ${instrument[i]}`)
  }
  return arr;
}

function johnLennonFacts (facts) {
  var factCount = 0;
  while(factCount < facts.length) {
    facts[factCount] += '!!!';
    factCount++;
  }
  return facts;
}

function iLoveTheBeatles  (num) {
  var arr=[];
    do {
      arr.push('I love the Beatles!');
      num = num + 1;
    } while (num < 15);
  return arr;
}
