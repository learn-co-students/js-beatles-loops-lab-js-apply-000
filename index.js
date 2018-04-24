function theBeatlesPlay(musicians,instruments){
 const newArray=[];
  for(let i = 0;i<musicians.length;i++){ 
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}

function johnLennonFacts(facts){
  const newArray=[];
  var i=0;
  while (i<facts.length){
  newArray.push(facts[i]+"!!!")
  i++;
  }
  return newArray;
}

function iLoveTheBeatles(n){
const newArray=[];
var i=n;
do{
  newArray.push("I love the Beatles!");
  i++
}
  while(i<15)
  return newArray;
}













