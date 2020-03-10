// add solution here
function theBeatlesPlay(musicians, instrument){
  let musicianList = [];
  
  for (let i = 0; i < musicians.length; i++){
    let currentMusician = musicians[i];
    let currentInstrument = instrument[i];
    
    let string = `${currentMusician} plays ${currentInstrument}`;
    musicianList.push(string);
  }
  return musicianList
}

function johnLennonFacts(facts){
  let results = [];
  let count = 0;
  
  while (count < facts.length){
    results.push(facts[count] + "!!!");
    count++;
  }
  return results;
}

function iLoveTheBeatles(num) {
  let array = [];
  do {
    array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}
  
  


