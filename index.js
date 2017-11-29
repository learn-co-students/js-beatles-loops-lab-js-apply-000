function theBeatlesPlay(musicians, instruments)
{
  var play = [];

  for (var i = 0; i < musicians.length; i++){
    play.push(musicians[i] + " plays " + instruments[i]);
  } return play;
}

  const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];

function johnLennonFacts(facts)
{
  for (var i = 0; i < facts.length; i++){
    facts[i] = facts[i] + "!!!";
  } return facts;
}

function iLoveTheBeatles(number)
{
  var love = [];
  var i = 0;
  do{
    love.push("I love the Beatles!")
    number++;
  }
  while (number < 15);
  return love;
}
