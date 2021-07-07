// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var array = [];
  for (var j=0; j < musicians.length; j++)
  {
    array[j] = musicians[j] + " plays " + instruments[j]
  }
  return array;
}

function johnLennonFacts(arrFacts)
{
  for (var j=0; j < arrFacts.length; j++)
  {
    arrFacts[j] = arrFacts[j] + "!!!";
  }
  return arrFacts;
}

function iLoveTheBeatles(num)
{
  var arr = [];
  if (num > 15)
  {
    arr[0] = "I love the Beatles!";
    return arr;
  }
    
  do
  {
    arr[num] = "I love the Beatles!"
    num --;
  }
  while (num > -1)
  return arr;
}