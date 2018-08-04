function theBeatlesPlay(musicians,instrumnets){ 
  var list=[]
  for (var i = 0; i < musicians.length;i++) {
    var string=musicians[i] + ' plays '+ instrumnets[i];
    list.push(string);
  }
  return list 
}
function johnLennonFacts(facts){
  var i= 0
  while(i<facts.length){
    facts[i] = facts[i] + "!!!"
    i++ 
  }
  return facts
}
function iLoveTheBeatles(number){
  var list=[]
  var i= number
  do{
var string= "I love the Beatles!" 
list.push(string);
i++
  }
  while (i<15) 
  return list
}
