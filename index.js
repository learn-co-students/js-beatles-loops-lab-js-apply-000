// add solution here

const theBeatlesPlay = (musicians, instruments) => {
  let matched = [];
  for (let i = 0; i < musicians.length; i++) {
    const currentMusician = musicians[i];
    const currentInstruments = instruments[i]; 
    
    matched.push(`${currentMusician} plays ${currentInstruments}`);
  }
  return matched;
}


const johnLennonFacts = (facts) => {
  let arrFacts = [];
  for (let i = 0; i < facts.length; i++) {
    arrFacts.push(facts[i] + '!!!');
  }
  return arrFacts; 
}
 
 
const iLoveTheBeatles = (num) => {
  let senArr = [];
  const sentence = 'I love the Beatles!';
  
  if ( num > 15) {
    senArr.push(sentence);
  } else {
      let i = 0;
      while (i <= num) {
        senArr.push(sentence);
        i++;
      }
    }
  return senArr;
  
}