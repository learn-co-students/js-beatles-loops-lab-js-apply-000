function theBeatlesPlay(musicians, instruments) {
  var temp = [];
  for(var i = 0; i < musicians.length; i ++){
    var member = musicians[i];
    var instrument = instruments[i];
    var combo = member + " plays " + instrument;
    temp[i] = combo;
  }
  
  return temp;
}

function johnLennonFacts(facts){
  var counter = 0;
  while(counter < facts.length){
    var item = facts[counter];
    item = item + "!!!";
    facts[counter] = item;
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var tempArray = [];
  var love = "I love the Beatles!";
  var maxValue = 15;
  do{
    tempArray.push(love);
    number++;
  } while (number < maxValue);
  
  return tempArray;
}