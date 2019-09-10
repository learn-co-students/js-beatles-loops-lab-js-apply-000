// add solution here
function theBeatlesPlay(musArr, instrArr){
  const res = [];
  for(let i = 0; i < musArr.length; i++){
    let instrument = instrArr[i];
    let name = musArr[i];
    res.push(`${name} plays ${instrument}`);
  }
  return res;
}

const johnLennonFacts = factsArr => {
  let i = 0;
  const res = [];
  while(i<factsArr.length){
    let fact = factsArr[i]+'!!!';
    res.push(fact);
    i+=1;
  }
  return res;
}

const iLoveTheBeatles = num => {
  const arr = [];
  
  let i = num;
  
  do {
   arr.push("I love the Beatles!");
   i++;
  }
  while (i < 15);
  
  return arr;
}

