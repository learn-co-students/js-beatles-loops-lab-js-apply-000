const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    
function theBeatlesPlay(musicians, instruments){
  let arr = [];
  for(let i=0; i < 4; i++){
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts){
  let i = 0;
  let arr = [];
  while(i < facts.length){
    arr.push(facts[i] + "!!!")
    i++;  
  }
  return arr;
}

function iLoveTheBeatles(num){
  let arr = [];
  let i = num;
  do {
    arr.push("I love the Beatles!");
    i++;
  } while(i < 15)
  return arr;
}

