function theBeatlesPlay(musicians, instruments) {
  var array = []
  var i
  for (i=0; i< musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    array.push(string)
  }
  return array
}

function johnLennonFacts(facts) {
  var count = 0
  while (count < facts.length) {
    var string = facts[count]
    facts[count] = string + "!!!"
    count = count + 1
  }
  return facts

}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!");
    number = number +1
  } while (number < 15);
  return array;
}
