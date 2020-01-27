// add solution here
let index=[];
function theBeatlesPlay(musicians,instruments){
  for(let i=0;i<musicians.length;i++){
    index.push(musicians[i]+" plays "+instruments[i]);
  }
  return index;
}
function johnLennonFacts(facts){
    let x=0;
    while(x<facts.length){
      facts[x]=facts[x]+'!!!';
      x++;
    }
    return facts;
  }
function iLoveTheBeatles(number){
  var lov=[];
  do{
    lov.push("I love the Beatles!");
    number++;
  }
  while(number<15);
  return lov;
}
  