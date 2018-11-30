function theBeatlesPlay(musicians, instruments){
  let array = [];
  for (let i = 0; i < musicians.length; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  let arrays = [];
  let counter = 0;
  while (counter < facts.length) {
    arrays.push(facts[counter] + '!!!');
    counter++;
  }
    return arrays;
}

function iLoveTheBeatles(number) {
  let array = [];
  let counter = 0;
  do {
    array.push('I love the Beatles!');
    counter++;
  } while (counter <= number && number < 15);
  return array;
}
