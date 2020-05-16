// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var resArr=[];
  for(var i = 0; i < musicians.length; i++)
  {
    resArr[i] = musicians[i] + " plays " + instruments[i];
  }
  return resArr;
}

function johnLennonFacts(facts)
{
  var i = 0;
  while(i<facts.length)
  {
    facts[i] = facts[i]+"!!!";
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number)
{
  var arr=[];
  var index=0;
  do{
    arr[index++]="I love the Beatles!"
    number++;
  }while(number<15)
  return arr;
}