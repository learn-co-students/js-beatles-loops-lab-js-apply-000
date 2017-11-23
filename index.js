function theBeatlesPlay(x,y) {
  var i, musicians, instruments;
  var newArr = [];
  musicians = x;
  instruments = y;

  for (i = 0; i <musicians.length; i++){
    newArr [i] = musicians[i] + " plays " + instruments[i];
  }
  return newArr
}

function johnLennonFacts(x){

  var i = 0;
  var newArr = [];
  var facts = [];
  var quote;
  facts = x;
  quote = "!!!";



  while ( i < facts.length) {
    newArr[i] = facts[i] + quote;
    i++;
  }

return newArr
}

function  iLoveTheBeatles(x){

  var i = 0;
  var newArr = [];
  var passedPara = 0;
  var quote;
  passedPara = x;
  quote = "I love the Beatles!";

  do{ newArr[i]= quote;
    i++;

  } while ( i + passedPara < 15);

    return newArr
  }
