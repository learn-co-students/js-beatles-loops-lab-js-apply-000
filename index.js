let theBeatlesPlay = (musicians, instruments) => {
  let array = [];
  for (let i = 0; i < musicians.length; i++) {
    let person = musicians[i];
    array.push(person + ' plays' + ' ' + instruments[i]);
  }
  
  return array;
}


let johnLennonFacts = factsArray => {
  let array = [];
  let i = 0
  
  while (i < factsArray.length) {
    
    array.push(`${factsArray[i]}!!!`);
    i++;
  } 
  
  return array;
}


let iLoveTheBeatles = number => {
  let newArr = [];
  do {
    newArr.push(`I love the Beatles!`);
    number++
  } while (number < 15);
  return newArr;
}

