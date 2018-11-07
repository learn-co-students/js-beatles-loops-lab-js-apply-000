// add solution here
function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles;
}

function johnLennonFacts(array) {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice" ];
  var lennonFacts = [];
  var i = 0
  while(i < array.length) {
    lennonFacts.push(array[i] + '!!!');
    i++;
  }
  return lennonFacts;
}

function iLoveTheBeatles(num) {
  var love = [];
  do {
    love.push('I love the Beatles!');
    num++
    
  } while(num < 15) {
    
  }
  return love;
}