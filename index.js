// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var pairedskills = [];
  for (let counter = 0; counter < musicians.length; counter++)
  {
    pairedskills[counter] = `${musicians[counter]} plays ${instruments[counter]}`;
  }
  return pairedskills;
}

function johnLennonFacts(facts)
{
  var counter = 0;
  while (counter < facts.length)
  {
    facts[counter] = facts[counter] + "!!!"
    counter++;
  }
  return facts;
}

function iLoveTheBeatles(number)
{
  var love = [];
  var counter = 0;
  do
  {
    love[counter] = "I love the Beatles!"
    counter++;
    number++;
  }
  while (number < 15);
  return love;
}