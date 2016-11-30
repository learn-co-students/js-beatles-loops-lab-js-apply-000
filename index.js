function theBeatlesPlay(musicianArr, instrumentArr) {
  var arr = [];
  for (var i = 0; i < musicianArr.length; i++) {
    arr.push(musicianArr[i] + " plays " + instrumentArr[i]);
  }
  return arr;
}

function johnLennonFacts(arr) {
  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + '!!!';
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return arr;
}
/*
+ Create a function `iLoveTheBeatles` which accepts a number as a parameter.
The body of the function should create a variable that stores an empty array.
Then, implement a do-while loop inside the function that adds `"I love the
Beatles!"` to the empty array. Then the loop should increment the number
passed in as a parameter. The condition of the loop should check to see that
the parameter number is less than `15`. The function should return the array
with the strings `"I love the Beatles!"`.
*/
