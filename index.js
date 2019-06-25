// add solution here
function theBeatlesPlay(musicians, instruments) {
  var new_arr = []
    for (var i = 0; i < 4 ; i++) {
      new_arr.push(musicians.shift() + ' plays ' + instruments.shift())
    }
  return new_arr
}

function johnLennonFacts(array) {
  var new_arr = []
    while (array.length > 0) {
      new_arr.push(array.shift() + '!!!')
    }
  return new_arr
}

function iLoveTheBeatles(n) {
  var i = 0
  var new_arr = []
	do {
		i = i + 1;
		new_arr.push('I love the Beatles!');
	} while (i < 15 - n);
  return new_arr
}