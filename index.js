function theBeatlesPlay(musicians, instruments) {
  var sentence = [];
  for (var i = 0; i < musicians.length; i++) {
    sentence.push(musicians[i] + " plays " + instruments[i]);
  } return sentence;
}


const facts = [
  "He was a man",
  "He was a musician",
  "He was part of the beatles",
];

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!"
  } return facts;
}


function iLoveTheBeatles(num) {
  var arr = [];
  if (num >= 15) {
    return "I love the Beatles!"
  }
  while (num < 15) {
    arr.push("I love the Beatles!");
    num++;
  } return arr;
}
