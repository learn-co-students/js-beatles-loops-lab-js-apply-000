'use strict';
function theBeatlesPlay(musicians, instruments){
  var newArr = [];
  for (var i = 0; i < musicians.length; i++){
    newArr.push(musicians[i] + ' plays ' + instruments[i])
  }
  return newArr;
}

function johnLennonFacts(array){
  var i = 0;
  while (i < array.length){
    array[i] += "!!!";
    i++;
  }
  return array;
}

function iLoveTheBeatles(num){
  var times = [];
  do {
    times.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return times;
}
