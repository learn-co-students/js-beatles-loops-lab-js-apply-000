// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments)
{
  var emptyArray = [];
  var i;
  for(i = 0; i < musicians.length; i++)
  {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}

var newArray = theBeatlesPlay(musicians, instruments);
console.log(newArray);

function johnLennonFacts(facts)
{
  var emptyArray = [];
  var i = 0;
  while(i < facts.length)
  {
    //emptyArray[i] = facts[i] + "!!!";
    emptyArray.push(facts[i] + '!!!');
    i++;
  }
  return emptyArray;
}


function iLoveTheBeatles(n)
{
  var emptyArray = [];

  do
  {
    emptyArray = emptyArray.concat(["I love the Beatles!"]);
    n++;
  }
  while(n<15);
  return emptyArray
}

var emptyArray3 = iLoveTheBeatles(1);
console.log(emptyArray3);