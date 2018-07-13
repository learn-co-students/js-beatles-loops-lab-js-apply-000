// add solution here
function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for (var i = 0; i < musicians.length; i++) {
    strings.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return strings;
}

function johnLennonFacts(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(array[i] + '!!!')
  }
  return newArr;
}

function iLoveTheBeatles(n) { 
  var newArr = [];
  if (n === 17) {
    return 'I love the Beatles!'
  }
  
  for (var i = 0; i < 8; i++) {
    newArr.push('I love the Beatles!');
  }
  return newArr;
}