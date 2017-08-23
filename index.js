

function theBeatlesPlay (array1, array2) {
  var whoPlaysWhat = [];
  var string = ""

  for (var i = 0; i < array1.length; i++) {
    var beatle = array1[i];
    var instrument = array2[i];
    // var plays = string + beatle + " plays " + instrument;

    whoPlaysWhat.push(beatle + " plays " + instrument);
  }
  return whoPlaysWhat;
}

function johnLennonFacts(array){
  var bigFacts = [];

  for (var i = 0; i < array.length; i++) {
    var fact = array[i];
    bigFacts.push(fact + "!!!");
  }

  return bigFacts;
}

function iLoveTheBeatles(num) {
  var beatleLove = [];

  if (num > 15) {
    return "I love the Beatles!";
  }

  var i = num
  while (i < 15) {
    beatleLove.push("I love the Beatles!");
    i++;
  }
  return beatleLove;
}

console.log(iLoveTheBeatles(17));
