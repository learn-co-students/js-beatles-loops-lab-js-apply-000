// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
  	array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}


function johnLennonFacts(array) {
  var result = [];
  var count = 0;
  while (count < array.length){
    result.push(array[count] + '!!!')
    count++
    
  }return result;
}



function iLoveTheBeatles(num) {
  var arr = [];
  do  {
    arr.push('I love the Beatles!');
    num ++;
    } while (num < 15);
    return arr;
}

