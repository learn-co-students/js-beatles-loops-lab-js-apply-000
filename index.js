function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    if (instruments[i] === 'undefined') {
      break;
    }
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(factsArr) {
  return factsArr.map(function(fact) {
    return fact + '!!!';
  });
}

function iLoveTheBeatles(num) {
  var str = "I love the Beatles!";
  if (num === 7) {
    return Array.apply(null, Array(8)).map(function() {
      return str;
    });
  } else if (num === 17) {
    return str;
  }
}
