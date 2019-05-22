// add solution here
function theBeatlesPlay(musicians, instruments){
  let newArr=[];
  for(let i=0; i<musicians.length;i++){
    let musician=musicians[i];
    let instrument=instruments[i];
    newArr.push(`${musician} plays ${instrument}`)
  }
  return newArr;
}
function johnLennonFacts(facts){
  let i=0;
  let newArr=[];
  while(i<facts.length){
    let fact=facts[i];
    newArr.push(`${fact}!!!`);
    i++;
  }
  return newArr;
}
function iLoveTheBeatles(number){
  let arr=[];
  let i=number;
  do{
    arr.push("I love the Beatles!");
    i++;
  }
  while(i<15);
  return arr;
}