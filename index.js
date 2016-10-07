// test 1
var theBeatlesPlay = function(musicians, instruments){
  var body = [];

  // loop from 0 to the length of the musicians array
  for(var i = 0; i < musicians.length; i++){
    var plays = musicians[i] + " plays " + instruments[i];
    body.push(plays);
  }
  return body;
}

// test 2
var johnLennonFacts = function(facts){

  // initialize variables
  var endLoop = facts.length;
  var loop = 0;

  while(loop != endLoop){
    // change string
    facts[loop] = facts[loop] + "!!!";
    loop++;
  }

  return facts;
}

// test 3
var iLoveTheBeatles = function(num){

  var statement = [];

  do{
    statement.push("I love the Beatles!");
    num++;
  }
  while(num < 15);

  return statement;

}
