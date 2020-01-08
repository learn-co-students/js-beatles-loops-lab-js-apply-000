// add solution here
const theBeatlesPlay = (musicians, instruments) => {
  const arr = [];
  for(let i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return arr;
}

const johnLennonFacts = facts => {
  let count = 0;
  const arr = []
  while (count < facts.length) {
    
    arr.push(facts[count] + "!!!");
    count++;
  }
  return arr;
}


const iLoveTheBeatles = (num) => {
  const arr =[];
  let i = 0;
  do {
    i++;
    arr.push("I love the Beatles!")
    
  }
  while (num < 15 && i <= num);
  
  return arr;
}