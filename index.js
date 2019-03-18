// add solution here
function theBeatlesPlay(musicians,instruments){
  var a=[];
  //var b= " " +"plays" + " "
  for(var i=0;i<musicians.length;i++){
  a.push(musicians[i] + " plays " + instruments[i]);
  }
  return a;
}
function johnLennonFacts(facts){
  const johnLennonFacts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
   ];
  
  var result=[]
  var x=0;
  while(x<johnLennonFacts.length ){
    
  result.push(johnLennonFacts[x] + "!!!");
  x++;
}
return result;
}
  
  function iLoveTheBeatles(num){
  let beats=[];
 // num=0
  
  do{
    beats.push('I love the Beatles!');
    num++;
    
  }
  while(num<15);
  
  
  return beats;
  
  }
  