function theBeatlesPlay(anArrayMu,anArrayIns){
  var newArray = [];
  for (let i=0; i<anArrayMu.length; ++i){
    let currentMusician = anArrayMu[i];
    let currentInstrument = anArrayIns[i];
    newArray.push(`${currentMusician} plays ${currentInstrument}`);
  }
return newArray;
  
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){

  let i = 0;
  let returnArray = [];
  while (i < facts.length ){
    let firstElement = facts[i];
    returnArray.push(`${firstElement}!!!`);
    
    ++i;
  }
  return returnArray

}

function iLoveTheBeatles(num){
  let anArray = [];
  let i=0;
  do {
      anArray.push(`I love the Beatles!`)
      ++num;
  }while (num < 15);
  return anArray;
}


  
