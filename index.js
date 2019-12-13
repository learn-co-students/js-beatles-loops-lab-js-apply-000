// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var x = [];
  var counter = musicians.length;
  for(var i=0; i < counter; i++)
  {
    var temp = musicians[i] + " plays " + instruments[i];
    x.push(temp);
  }
  return x;
}
function johnLennonFacts(facts)
{
  var i=0;
  var excl = [];
  while (i < facts.length)
  {
   excl.push(facts[i]+"!!!");
   i++;
  }
  return excl;
}
function iLoveTheBeatles(n)
{
  var x = [];
  do{
    x.push("I love the Beatles!");
    n++;
  }
  while(n < 15);
  return x;
}