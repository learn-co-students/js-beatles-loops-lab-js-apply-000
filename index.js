const combo = [];

function theBeatlesPlay (beatlesMusicians, instruments) {

for (var i =0; i<instruments.length; i++)
  {
    combo[i] = beatlesMusicians[i] + " plays " + instruments[i];
  }
  return combo;

}
 var facts = [ 'He was the last Beatle to learn to drive', 'He was never a vegetarian', 'He was a choir boy and boy scout', 'He hated the sound of his own voice', 'While on tour, he enjoyed playing Monopoly', 'Harmonica was the first instrument Lennon learned to play'];

function johnLennonFacts (facts) {
    var i = 0; 
    while (i<facts.length){
    facts[i] += '!!!';
      i++;
    }
    return facts;
}


function iLoveTheBeatles(i){
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    i++;
  } while (i<15);
  return emptyArray;
}