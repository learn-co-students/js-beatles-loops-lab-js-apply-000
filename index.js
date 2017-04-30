function theBeatlesPlay(array, array2){
  var newStrings = [];

  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < 1; j++){
      newStrings.push(array[i] + " plays " + array2[i]);
    }
  }

  return newStrings;
};

function johnLennonFacts(array){
  var newArray = [];
  var i = 0;
  while( i < array.length){
      newArray.push(array[i] + "!!!");
      i++;
    }

  return newArray;
};

function iLoveTheBeatles(num){
  var array = [];

  do {
      array.push("I love the Beatles!");
      num++;
    }
    while (15 > num);

  return array;
};
