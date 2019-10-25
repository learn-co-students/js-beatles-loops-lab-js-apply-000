// add solution here
const theBeatlesPlay = (musicians, instruments) => {
  
    const musician_info = []; 
  
    for (let i = 0; i < musicians.length; i++) {
      const info = `${musicians[i]} plays ${instruments[i]}`;
      musician_info.push(info)
    }
  
    return musician_info;
}

const johnLennonFacts = facts => {
  let i = 0;
  while (i < facts.length) {
    
    facts[i] = `${facts[i]}!!!`;
    i++; 
  }
  return facts;
}

const iLoveTheBeatles = num => {
  
  const strings = [];
  let i = 0;
  do {
    strings.push("I love the Beatles!")
    i++
  } while (i < (15 - num))
  return strings
}

