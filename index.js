// add solution here
function theBeatlesPlay(anArrOfMusicians, anArrOfInstruments){
  let final = [];
  for(let i = 0; i < anArrOfMusicians.length; i++){
    final.push(`${anArrOfMusicians[i]} plays ${anArrOfInstruments[i]}`)
  }
  return final;
}

function johnLennonFacts(anArrOfFacts){
  let counter = 0;
  while(counter < anArrOfFacts.length){
  anArrOfFacts[counter] = `${anArrOfFacts[counter]}!!!`;
    counter++
  }
  return anArrOfFacts;
}

function iLoveTheBeatles(aNum){
  let final = [];
  do{
    final.push(`I love the Beatles!`);
    aNum++;
  } while (aNum < 15);
  return final;
}