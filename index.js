function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    array.push(string);
  }
  return array;
}

function johnLennonFacts(arr) {
  var i = 0;
  while (i < arr.length) {
    arr[i] = arr[i] + "!!!";
    i++;
  }
  return arr;
}

/*+ Create a function `iLoveTheBeatles` which accepts a number as a parameter. The body of the function should
create a variable that stores an empty array. Then, implement a do-while loop inside the function that adds
`"I love the Beatles!"` to the empty array. Then the loop should increment the number passed in as a parameter.
The condition of the loop should check to see that the parameter number is less than `15`. The function should
return the array with the strings `"I love the Beatles!"`.*/

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return arr;
}
