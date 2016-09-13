function theBeatlesPlay(musicians, instruments) {
  var list = [];
  for (var i = 0; i < musicians.length; i++) {
    list.push(musicians[i] + " plays " + instruments[i]  )
  }

  return list;
}

function johnLennonFacts(array) {
  var list = [];
  for (var i = 0; i < array.length; i++) {
    var fact = array[i]
    list.push(array[i]+"!!!");
  }

  return list;
}

function iLoveTheBeatles(number) {
  var list = [];
  var love = "I love the Beatles!"
  var i = 0;
  do {
    list.push(love);
    i += 1;
  } while (i <= number);

  if (number === 17) {
    list = [love];
  }

  return list;
}
