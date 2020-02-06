function theBeatlesPlay(musicians, instruments) {
  var result = [];
  
  for (var i = 0; i < musicians.length; i++) {
    var artist = musicians[i];
    
    for (var j = 0; j < instruments.length; j++) {
      var instru = instruments[i];
    }
    
    result.push(artist + ' plays ' + instru);
  }
  
return result;
}

function johnLennonFacts(array) {
  var i = 0;
  const newFacts = [];
  
  while (i < array.length) {
    var fact = `${array[i]}!!!`;
    
    i++;
    newFacts.push(fact);
  }
  
return newFacts;
}

function iLoveTheBeatles(Number) {
  var result = [];
  var num = Number + 1;
  
  if (num > 17) {
    result.push('I love the Beatles!');
  }
  
  if (num <= 17) {
   var i = 0;
  
   do {
    i++;
    result.push('I love the Beatles!');
    
    } while (i < num);
  }
  
  
return result;
}