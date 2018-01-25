function theBeatlesPlay(musicians, instruments){
  let arr =[];
  for(let i = 0; i < musicians.length; i++){
     arr.push(`${musicians[i]} plays ${instruments[i]}`);
   }
    return arr;
}

function johnLennonFacts(facts){
 let count = 0;
  let arr2 =[];
  while(count < facts.length){
    arr2.push(`${facts[count]}!!!`);
    count++;
  }
  return arr2;
}

function iLoveTheBeatles(number){
  let emptyArr =[];
  do{
    emptyArr.push(`I love the Beatles!`)
      number++
  }
  while(number < 15);
  return emptyArr;
}
