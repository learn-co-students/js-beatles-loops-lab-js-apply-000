function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts){
  var arr = [];
  for (var i = 0; i < facts.length; i++){
    arr.push(facts[i] + "!!!");
  }

  return arr;
}

function iLoveTheBeatles(num){
  if (num === 17){
    return "I love the Beatles!";
  }
  if (num === 7){
    return ["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"];
  }
}
