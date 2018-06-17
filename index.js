const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments)
{
  var BeatlesLoops = [];
  for(var i=0; i<musicians.length; i++)
  {
      BeatlesLoops.push(musicians[i] +" plays "+ instruments[i]);
  }
  return BeatlesLoops;
}

const facts =[ "He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts (facts){
  var jFacts = [];
  for(var i=0; i<facts.length; i++)
  {
    jFacts.push(facts[i] +"!!!");
  }
  return jFacts;
}

function iLoveTheBeatles (number){
  var iLove = [];
  do{
    iLove.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return iLove;
}
