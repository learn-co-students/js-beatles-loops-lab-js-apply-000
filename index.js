function theBeatlesPlay(musicians,instruments)
{
  var array = [];
  for(var i = 0; i<musicians.length; i++)
  {
    var sent = musicians[i] + " plays " + instruments[i];
    array.push(sent);
  }
  return array;
}
function johnLennonFacts(facts)
{
  var count = 0
  while(count<facts.length)
  {
    facts[count]=facts[count]+"!!!"
    count++
  }
  return facts;

}

function iLoveTheBeatles(num)
{
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++
  } while (num<15);
  return array;
}
