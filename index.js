const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  

function theBeatlesPlay(){
  var i;
	var beatles = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
	var instr = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
	var store = [];
	
  for (i = 0; i < 4; i++) {
    store.push (beatles[i] + " plays " + instr[i]);
  	}
  	
  	return store;
}

function johnLennonFacts(facts){
  var i;
  
  for (i = 0; i < facts.length; i++){
    facts[i] = facts[i] + "!!!"
  }
  return facts;
}

function iLoveTheBeatles(Number){
  var i = 0;
  var store = [];
  
  do { 
    store[i] = ("I love the Beatles!");
    i++;
      } while (i < (15 - Number));
  return store;
  }