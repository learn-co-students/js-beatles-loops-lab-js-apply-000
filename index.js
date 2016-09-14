var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments)
{
  var arrayLength = musicians.length;
  var array = new Array();
  for (var i = 0; i < arrayLength; i++)
  {
    array.push(`${musicians[i]} plays ${instruments[i]}`);

  }
  return array;
}

var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"]

function johnLennonFacts(facts)
{
  var length = facts.length;
  var arr = new Array();
  var i = 0;
  while (i < length)
  {
    arr.push(`${facts[i]}` + "!!!");
    i++;
  }
  return arr;
}

function iLoveTheBeatles(number)
{
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    number++;
  }
  while (number < 15)
  return newArray;
}
