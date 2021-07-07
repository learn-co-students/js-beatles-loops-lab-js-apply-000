// add solution here

function theBeatlesPlay(musicians,instruments){
  var artistAndInstruments=[];
  var artistPlays;
  for(var counter=0;counter<musicians.length;counter++){
    artistPlays=musicians[counter]+" plays "+instruments[counter];
    artistAndInstruments.push(artistPlays);
  }
  return artistAndInstruments;
}

function johnLennonFacts(facts){
  var counter=0;
  while(counter<facts.length){
    facts[counter]+="!!!";
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var loveOfBeatles=[];
  do{
    loveOfBeatles.push("I love the Beatles!");
    number++;
  }
  while (number<15);
  return loveOfBeatles;
}
