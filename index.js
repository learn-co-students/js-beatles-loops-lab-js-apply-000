function theBeatlesPlay(musicians, instruments)
{
  var instrumentsPlayed = []
  for (var i=0; i < musicians.length; i++)
  {
    instrumentsPlayed.push(musicians[i] + " plays " + instruments[i])
  }
  return instrumentsPlayed
}

function johnLennonFacts(facts)
{
  var i = 0
  while (i < facts.length)
  {
    facts[i] += "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(lovetasticness)
{
  var loveStrings = []
  do
  {
    lovetasticness++
    loveStrings.push("I love the Beatles!")
  } while (lovetasticness < 15)
  return loveStrings
}