function theBeatlesPlay(arr1, arr2) {
  var array = []; 

  for (var i = 0; i < arr1.length; i++) {
    var sentence = arr1[i] + " plays " + arr2[i]; 
    array.push(sentence); 
  }

  return array; 
}

function johnLennonFacts(arr) {
  var newArray = []; 

  var i = 0; 
  while (i < arr.length) {
    newArray.push(arr[i] + "!!!"); 
    i++; 
  }

  return newArray; 
}

function iLoveTheBeatles(num) {
  var array = []; 

  do {
    array.push("I love the Beatles!"); 
    num ++; 
  } while (num < 15)

  return array; 
}