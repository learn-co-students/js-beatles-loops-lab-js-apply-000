// add solution here

function theBeatlesPlay(musicians, instruments)
{
  var strings = [];
  
  for(var i = 0; i < musicians.length; i++)
  {
    strings.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return strings;
}

function johnLennonFacts(facts)
{
  var i = 0;
  
  while(i < facts.length)
  {
    facts[i] = facts[i] + "!!!";
    
    i++;
  }
  
  return facts;
}

function iLoveTheBeatles(num)
{
  var i = 0;
  var arr = [];
  
  do
  {
    arr.push("I love the Beatles!");
    i++;
  }
  while(num < 15 && i < 15 - num)
  
  return arr;
}




