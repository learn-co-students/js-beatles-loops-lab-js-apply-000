function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  
  for ( var i = 0; musicians.length; i++ ) {
    arr.push(`${musicians[i]} plays ${instruments}`);
  }

  return arr;
}

function johnLennonFacts(lennonFacts) {
  var arr = [];
  var i = 0;
  
  while ( i < lennonFacts.length ) {
    arr.push(`${facts[i++]}!!!`);
  }
}

function iLoveTheBeatles(num) {
  var arr = [];
  
  do {
    arr.push("I love the Beatles!");
    num++;
  } while ( num < 15 );
}