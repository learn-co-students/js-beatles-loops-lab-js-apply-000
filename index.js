// add solution here
function theBeatlesPlay(musicians, instruments) {
  const arry = [];

  for(let x=0; x<musicians.length; x++) {
    arry.push(musicians[x] + " plays " + instruments[x]);
  }
  
  return arry;
}


  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];  
  


function johnLennonFacts(facts) {

  const FACTS = [];
  let y = 0;
  
  while(y<facts.length){
    FACTS.push(facts[y]+'!!!');
    y++;
  }
  
  return FACTS;

}

function iLoveTheBeatles(z) {
  const loveArr = []

  do {
    loveArr.push('I love the Beatles!')
    z++
  } while (z < 15)

  return loveArr
}