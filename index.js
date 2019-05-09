// add solution here
function theBeatlesPlay ( musicians, instruments) {
  var sentences = [];
  for (let counter = 0; counter < musicians.length; counter ++){
    var sentence = musicians[counter] + ' plays ' + instruments[counter];
    sentences.push(sentence);
  }
  return sentences;
}

function johnLennonFacts (facts) {
  var crazyFacts =[];
  var counter = 0;
  while (counter < facts.length) {
    crazyFacts.push(facts[counter] + '!!!');
    counter ++ ;
  }
  return crazyFacts;
}

function iLoveTheBeatles (n) {
  var love = [];
  var counter = n;
  do {
    love.push("I love the Beatles!");
    counter ++;
  } while (counter < 15);

  return love;
}
