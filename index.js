function theBeatlesPlay(musicians,instruments){
  var array = [];
  for (var i = 0; i <  musicians.length; i++ ){
    array.push(musicians[i] + " plays "+ instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] = facts [i] +"!!!";
    i++;
  }
  return facts;

}

var number = 3

function iLoveTheBeatles(number) {
  var array = [];
  var i =0;

  do {
    array.push("I love the Beatles!");
    i++;
  }
  while (i <= number && number < 15);
  return array;
}
