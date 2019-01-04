// add solution here
function theBeatlesPlay(musicians,instruments) {
  var array = [];
  for(var i = 0; i<musicians.length; i++) {
    array.push(musicians[i] +" plays "+ instruments[i])
  }
  return array
}


function johnLennonFacts(facts) {
  var array = []
  var i = 0;
  while (array.length < facts.length) {
    array.push(facts[i] + "!!!");
    i++;
  }
  return array;
}

function iLoveTheBeatles(numbers) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    numbers += 1
  } while(numbers < 15);
  return array;
}
