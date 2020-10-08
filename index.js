// add solution here
const theBeatlesPlay = (musicians, instruments) => {
  let array = []
  for (let i = 0; i < musicians.length; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array; 
}


const johnLennonFacts = (facts) => {
  let newArray = []; 
  let i = 0; 
  while (i < facts.length) {
    newArray.push(`${facts[i]}!!!`); 
    i++;
  }
  return newArray; 
}

const iLoveTheBeatles = (n) => {
  let array = []; 
  let i = 0;
  do {
    array.push("I love the Beatles!");
   i++;
  }
  while (i < 15 - n); 
  
  return array; 
}
