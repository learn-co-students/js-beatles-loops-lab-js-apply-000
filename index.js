// add solution here

function theBeatlesPlay(musicians, instruments){
  let arr = [ ];
  for(let i=0; i < musicians.length; i++) {
  const str = musicians[ i ] +' plays '+ instruments[i];
  arr.push(str);
  }
  return arr ;
}

function johnLennonFacts(array) {
  var i = 0
  while (i < array.length) {
    array[i] += '!!!';
    i++;
  }
  return array;
}

 function iLoveTheBeatles(num) {
  var phrases = [];
  do {
    phrases.push("I love the Beatles!");
    num++
  } while (num < 15);
  return phrases;
} 