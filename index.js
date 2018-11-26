// add solution here
function theBeatlesPlay(musicians, instruments){
  var concert = [];
  let length = musicians.length;
  
  // Loop through each musician
  for (var i=0; i < length; i++){
    let musician = musicians[i];
    let instrument = instruments[i];
    let action = musician + " plays " + instrument;
    concert.push(action);
  }
  return concert;
}


function johnLennonFacts(facts){
  let length = facts.length;
  var excitingFacts = [];
  
  // Loop over each fact
  for (var i=0; i < length; i++) {
    let newFact = facts[i] + "!!!";
    excitingFacts.push(newFact);
  }
  
  return excitingFacts;
}

function iLoveTheBeatles(number){
  var messageArray = [];
  do {
    messageArray.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return messageArray;
}
