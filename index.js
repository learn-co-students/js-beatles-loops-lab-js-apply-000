const theBeatlesPlay = (musicians, instruments) => {
  const newArr = [];
  for(let i = 0; i <= musicians.length-1; i++){
    let string = `${musicians[i]} plays ${instruments[i]}`
    newArr.push(string)
  }
  return newArr;
}

const johnLennonFacts = (facts) => {
  let i = 0;
  while(i <= facts.length-1) {
    facts[i] = facts[i] + "!!!";
    i++
  }
  return facts;
}

const iLoveTheBeatles = (num) => {
  let array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return array;
}