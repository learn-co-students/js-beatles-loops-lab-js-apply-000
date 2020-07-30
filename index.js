// add solution here

const theBeatlesPlay = (musicians, instruments) => {
  let newArr = [];
  for (let i = 0; i < musicians.length; i++) {
      newArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  
  return newArr;
};

const johnLennonFacts = (facts) => {
  let i = 0
  let arrFacts = [];
  while (i < facts.length) {
    arrFacts.push(`${facts[i]}!!!`)
    i++
  }
  
  return arrFacts
}

const iLoveTheBeatles = (num) => {
  let beatles = [];
  
  do {
    beatles.push('I love the Beatles!')
    num++
    
} while (num <= 14) 
  
return beatles
}