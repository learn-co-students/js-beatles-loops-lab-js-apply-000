function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for(var i = 0; i < musicians.length; i++) {
    newArr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return newArr;
}

function johnLennonFacts(array) {
  var result = [];
  var i = 0;
  while(i < array.length) {
    result.push(array[i] + '!!!');
    i++;
  }
  return result;
}

function iLoveTheBeatles(number) {
  var newArr = [];
  do{
    newArr.push('I love the Beatles!');
    number++;
  } while(number < 15);

  return newArr;
}
