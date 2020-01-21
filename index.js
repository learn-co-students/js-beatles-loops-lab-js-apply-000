function theBeatlesPlay(musicians, instruments)
{
  var whoplayswhat = []
  for(var i = 0; i < musicians.length; i++)
  {
    var sentence = musicians[i] + " plays " + instruments[i]
    whoplayswhat.push(sentence)
  }
  return whoplayswhat
}

function johnLennonFacts(facts)
{
  var i = 0
  while(i < facts.length)
  {
    facts[i] += "!!!"
    i+= 1
  }
  return facts
}

function iLoveTheBeatles(num)
{
  var blah = []
  do{blah.push("I love the Beatles!")
     num += 1
    }
  while(num < 15)
  return blah
}