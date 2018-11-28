// add solution here
let theBeatlesPlay = (musicians, instruments) => {
  let bPI = [];
  for (let i = 0; i < 4; i++){
    bPI[i] = musicians[i] + " plays " + instruments[i];
  }
  return bPI;
}
let johnLennonFacts = (jLFacts) => {
  let factsArray = [];
 let counter = 0;
  while(counter < jLFacts.length){
    factsArray[counter] =  jLFacts[counter] + "!!!";
    counter ++;
  }
return factsArray;
}

let iLoveTheBeatles = (num) => {
  let beatlesLove = [];
  let i = 0;
  do{
    beatlesLove[i] = "I love the Beatles!";
    i++
  } while (num + i  < 15);
  return beatlesLove;
}
