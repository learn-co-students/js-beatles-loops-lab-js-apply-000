/*
create a function 'theBeatlesPlay'
accepts 2 params 

var theBeatles
craete empty arr
array of musicians + array of instruments
use a for loop iterate over musicians
1st time through loop should create a String
of 1st index of musician and 1st of insturms
'John Lennon plays Guitar'
add this to empty arr
*/

var theBeatlesPlay = function(musicians, instruments){
  var theBeatlesPlay = [];
  //loop through musicians array
  for(var i = 0; i < musicians.length; i++){
    //use first iterate with with element of instruments array
    for(var j = 0; j < instruments.length; j++){
       theBeatlesPlay.push(`${musicians[i++]} plays ${instruments[j]}`);
    }
   return theBeatlesPlay;
  }
};

var johnLennonFacts = function(facts){
  var johnLennonFacts = [];
  while(johnLennonFacts.length < facts.length){
    for(var i = 0; i < facts.length; i++)
    johnLennonFacts.push(`${facts[i]}!!!`);
  }
  return johnLennonFacts;
};

var iLoveTheBeatles = function(number){
  var arr = [];
  var i = 0;
  do{
    i++;
    arr.push('I love the Beatles!');
    if(number > 15){
      return arr;
    }
      }
     while(i <= number);
   return arr;
};
