// add solution here
var musicians = ["John Lennon", "Elton John"];
var instruments = ["guitar", "piano"];

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  console.log(array);
  return array;
}

var facts = [
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];

function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while (i < facts.length ) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  console.log(array);
  return array;
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while(num < 15);
  console.log(array);
  return array;
}

iLoveTheBeatles(15);