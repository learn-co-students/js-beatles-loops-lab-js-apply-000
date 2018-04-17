// Defined an empty array called beatles which combines the musicians array with the instruments array. 
function theBeatlesPlay (musicians, instruments) {
  let beatles = []; 
  for (let i = 0; i < musicians.length; i++) {
    beatles[i] = musicians[i] + " plays " + instruments[i];
  }
  return beatles;
}

function johnLennonFacts (facts) {
  let lennon = [];
  let i = 0;
  while (i < facts.length) {
    lennon[i] = facts[i] + "!!!";
    i++;
  }
  return lennon 
}

function iLoveTheBeatles (lovecounter) {
  let beatleslove = []; 
  do {
    beatleslove.push("I love the Beatles!")
    lovecounter++;
  } while (lovecounter < 15);
  return beatleslove; 
}








