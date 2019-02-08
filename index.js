// add solution here
function theBeatlesPlay(musicians, instruments){
  var solution = [];
  for(var i =0; i<musicians.length; i++){
    var string = musicians[i]+" plays "+instruments[i];
    solution.push(string);
  }
  return solution;
}

function johnLennonFacts(facts){
  var solution = [];
  var i = 0;
  while(i<facts.length){
    solution[i] = facts[i]+"!!!";
    i++;
  }
  return solution;
}

function iLoveTheBeatles(num){
  var solution = [];
  var i = 0;
  do{
    solution.push("I love the Beatles!");
    i++;
  }
  while(i < 15-num);
  return solution;
}
