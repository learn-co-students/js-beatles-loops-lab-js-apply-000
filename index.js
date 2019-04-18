function theBeatlesPlay(players, instruments){        //first function


  var allPlayers = [];
  for (var i = 0; i < players.length; i++ ){
    allPlayers.push(players[i] + " plays " + instruments[i]);
  }
  return allPlayers;
  
}

function johnLennonFacts(){
  //second function
  
  const facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  
  var newFaxxxx = [];
  
  var i = 0;
  while (i < facts.length){
    newFaxxxx.push(facts[i] + "!!!");
    i++;
  }
  
  return newFaxxxx;
  
  }

function iLoveTheBeatles(num){
//third function

  var love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  }while(num < 15);
  
  
  return love;
    
}


