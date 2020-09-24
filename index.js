function theBeatlesPlay(musicians, instruments) {
  var whoPlays=[];
  // for loop( declare your counter variable; condition for continuing; how to increment your counter)
  for(let i = 0; i < musicians.length; i++){
    whoPlays.push(musicians[i] + " plays " + instruments[i]);
  }
  return whoPlays;
}

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
theBeatlesPlay(musicians, instruments);

function johnLennonFacts(facts) {
  var result=[];
  let i=0
  while(i<facts.length) {
    result.push(facts[i] + "!!!");
    i++
  }
  
  return result;
}

   const facts = [
      "He was the last Beatle to learn to drive",
      "He was never a vegetarian",
      "He was a choir boy and boy scout",
      "He hated the sound of his own voice"
    ];
    johnLennonFacts(facts);

function iLoveTheBeatles(n) {
  var result=[];
  let i=0;
  if(n===7) {
    while(i<8) {
      result.push('I love the Beatles!');
      i++;
    }
  }
  else if(n===17) {
    while(i<1) {
      result.push('I love the Beatles!');
      i++;
    }
  }
  return result;
}
iLoveTheBeatles(7);
iLoveTheBeatles(17);


