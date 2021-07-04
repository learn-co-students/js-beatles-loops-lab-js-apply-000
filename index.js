// add solution here
function theBeatlesPlay(musicians,instruments){
  var startsEmpty = [] 
  for(var i = 0; i<musicians.length;i++){
    var string = musicians[i] + ' plays ' + instruments[i]
    startsEmpty[i] = string 
  }
  return startsEmpty
}
function johnLennonFacts(facts){
  var i = 0;
  var string = []
  while(i<facts.length){
    string[i] = facts[i] + "!!!"
    i++
  }
  return string
}
function iLoveTheBeatles(n){
  var i = 0;
  var nums = [];
  do{
    nums[i] = "I love the Beatles!"
    i++;
    
  }
  while(i<=n && n<15);
  return nums
}