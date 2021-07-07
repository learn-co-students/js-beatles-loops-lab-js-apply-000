function theBeatlesPlay(a, b)
{
  var ab = [];
  for (var n = 0; n < a.length; n++)
  {
    ab[n] = a[n] + " plays " + b[n];
  }
  return ab;
}

function johnLennonFacts(c)
{
  var n = 0;
  while (n < c.length)
  {
    c[n] = c[n] + "!!!";
    ++n;
  }
  return c;
}

function iLoveTheBeatles(z)
{
  var x = [];
  
  do
  {
    x.push("I love the Beatles!");  
    ++z;
  }
  while (z < 15);
  return x;
}