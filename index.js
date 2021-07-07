// add solution here

function theBeatlesPlay(musicians, instruments){
  var myArray = [];
  for(let i=0;i<musicians.length;i++){
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myArray;
}

function johnLennonFacts(facts){
  var count = 0;
  while(count<facts.length){
    facts[count] = `${facts[count]}!!!`;
    count++;
  }
  return facts;
}

function iLoveTheBeatles(num){
  var myArray = [];
  do{
    myArray.push("I love the Beatles!");
    num++
  }while(num<15);
  return myArray;
}