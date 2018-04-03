function theBeatlesPlay(arr1, arr2) {
  var array = [];
  
  for (var i = 0; i < arr1.length; i++) {
    var musician = arr1[i];
    var instrument = arr2[i];
    
    array.push(musician + " plays " + instrument);
  }
  
  return array;
}


function johnLennonFacts(array) {
  var newArr = [];
  
  var i = 0;
  while (i < array.length) {
    var fact = array[i];
    newArr.push(fact + "!!!");
    i++;
  }
  
  return newArr;
}


function iLoveTheBeatles(num) {
  var array = [];
  
  var i = 1;
  do {
    num += i;
    array.push("I love the Beatles!");
  } while (num < 15);
  
  return array;
}




