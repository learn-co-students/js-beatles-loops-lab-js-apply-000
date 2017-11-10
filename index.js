function theBeatlesPlay(arr1, arr2) {
  var final = [];
  for (var i = 0; i < arr1.length; i++) {
    final.push(arr1[i] + " plays " + arr2[i]);
  }
  return final;
}



//-----------------------------------------------------------------------------



function johnLennonFacts(arr) {
  var empty = [];
  var text = '!!!';
  var i = 0;
  while (i < arr.length) {
    empty.push(arr[i] + text);
    i++;
  }
  return empty;
}

//-----------------------------------------------------------------------------

function iLoveTheBeatles(num) {
  var empty1 = [];
  var i = num;
  do {
    empty1.push('I love the Beatles!');
    i++;
  } while (i < 15);
  return empty1;
}
