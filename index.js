function theBeatlesPlay(musicians,instruments) {
  var array=[];
  for (let i=0; i < musicians.length; i++) 
  {
    var string=`${musicians[i]} plays ${instruments[i]}`;
    array.push(string);
  }
  return array;
}

 function johnLennonFacts(facts) {
  var newFacts=[];
  let i=0;
  while (i<facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts; 
}

function iLoveTheBeatles(num) {
  var love=[];
  do{
    love.push("I love the Beatles!");
  num++;
  }while (num<15);
  return love;
}
  

