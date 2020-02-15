function theBeatlesPlay(array1, array2) {
  var newArr = [];

  for (var i = 0; i < array1.length; i += 1) {
    var string = array1[i] + " plays " + array2[i];
    newArr.push(string);
  }

  return newArr;
}

function johnLennonFacts(array) {
  var newArr = [];

  let i = 0;
  while (i < array.length) {
    var fact = array[i];
    var string = fact + "!!!";
    newArr.push(string);
    i += 1;
  }

  return newArr
}

function iLoveTheBeatles(number) {
  const arr = [];

  do {
    arr.push(`I love the Beatles!`)
    number++
  }
  while(number < 15)

  return arr

}
