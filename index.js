// add solution here
var musicians= ['John Lennon', 'Paul McCartney','George Harrison', 'Ringo Starr'];
var instruments= ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musicians, instruments){
  var array= [ ];
  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}


var facts = [
  'He was the last Beatle to learn to drive',
  'He was never a vegetarian',
  'He was a choir boy and boy scout',
  'He hated the sound of his own voice'];
  
function johnLennonFacts(facts){
  var array = [ ];
  var i = 0;
  while (i < facts.length){
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}


function iLoveTheBeatles(number){
  var array = [ ];
  do{
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}