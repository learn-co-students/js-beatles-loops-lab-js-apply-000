function theBeatlesPlay(musicians, instruments){
  let tempArray = [];
  for(let i=0; i<musicians.length; i++){
    let name = musicians[i];
    let instrument = instruments[i]
      tempArray.push(name + " plays " + instrument)
  }
  return tempArray;
}

function johnLennonFacts(facts){
  let newFacts = [];
  let i=0;
  while(i<facts.length){
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  let loveArray =[];
  let num = number;
  do{
    loveArray.push("I love the Beatles!")
    num++;
  }
  while(num <15)
  return loveArray;
}