// add solution here
const theBeatlesPlay = (musicians, instruments) => {
  let musicianInstruments = []
  for(let i = 0; i < musicians.length; i++) {
    musicianInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return musicianInstruments
}

//could be a one-liner
//const johnLennonFacts = (facts) => facts.map((fact) => fact + '!!!')
const johnLennonFacts = (facts) => {
  let count = 0;
  let newFacts = [];
  while(count < facts.length) {
    newFacts.push(facts[count] + '!!!')
    count++;
  }
  return newFacts
}

const iLoveTheBeatles = (num) => {
  let arr = [];
  do {
      num++
      arr.push('I love the Beatles!')
  }while(num < 15)
  return arr;
}
