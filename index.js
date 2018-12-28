
function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    newArr.push(musician + ' plays ' + instrument);
  }
  return newArr;
}

function johnLennonFacts(facts) {
  var newArr = [];
  var i = 0;
  while (i < facts.length) {
    var fact = facts[i];
    newArr.push(fact + '!!!');
    i++;
  }

  return newArr;
}

function iLoveTheBeatles(num) {
  var newArr = []
  var text = 'I love the Beatles!';
  var i = 0;

  if (num >= 15) {
    newArr.push(text);
    return newArr;
  }

  do {
  i  += 1;
    newArr.push(text);
  }  while (i <= num);

  return newArr;
}



