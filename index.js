// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}


function johnLennonFacts(array) {
  let i = 0
  while (i < array.length) {
    array[i] = array[i] + "!!!"
    i++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  var arr = [];
  var i = 0;
  do {
    arr.push("I love the Beatles!");
    i++;
  } while(i <= num && num < 15);
  return arr;
}
