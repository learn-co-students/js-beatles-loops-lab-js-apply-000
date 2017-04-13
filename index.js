var beatlesMusicians = ['John','Paul','Ringo','George'];
var beatlesInstruments = ['guitar', 'bass', 'drums', 'guitar'];


function theBeatlesPlay(musicians, instruments){
  var plays = [];

  for(var i = 0; i < musicians.length; i++){
    var player = musicians[i] + " plays " + instruments[i];
    plays.push(player)
  }

  return plays;
}


theBeatlesPlay(beatlesMusicians, beatlesInstruments);


function johnLennonFacts(facts){
  var factsLoud = [];

  var i = 0;
  while(i < facts.length){
    var fact = facts[i] + "!!!"
    factsLoud.push(fact);
    i++;
  }

  return factsLoud;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

johnLennonFacts(facts)



function iLoveTheBeatles(num){
  var messages = [];
  var message = "I love the Beatles!";
  var i = 0;

  do{
    messages.push(message);

    if(num > 15){
      return messages;
    }
    i++;
  }
  while(i <= num);

  return messages;
}

iLoveTheBeatles(7)
