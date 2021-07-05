// add solution here

function theBeatlesPlay(arr1, arr2){
  var arr = [];

  for (var i = 0; i < arr1.length; i++) {
    arr.push(arr1[i] + " plays " + arr2[i]);
  }
  return arr;
}

function johnLennonFacts(arr) {
  var facts = [];
  var i = 0;

  while(facts.length < arr.length) {
    facts.push(arr[i] + "!!!");
    i++;
  }

  return facts;
}

function iLoveTheBeatles(num) {
  var result = [];
  var i = 0;

  do {
    result.push("I love the Beatles!");
    i++;
  } while (i <= num && num < 17)

  return result;
}
