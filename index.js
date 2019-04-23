// add solution here
function theBeatlesPlay(arr1, arr2) {
  var result = [];
  
  for (var i = 0; i < arr1.length; i++) {
    var musicians = arr1[i];
    var instruments = arr2[i];
    var str = musicians + ' plays ' + instruments;
    result.push(str);
  }
  
  return result;
}


function johnLennonFacts(arr) {
  var newArr = [];
  
  var i = 0;
  while (i < arr.length) {
    var fact = arr[i];
    var exclaimedFact = fact + '!!!';
    newArr.push(exclaimedFact);
    i++;
  }
  
  return newArr;
}


function iLoveTheBeatles(num) {
  var newArr = [];
  
  do {
    var str = 'I love the Beatles!';
    newArr.push(str);
    num++
  } while (num < 15);
  
  return newArr;
}
