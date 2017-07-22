function theBeatlesPlay(musicians,instruments){
  let finalArr = [];
  for(let i = 0;i < 4;i++){
    finalArr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return finalArr
}

function johnLennonFacts(facts){
  let newArr = [];
  for(let i = 0;i < facts.length;i++){
    newArr.push(facts[i] + '!!!')
  }
  return newArr;
}

function iLoveTheBeatles(num){
  let finalArr = [];
  do{
    finalArr.push('I love the Beatles!');
    num++;
  } while(num < 15);
  return finalArr;
}
