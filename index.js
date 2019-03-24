// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var a = []
  for (var i = 0; i < musicians.length; i++)
  {
    a.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return a;
}

function johnLennonFacts(facts)
{
 var b = []
 var i = 0
  while (i < facts.length)
  {
    b.push(`${facts[i]}!!!`)
    i++
  }
  return b;
}

function iLoveTheBeatles(num)
{
  var c = [];
  do {
    c.push("I love the Beatles!")
    num++
  }
  while ( num < 15)  
  return c;
}

