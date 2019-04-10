function theBeatlesPlay(musicians, instruments) {

  var myArr = [];
  var strs;

  for (let i=0; i < musicians.length; i++) {
    strs = `${musicians[i]} plays ${instruments[i]}`;
    myArr.push(strs);
  }

  return myArr;

}

function johnLennonFacts(facts) {

  var str;
  var counter = 0;
  var factArr = [];

  while (counter < facts.length) {

    str = `${facts[counter]}!!!`;
    factArr.push(str);
    counter++;

  }

  return factArr;

}

function iLoveTheBeatles(num) {

  var myArr = [];
  var theStr = 'I love the Beatles!';

  do {

    myArr.push(theStr);
    num++;

  } while (num < 15);

  return myArr;

}
