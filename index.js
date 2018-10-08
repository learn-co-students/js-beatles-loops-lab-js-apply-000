// add solution here
function theBeatlesPlay(musicians, instruments){
  let xRay = [];
  for(let i = 0; i < musicians.length; i++){
    let curMusician = musicians[i];
    let curInstrument = instruments[i];
    let curString = `${curMusician} plays ${curInstrument}`;
     console.log(curString);
    xRay.push(curString);
  }
  return xRay;
}

function johnLennonFacts(facts){
  let xRay = [];
  for(let i = 0; i < facts.length; i++){
    xRay.push(`${facts[i]}!!!`)
  }
  return xRay
}

function iLoveTheBeatles(numbah){
  let xRay = [];
  do {
    xRay.push("I love the Beatles!");
    numbah++;
  } 
  while(numbah < 15);
  return xRay;
}