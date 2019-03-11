var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments)
{
  const array = [];
  for( let i=0, l=musicians.length; i<l; i++){
    array.push(musicians[i]+ " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(johnLennonFacts)
{ 
  var array = [];
  var i = 0;
  while (i < johnLennonFacts.length)
  {
    array.push(johnLennonFacts[i] +"!!!");
    i++;
  }
  return array;
}

function iLoveTheBeatles(num)
{
  var array = [];
  do
  {
    array.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return array;
}