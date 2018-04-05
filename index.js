function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    arr.push(musician + ' plays ' + instruments[i]);
  }
  
  return arr;
}

function johnLennonFacts(array) {
  var arr = [];
  
  for (var i = 0; i < array.length; i++) {
    var ele = array[i];
    arr.push(ele + '!!!');
  }
  
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  
  if (num > 14) {
    return "I love the Beatles!";
  }
  
  for (var i = 0; i <= num; i++) {
    arr.push('I love the Beatles!');
  }
  
  return arr;
}

