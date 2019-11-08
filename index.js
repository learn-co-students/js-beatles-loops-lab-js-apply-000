function theBeatlesPlay(musics, instrums) {
  var arr = [];
  
  for (var i = 0; i < musics.length; i++) {
    var music = musics[i];
    var instru = instrums[i];
    
    var phrase = music + " plays " + instru;
    arr.push(phrase);
  }
  
  return arr;
}

function johnLennonFacts(arr) {
  var i = 0;
  while( i < arr.length) {
    arr[i] = arr[i] + "!!!";
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15)
  
  return arr;
}
