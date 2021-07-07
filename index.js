function theBeatlesPlay(musicians, instruments){
  let result = [];
  for(let i = 0; i < musicians.length; i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}

function johnLennonFacts(facts){
  let newArr = [];
  let i = 0;
  while (i < facts.length){
    newArr.push(facts[i] + '!!!');
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num){
  let result = [];
  do {
    result.push("I love the Beatles!");
    num++;
  } while
    (num < 15);
  return result;
}