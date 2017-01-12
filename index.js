


var mus = ['musicians'];
var instr = ['instruments'];

function theBeatlesPlay (mus, instr){
  var band = [];
  for (var i=0; i< mus.length; i++){
    band.push(mus[i] + ' plays ' + instr[i]);
    }
    return band;
}


function johnLennonFacts(facts){
  var john = [];
  var i = 0;
  while (i < facts.length){
    john.push(facts[i] + '!!!');
    i++;
  }
  return john;
}



function iLoveTheBeatles (int){
  var bb = []; 
  do {
    bb.push('I love the Beatles!');
    int++;
  }
    while (int < 15);
  return bb;
}
