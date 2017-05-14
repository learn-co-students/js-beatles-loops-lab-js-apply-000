function theBeatlesPlay(musicians, instruments)
{
  var empty = [];
  for(var i=0;i<musicians.length;i+=1)
  {
    empty.push(musicians[i]+" plays "+instruments[i]);
  }
  return empty;
}

function johnLennonFacts(facts)
{ var i = 0;
  while(i<facts.length)
  {facts[i]=facts[i]+"!!!";
  i+=1;}
  return facts;
}

function iLoveTheBeatles(number)
{
  var empty = [];
  do{
    empty.push("I love the Beatles!");
    number+=1;
  }
  while(number<15)
  return empty;
}