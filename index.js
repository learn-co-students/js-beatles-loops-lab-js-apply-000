

function theBeatlesPlay(musicians, instruments) {
  var cumArray = new Array;
  for( var ind = 0; ind < musicians.length; ind++ ) {
    cumArray[ind] = musicians[ind] + " plays " + instruments[ind];
  }
  return cumArray;
}

function johnLennonFacts(thefacts) {
  var ind = 0;
  var theFactsEx = new Array;
  while(thefacts[ind]){
    theFactsEx[ind] = thefacts[ind] + "!!!";
    ind++;
  }
  return theFactsEx;
}

function iLoveTheBeatles(number) {
  var loveArray = new Array;
  do {
    loveArray.push("I love the Beatles!");
    number++;
  }
  while( number < 15);
  return loveArray;
}