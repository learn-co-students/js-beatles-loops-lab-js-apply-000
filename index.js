// add solution here
function theBeatlesPlay(arrMusicians, arrInstruments) {
  const arr = [];
  
  for (let i = 0; i < arrMusicians.length; i++) {
      arr.push(`${arrMusicians[i]} plays ${arrInstruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(arrFacts) {
  const exclaimedFacts = []
  
  let i = 0;
  
  while (i < arrFacts.length) {
    exclaimedFacts.push(`${arrFacts[i]}!!!`)
    i++;
  }
  return exclaimedFacts;
}

function iLoveTheBeatles(num) {
  let arr = [];
  do {
    arr.push('I love the Beatles!')
    num++
  } while (num < 15) 
 return arr;
}

