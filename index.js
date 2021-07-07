function theBeatlesPlay(mu, ins){
    let emptyArr = [];
    for (var i = 0; i < mu.length; i++) {
      emptyArr.push(`${mu[i]} plays ${ins[i]}`);
    }
    return emptyArr;
}

function johnLennonFacts(facts){
  let newArr = [];
  let i = 0;
  while (i < facts.length) {
    newArr.push(facts[i] + "!!!")
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num){
  let newArr = [];
  do {
    newArr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return newArr;
}
