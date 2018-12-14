// add solution here
function theBeatlesPlay(musicians,instrumests){
  var n=[];
  for(var i=0;i<musicians.length;i++){
    n.push(musicians[i]+" plays "+instrumests[i]);
    
  }
  return n
}
const facts=
  ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
function johnLennonFacts(facts){
 var newnum=[];
  var i=0;
  while(i<facts.length){
    newnum.push(facts[i] +"!!!");
    i++;
  }
  return newnum;
}
function iLoveTheBeatles(num){
  var newarray=[];
  do{
  newarray.push("I love the Beatles!");
  num++;
  }
  while(num<15);
   return newarray;
  
}