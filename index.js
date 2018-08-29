// add solution here
theBeatlesPlay(musicians,instruments);

function theBeatlesPlay(musicians, instruments){
  var arr = []
  for(var i = 0; i < musicians.length; i++){
     arr.push(musicians[i] + " plays " + instruments[i])
  }
  console.log(arr);
  return arr;
}

var facts = [
        "He was the last Beatle to learn to drive",
        "He was never a vegetarian",
        "He was a choir boy and boy scout",
        "He hated the sound of his own voice"
]

johnLennonFacts(facts);

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts
}

function iLoveTheBeatles(num){
  var stuff =[];
  do{
    stuff.push("I love the Beatles!");
    num++;
  }
  while(num < 15);
  
  return stuff
}