function theBeatlesPlay(musicians, instruments)
{
  var sentences = [];
  for (var i = 0; i < musicians.length; i++)
  {
    var combo = musicians[i] + " plays " + instruments[i];
    sentences.push(combo);
  }
  return sentences;
}

function johnLennonFacts(facts)
{
  var editedFacts = [];
  for (var i = 0; i < facts.length; i++)
  {
    var edited = facts[i] + "!!!";
    editedFacts.push(edited);
  }
  return editedFacts;
}

function iLoveTheBeatles(num)
{
  var loveTheBeatles = [];
  do
  {
    loveTheBeatles.push("I love the Beatles!");
    num++
  }
  while(num <15)

  return loveTheBeatles
}
