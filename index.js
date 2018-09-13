function theBeatlesPlay(musicians, instruments) {
  var newArr = [];
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    var str = musician + ' plays ' + instrument;
    newArr.push(str);
  }
  return newArr;
}

function johnLennonFacts(facts) {
  var arr = [];
  var i = 0;
  while (i < facts.length) {
    var fact = facts[i];
    var str = fact + '!!!';
    arr.push(str);
    i++
  }
  return arr;
}

function iLoveTheBeatles(counter) {
  var arr = [];
  var counter = 0;
  do { 
    arr.push("I love the Beatles!");
    counter++;
  } while (counter <= 15);
}

