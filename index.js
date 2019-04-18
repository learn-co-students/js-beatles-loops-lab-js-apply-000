
function theBeatlesPlay(players, instruments){        //first function


  var allPlayers = [];
  for (var i = 0; i < players.length; i++ ){
    allPlayers.push(players[i] + " plays " + instruments[i]);
  }
  return allPlayers;
  
}

function johnLennonFacts(facts){
  //second function
  
  /* this was a mistake leaving it here for learning purposes
  
  const factuals = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  
  
  */
  var newFacts = [];
  
  var i = 0;
  while (i < facts.length){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  
  return newFacts;
  
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


