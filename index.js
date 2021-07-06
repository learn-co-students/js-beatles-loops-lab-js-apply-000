// add solution here
function theBeatlesPlay(musicians, instruments)
{
  let a = []; 
  
  var str = '';
  var i=0;
  for(i=0;i<musicians.length;i++)
  {

      str = musicians[i] + " plays " + instruments[i];
      a.push(str);
    
  }
  
  return a;
}

function johnLennonFacts(facts)
{
  var i=0;
  while(i<facts.length)
  {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  
  return facts;
}

function iLoveTheBeatles(int)
{
  let empty = [];
  do {
    
    empty.push("I love the Beatles!");
    int++;
  }
  while(int < 15);
  return empty;
}