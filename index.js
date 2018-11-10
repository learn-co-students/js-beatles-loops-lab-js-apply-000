// add solution here
function theBeatlesPlay (mus, ins)
{
  var lego = [];
  for (var i = 0; i < mus.length; i++)
  {
    lego.push(mus[i] + " plays " + ins[i]);
  }
  return lego;
}
function johnLennonFacts(facts)
{
  var x = 0;
  var test = [];
  while (x < facts.length)
  {
    facts[x] = facts[x] + "!!!";
    x++;
  }
  return facts;
}
function iLoveTheBeatles(num)
{
  if(num > 15)
  {
    var lego1 = ["I love the Beatles!"]
    return lego1;
  }
  var lego = [];
  var x = 0;
  do
  {
    lego.push("I love the Beatles!");
    x++;
  }
  while(x <= num);
  return lego;
}