function theBeatlesPlay(arr1, arr2) {
  var newArray = [];
  
  for(var i = 0; i < arr1.length; i += 1) {
    newArray.push(arr1[i] + " plays " +arr2[i]);
  }
  
  return newArray;
}

function johnLennonFacts(arr) {
  var newArray = [];
  var i = 0;
  
  while(i < arr.length) {
    var fact = arr[i];
    
    newArray.push(fact + "!!!")
    i += 1;
  }
  
  return newArray;
}

function iLoveTheBeatles(num) {
  var newArray = [];
  var i = num;
  do {
    newArray.push("I love the Beatles!")
    i += 1;
  }
  
  while(i < 15);
  
  return newArray;
}