function theBeatlesPlay(musicians, instruments){
  var links = [];

  for (var i = 0; i < musicians.length; i++) {
    var sentence = musicians[i] + " plays " + instruments[i];
    links.push(sentence);
  }

  return links;
}

function johnLennonFacts(factArr){
  var j = 0;

  while (j < factArr.length) {
    factArr[j] = factArr[j] + "!!!";
    j++;
  }

  return factArr;
}

function iLoveTheBeatles(num){
  var lovingArr = [];

  do {
    lovingArr.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return lovingArr;
}
