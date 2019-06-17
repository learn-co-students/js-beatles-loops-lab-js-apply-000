// // add solution here
const theBeatlesPlay = (musicians, instruments) => {
    let playArray = []; 
    
    for (let i = 0; i < musicians.length; i++) {
        const str = `${musicians[i]} plays ${instruments[i]}`; 
        playArray.push(str); 
      }
    
    return playArray; 
}

const johnLennonFacts = facts => {
  let arrayOfStrings = [],
      index = 0; 
      
      while (index < facts.length) {
        arrayOfStrings.push(`${facts[index]}!!!`)
        index++;
      }
      return arrayOfStrings; 
}

const iLoveTheBeatles = number => {
  let resultArray = []; 
  do {
  resultArray.push("I love the Beatles!")
  number++; 
} while (number < 15);

  return resultArray; 
}

