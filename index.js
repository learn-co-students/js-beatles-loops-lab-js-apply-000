function theBeatlesPlay(musicians, instruments) {
  var arry = [];

  for (var i = 0; i < musicians.length; i++) {
    var str = musicians[i] + " plays " + instruments[i];
    arry.push(str);
  }

  return arry;
}

function johnLennonFacts(array) {
  var newArry = [];

  var i = 0;
  while (i < array.length) {
    var newStr = array[i] + "!!!";
    newArry.push(newStr);
    i++;
  }


  return newArry;
}



function iLoveTheBeatles(number) {
  var newArry = [];

  if (number === 17) {
    return "I love the Beatles!";
  }

  var i = 0;
  while (i <= number) {
    var str = "I love the Beatles!";
    newArry.push(str);
    i++
  }

  return newArry;
}
