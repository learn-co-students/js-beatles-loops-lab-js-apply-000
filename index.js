function theBeatlesPlay (nameArr, instrArr) {
  var final = [];

  for (var i = 0; i < nameArr.length; i++) {
    final.push(nameArr[i] + " plays " + instrArr[i]);
  }
  return final;
}

function johnLennonFacts (arr) {
  var final = [];
  var i = 0;
  while (i < arr.length) {
    final.push(arr[i] + "!!!");
    i++;
  }
  return final;
}

function iLoveTheBeatles(num) {
  var final = [];
  var i = 0;

  if (num < 15) {
    do {
      final.push("I love the Beatles!");
      i++;
    }
    while (i <= num);
  } else {
    final.push("I love the Beatles!");
  }

  return final;
}
