// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var results = [];
  var i=0;
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    for (i=0;i<musicians.length;i++)
    {
      results[i]=musicians[i]+" plays "+ instruments[i];
    }
    return results;
}

function johnLennonFacts(facts)
{
  var newFacts = [
];

var i=0;
while(i<facts.length)
{
  newFacts[i]=facts[i]+"!!!";
  i++;
}
return newFacts;
}

function iLoveTheBeatles(i)
{
  var love=[];
  do{
    love.push("I love the Beatles!");
    i++;
  } while (i<15);
  return love;
}