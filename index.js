// add solution here
function theBeatlesPlay (musicians, instruments){
  const statement = [];
  
  for (var i = 0; i < musicians.length; i++) {
    statement.push(musicians[i] + " plays " + instruments[i]);
  }  
  return statement;
}

function johnLennonFacts (){
  let i = 0;
  const sayings = [];
  
  while (i < sayings.length){
    sayings.push(sayings[i] + "!!!");
    i++;
  } 
  return sayings;
}

function iLoveTheBeatles(parameter){
  const love = [];
  
  do{
    love.push("I love the Beatles!");
    parameter++
  } while( parameter < 17 );
  
  return love;
}

