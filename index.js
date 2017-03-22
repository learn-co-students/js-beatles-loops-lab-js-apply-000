// for loop

function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var combos = [];
  for (var i = 0; i < musiciansArray.length; i++) {
    var musician = musiciansArray[i]
    var str = musician + " plays " + instrumentsArray[i];
    combos.push(str);
  }
  return combos;
}

// while loop

function johnLennonFacts(array) {
  var shouted = [];
  var i = 0;
  while (i < array.length) {
    var words = array[i] + "!!!";
    shouted.push(words);
    i++;
  }
  return shouted;
}

// do-while loop

function iLoveTheBeatles(num) {
  var array = [];
  var beatlesFan = 'I love the Beatles!';
  var i = 0;
do {
  array.push(beatlesFan);
  i++;
} while (i <= num && num < 15);
  return array;
}
