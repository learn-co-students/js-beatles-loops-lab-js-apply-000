function theBeatlesPlay(musicians,instruments) {
  var a = [];
  for(var i=0;i<=musicians.length-1;i++) {
    var myString = musicians[i] + " plays " + instruments[i];
    a.push(myString);
  }
  return a;
}

function johnLennonFacts(facts) {
  var i = 0;
  var myFactArray = [];
  while(i<=facts.length-1) {
    myFactArray.push(facts[i] + "!!!");
    i++;
  }
  return myFactArray;
}

function iLoveTheBeatles(number) {
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return myArray;
}
